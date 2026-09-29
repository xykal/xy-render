# xy-render

Ruang render video **720×1280 @ 60fps** lewat **GitHub Actions** — bukan di lokal.
Dibuat khusus supaya agent (atau manusia) bisa memproduksi video TikTok/Reels/Shorts
dengan kualitas konsisten tanpa membebani mesin lokal.

> **Aturan emas: JANGAN PERNAH render di lokal.** Render = encoding ribuan frame,
> itu tugas CI. Lokal cuma buat nulis kode scene.

## Cara pakai (3 langkah)

1. Siapkan project di `projects/<nama>/` (lihat [docs/AGENT-GUIDE.md](docs/AGENT-GUIDE.md)).
2. Jalankan workflow **"Render video (720p60)"** — Actions → Run workflow → isi `project`.
3. Ambil hasilnya di **artifact** workflow atau folder **`out/`** (otomatis di-commit).

Hasil: `out/<nama>.mp4` — MP4, H.264, 720×1280, 60fps, AAC 48kHz, loudness -14 LUFS
(TikTok-ready). Detail format: [docs/SPEC-FORMAT.md](docs/SPEC-FORMAT.md).

## Struktur

```
projects/<nama>/        # satu project = satu video
  project.json          # konfigurasi (durasi, fps, audio, output)
  scene.html            # visual + animasi (kontrak window.SEEK(t))
  assets/               # font, sfx, stiker, vo.mp3 — semua lokal, offline
tools/render.mjs        # mesin render generik (chromium -> frame -> ffmpeg)
docs/AGENT-GUIDE.md     # panduan lengkap untuk agent & manusia
docs/SPEC-FORMAT.md     # standar format & kualitas
out/                    # hasil render (di-commit oleh workflow)
```

## Pagar sopan-santun (GitHub AUP)

Menit CI itu dipakai bersama. Repo ini sengaja dibatasi:

| Batasan | Nilai | Kenapa |
|---|---|---|
| Trigger | `workflow_dispatch` manual saja | tanpa jadwal/webhook — nggak ada render liar |
| Durasi video | **maks 30 detik** | 1800 frame @60fps itu batas wajar |
| Timeout job | 15 menit | auto-kill kalau lewat |
| Resolusi/fps | 720×1280 @60 | jangan dinaikkan tanpa diskusi |
| Artifact | 7 hari | hemat storage |
| Concurrency | cancel-in-progress | job ganda dibatalkan |

Melanggar = kena flag akun. Jangan.

## Kredit aset

- SFX: [myinstants.com](https://www.myinstants.com/en/index/us/) (vine boom, bruh, anime wow, dll.)
- Stiker: [Meme receh indo](https://getstickerpack.com/stickers/meme-receh-indo) oleh **luissela**
- Font: Plus Jakarta Sans (OFL)
- Produk: DownloadAja — dibuat XyVerse, konten "bikinan Kall"

## Lisensi

Kode tooling: [MIT](LICENSE). Aset pihak ketiga tunduk pada lisensi masing-masing.
