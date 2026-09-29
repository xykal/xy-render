# Standar Format & Kualitas — xy-render

Satu standar untuk semua video di repo ini. Platform target: **TikTok** (Reels/Shorts ikut kompatibel).

## Video

| Parameter | Nilai | Keterangan |
|---|---|---|
| Wadah | MP4 (`-movflags +faststart`) | streaming cepat |
| Codec | H.264 High (`libx264`) | kompatibilitas maksimal |
| Resolusi | **720×1280** (9:16) | 720p portrait |
| Frame rate | **60 fps** konstan | gerakan mulus |
| Pixel format | `yuv420p` | wajib, biar nggak nge-blank di player |
| Kualitas | **CRF 19** (`-preset medium`) | kualitas mulus, ukuran waras |
| Profil/level | High, level 4.2 | aman untuk semua device |
| Color | BT.709 (`-colorspace bt709 -color_primaries bt709 -color_trc bt709`) | warna konsisten |
| Target ukuran | ≈ 3-8 MB per 20 detik | kalau > 12 MB, cek aset/CRF |

## Audio

| Parameter | Nilai |
|---|---|
| Codec | AAC-LC |
| Sample rate | 48 kHz |
| Channel | stereo |
| Bitrate | 192 kbps |
| Loudness | **-14 LUFS** (loudnorm `I=-14:TP=-1.5:LRA=11`) | standar TikTok |
| VO vs SFX | VO dominan; SFX gain ≤ 0.5 saat ada VO |
| Shaping VO | `speed` (atempo, jaga pitch) + `energy` (kompressor + treble) di `project.json` — pakai kalau VO TTS terasa lambat/lemah |

## Komposisi & desain

- **Safe area TikTok**: atas 150px, bawah 300px, kanan 130px — teks kunci di luar zona ini.
- Teks minimal **42px** (headline 64-110px), kontras tinggi, jangan tipis-tipis.
- Caption gaya TikTok: chip gelap semi-transparan, teks tebal, pop per frasa.
- Subtle animation (spring/overshoot pelan), **jangan** animasi berkedip cepat
  (bahaya fotosensitif; tidak ada flash > 3x per detik).
- Watermark/kredit creator wajib ada (mis. "bikinan Kall") — subtle, nggak nutup konten.
- Audio: tanpa musik berhak cipta. SFX meme (myinstants) + VO sendiri = aman untuk konten promosi.

## Penamaan

- Folder project: `kebab-case` (`kall-promo-1`).
- Output: `out/<id-project>.mp4`.
- Aset: `assets/<kategori>/<nama>.<ext>` (`assets/sfx/bruh.mp3`, `assets/sticker/stiker-01.webp`).

## Titik cek kualitas (QA)

1. Frame hook (0-2 detik) harus langsung terbaca tanpa audio.
2. Pause di 25%, 50%, 75% durasi — teks tidak terpotong, tidak tabrakan.
3. Cek waveform VO: tidak clipping (peak ≤ -1.5 dBTP setelah loudnorm).
4. Ukuran file wajar (lihat tabel video).
