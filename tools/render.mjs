#!/usr/bin/env node
/**
 * Mesin render generik xy-render.
 *
 * Chromium headless -> window.SEEK(t) per frame -> JPEG dipip langsung ke ffmpeg
 * (H.264 720x1280@60 + mix audio + loudnorm -14 LUFS).
 *
 * Dipakai oleh GitHub Actions (.github/workflows/render.yml).
 * JANGAN jalankan di lokal — render berat = tugas CI. Lihat docs/AGENT-GUIDE.md.
 *
 * Pakai: node tools/render.mjs projects/<nama>
 */
import { spawn } from 'node:child_process';
import { createRequire } from 'node:module';
import { copyFileSync, existsSync, mkdirSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

import { chromium } from 'playwright';

const require = createRequire(import.meta.url);
const ffmpegPath = require('ffmpeg-static');

const dir = process.argv[2];
if (!dir) {
  console.error('Pakai: node tools/render.mjs projects/<nama>');
  process.exit(1);
}
const root = process.cwd();
const projDir = path.resolve(root, dir);
const cfg = JSON.parse(readFileSync(path.join(projDir, 'project.json'), 'utf8'));

const W = cfg.width || 720;
const H = cfg.height || 1280;
const FPS = cfg.fps || 60;
const DUR = Math.min(30, Number(cfg.duration) || 15); // pagar keras 30 detik
const FRAMES = Math.round(DUR * FPS);
const outName = cfg.out || `${cfg.id}.mp4`;

const abs = (f) => path.join(projDir, f);
const audioInputs = [];
if (cfg.audio?.voice?.file) audioInputs.push({ ...cfg.audio.voice, kind: 'voice' });
for (const s of cfg.audio?.sfx || []) audioInputs.push({ ...s, kind: 'sfx' });
for (const a of audioInputs) {
  if (!existsSync(abs(a.file))) {
    console.error(`Aset audio hilang: ${a.file} — semua aset harus lokal & lengkap.`);
    process.exit(1);
  }
}

const afChain = [];
const mixLabels = [];
audioInputs.forEach((a, i) => {
  const gain = a.gain ?? (a.kind === 'voice' ? 1.0 : 0.5);
  const delay = Math.round((a.at || 0) * 1000);
  afChain.push(
    `[${i + 1}:a]aformat=sample_fmts=fltp:sample_rates=48000:channel_layouts=stereo,` +
    `volume=${gain},adelay=${delay}:all=1[a${i}]`
  );
  mixLabels.push(`[a${i}]`);
});
let audioMap = '-an';
let filterComplex = '';
if (mixLabels.length) {
  filterComplex = afChain.join(';') +
    (mixLabels.length > 1
      ? `;${mixLabels.join('')}amix=inputs=${mixLabels.length}:normalize=0[amix];` +
        `[amix]loudnorm=I=-14:TP=-1.5:LRA=11[aout]`
      : `;${mixLabels[0]}loudnorm=I=-14:TP=-1.5:LRA=11[aout]`);
  audioMap = '[aout]';
}

const ffArgs = [
  '-y', '-hide_banner', '-loglevel', 'warning', '-stats',
  '-f', 'image2pipe', '-framerate', String(FPS), '-i', '-',
  ...audioInputs.flatMap((a) => ['-i', abs(a.file)]),
];
if (filterComplex) ffArgs.push('-filter_complex', filterComplex);
ffArgs.push(
  '-map', '0:v',
  ...(audioMap === '-an' ? ['-an'] : ['-map', audioMap]),
  '-c:v', 'libx264', '-preset', 'medium', '-crf', '19',
  '-profile:v', 'high', '-level', '4.2', '-pix_fmt', 'yuv420p',
  '-colorspace', 'bt709', '-color_primaries', 'bt709', '-color_trc', 'bt709',
  '-r', String(FPS), '-movflags', '+faststart',
  ...(audioMap === '-an' ? [] : ['-c:a', 'aac', '-b:a', '192k', '-ar', '48000']),
  path.join(root, 'tmp', outName)
);
mkdirSync(path.join(root, 'tmp'), { recursive: true });
mkdirSync(path.join(root, 'out'), { recursive: true });

console.log(`Render ${cfg.id}: ${W}x${H}@${FPS} ${DUR}s = ${FRAMES} frame, audio: ${audioInputs.length} track`);

const ffmpeg = spawn(ffmpegPath, ffArgs, { stdio: ['pipe', 'inherit', 'inherit'] });
let ffErr = null;
ffmpeg.on('error', (e) => { ffErr = e; });

const browser = await chromium.launch({
  args: ['--no-sandbox', '--disable-dev-shm-usage', '--force-color-profile=srgb', '--hide-scrollbars'],
});
const page = await browser.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: 1 });
await page.goto(pathToFileURL(abs(cfg.scene || 'scene.html')).href, { waitUntil: 'load' });

const ready = await page.evaluate(async () => {
  if (typeof window.SEEK !== 'function') return 'SEEK tidak ditemukan di scene.html';
  await document.fonts.ready;
  await Promise.all([...document.images].map((i) => i.decode().catch(() => {})));
  return 'ok';
});
if (ready !== 'ok') {
  console.error(ready);
  process.exit(1);
}

const t0 = Date.now();
for (let i = 0; i < FRAMES; i++) {
  const t = i / FPS;
  await page.evaluate((tt) => window.SEEK(tt), t);
  const buf = await page.screenshot({ type: 'jpeg', quality: 92 });
  if (!ffmpeg.stdin.write(buf)) {
    await new Promise((res) => ffmpeg.stdin.once('drain', res));
  }
  if (i > 0 && i % 180 === 0) {
    const el = (Date.now() - t0) / 1000;
    console.log(`  ${i}/${FRAMES} frame · ${el.toFixed(0)}s berjalan`);
  }
}
ffmpeg.stdin.end();

const code = await new Promise((res) => ffmpeg.on('close', res));
await browser.close();
if (ffErr || code !== 0) {
  console.error('ffmpeg gagal', ffErr || `exit ${code}`);
  process.exit(1);
}

copyFileSync(path.join(root, 'tmp', outName), path.join(root, 'out', outName));
console.log(`SELESAI -> out/${outName} (${((Date.now() - t0) / 1000).toFixed(0)}s total)`);
