# Panduan Agent — Render Video di Repo Ini

Ditulis untuk agent AI (dan manusia) supaya bisa menghasilkan video jadi tanpa
menebak-nebak. Ikuti urutannya, jangan lompat.

## 0. Pahami kontrak besarnya

- **Semua render terjadi di GitHub Actions** (workflow `render.yml`). Lokal = nulis kode saja.
- Satu folder `projects/<nama>/` = satu video.
- Scene = HTML yang **deterministik**: semua animasi adalah fungsi dari waktu `t`,
  dipanggil lewat `window.SEEK(t)`. Tidak ada `CSS animation`, `transition`,
  `setTimeout`, atau `requestAnimationFrame` di scene — frame harus bisa diulang
  persis sama kapan pun.

## 1. Salin template

```
projects/<nama>/
  project.json      # wajib — schema di bawah
  scene.html        # wajib — harus mengekspor window.SEEK(t)
  assets/           # wajib — semua file yang dipakai scene/audio, offline
```

Nama folder: huruf kecil, angka, tanda minus (`kall-promo-1`, `demo-arsip-2`).

## 2. `project.json`

```json
{
  "id": "kall-promo-1",
  "title": "Judul video",
  "width": 720,
  "height": 1280,
  "fps": 60,
  "duration": 22,
  "scene": "scene.html",
  "audio": {
    "voice": { "file": "assets/vo.mp3", "gain": 1.0 },
    "sfx": [
      { "file": "assets/sfx/vine-boom.mp3", "at": 0.2, "gain": 0.5 }
    ]
  },
  "out": "kall-promo-1.mp4"
}
```

| Field | Ketentuan |
|---|---|
| `width`×`height` | 720×1280 (default). Jangan ganti tanpa alasan kuat. |
| `fps` | 60 (default). |
| `duration` | **maks 30 detik.** |
| `audio.voice` | opsional; VO/voiceover mono/stereo mp3/wav. |
| `audio.voice.speed` | opsional; `atempo` (jaga pitch), mis. 1.32 untuk VO lambat. |
| `audio.voice.energy` | opsional `true`; kompresi + presence boost biar nggak lemas. |
| `audio.sfx` | opsional; `at` = detik mulai, `gain` 0..1.5. |
| `out` | nama file hasil, harus `.mp4`. |

## 3. `scene.html` — kontrak visual

Wajib menyediakan:

```js
window.SEEK = function (t) { /* t dalam detik, 0 <= t <= duration */ };
```

Aturan:

1. `SEEK(t)` mengatur **semua** keadaan visual untuk waktu `t` (opacity, transform, teks aktif).
2. **Determinisme penuh** — `SEEK(1.5)` selalu menghasilkan piksel yang sama.
   Larangan: `CSS animation`, `CSS transition`, `Date.now()`, `Math.random()`
   (kecuali dengan seed tetap), timer apa pun.
3. Font harus `@font-face` dari `assets/` (jangan Google Fonts runtime — CI bisa beda hasil).
4. Gambar/stiker/audio = file lokal di `assets/`.
5. Hormati **safe area TikTok**: konten penting jangan masuk 150px paling atas
   dan 300px paling bawah; sisi kanan 130px untuk rail ikon.
6. Pakai `easeOutBack`/`easeOutCubic` buatan sendiri untuk pop — jangan `cubic-bezier` CSS.

Engine akan: buka scene di chromium headless (viewport = width×height), panggil
`SEEK(i/fps)` untuk tiap frame `i`, tangkap screenshot JPEG, pip langsung ke ffmpeg.

## 4. Audio & VO

- VO dibuat dari TTS (mp3) → taruh `assets/vo.mp3` → set di `project.json`.
- SFX = file mp3 di `assets/sfx/`, timing di `project.json` (jangan dikodekan di scene).
- Mixing otomatis: `voice + sfx (adelay) -> amix normalize=0 -> loudnorm I=-14 TP=-1.5`.
- Musik latar: kalau perlu, tambah sebagai `sfx` dengan `gain` kecil (0.15-0.25) di `at: 0`.

## 5. Menjalankan render

Actions → **Render video (720p60)** → Run workflow → `project` = nama folder.

- Smoke test cepat: set `duration` kecil (mis. 3) di `project.json`, render, cek hasil.
- Hasil: artifact `video-<nama>` + commit otomatis ke `out/<nama>.mp4`.
- Waktu render kasar: ~2-6 menit untuk 20-30 detik.

## 6. QA sebelum rilis

- [ ] `SEEK(0)`, `SEEK(tengah)`, `SEEK(duration-0.1)` masuk akal (tidak ada frame kosong/bug).
- [ ] Teks tidak keluar safe area.
- [ ] VO jelas terdengar di atas sfx (gain sfx ≤ 0.5 kalau ada VO).
- [ ] Durasi ≤ 30 detik.
- [ ] Semua aset lokal (tidak ada URL http di scene.html).

## 7. Format & kualitas

Standar tetap ada di [SPEC-FORMAT.md](SPEC-FORMAT.md). Ringkas: **MP4, H.264 High,
720×1280, 60fps, CRF 19, yuv420p, AAC 192k 48kHz, loudnorm -14 LUFS, faststart.**

## 8. Larangan keras

- Render di lokal / mesin pribadi.
- Trigger otomatis (schedule, push) untuk render — repo ini manual-only.
- Video > 30 detik atau resolusi/fps di luar standar tanpa diskusi.
- Menyimpan kredensial apa pun di repo.
- Men-commit file mentah raksasa (frame PNG, PSD) — cukup aset ringan + mp4 hasil.
