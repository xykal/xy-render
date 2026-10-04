# Naskah — XyDesk Remote: remote PC Windows dari HP (tutorial lengkap)

Format: 720×1280 (9:16), 60 fps, **169,4 detik** (~2m49s).
VO perempuan gaul-ekspresif (voice battle "00"), 10 chunk TTS, trim silence + `atempo 1,12`
(di-pre-process — `vo.mp3` final 165,8 s, `speed` di project.json tetap 1.0), `energy: true`.
Sumber visual: rekaman layar asli `XRecorder_20261004_02.mp4` (720×1600, 162,7 s) →
`assets/screen.webm` (VP9 540×1200@30, keyframe 0,5 s — Chromium CI nggak punya H.264).
Semua fakta dari README repo [XyDesk-Remote](https://github.com/xykal/XyDesk-Remote) +
situs rdp.xydesk.my.id yang kelihatan di rekaman.

## Naskah (10 chunk)

1. **Hook (0,55–10,6)** — Hah? HP lu bisa jadi PC Windows? Serius, gratis? Ihh... oke fix, sini gua ajarin. Dari download sampe konek. Jangan kedip.
2. **Intro (11,5–24,7)** — Jadi, ini namanya XyDesk Remote. Aplikasi Android buat remote PC atau server Windows lewat RDP. Koneksinya langsung ke PC lu sendiri. Tanpa cloud, tanpa bikin akun. Bebas drama login.
3. **Download (25,4–49,5)** — Pertama, buka browser. Ketik rdp.xydesk.my.id. Scroll dikit... nah, ini dia bagian download. Ada tiga pilihan APK. Eits, jangan panik. HP jaman sekarang tinggal ambil yang arm64. Masih bingung juga? Ckckck... makanya baca, udah ditulisin gede-gede.
4. **Install & buka (50,1–65,7)** — Habis keunduh, install kayak biasa. Tuh, ikonnya udah nongol, lucu kan. Buka aplikasinya... dan tadaa! Langsung masuk daftar perangkat. Masih kosong? Ya iyalah... orang belum diisi. Hihihi.
5. **Koneksi baru (66,3–80,7)** — Sekarang bagian serunya. Tekan tombol tambah, pilih koneksi RDP baru. Ada mode setelan cepat... jadi yang nongol yang penting-penting doang. Kasih nama perangkat lu, terus masukin IP PC lu. Plus port, kalau emang beda.
6. **Kredensial (81,2–98,6)** — Buat kredensial, isi akun Windows lu. Atau pilih tanpa akun, nanti ditanyain pas connect. Password-nya kesimpen terenkripsi di HP, jadi aman. Asal... password lu bukan 1234 ya. Hehe... iya, itu lu. Kerasa kan.
7. **Setelan pro (99,3–114,4)** — Nah, buat yang suka ngoprek... buset dah, setelannya niat banget. Resolusi sampe 4K, H.264, transport UDP, wake-on-LAN... sampe SSH jump host juga ada! Ini aplikasi apa kokpit pesawat, bang?
8. **Connect (115,2–134,7)** — Udah? Gas, connect! Nyiapin sesi... cek jaringan... autentikasi... deg-degan gak sih? Dan... MASUK!! (t=125,7, vine boom + confetti + stempel) Windows beneran, di HP!! Hahahaha gila sih, mouse jalan, klik-klik lancar. Gua aja yang ngedit ikut kaget.
9. **Tips aman (135,5–153,4)** — Tips penting biar gak jadi korban. 1) aktifin Remote Desktop di Windows Pro/Server. 2) HP & PC satu jaringan atau VPN. 3) JANGAN buka port RDP ke internet bebas. Jangan ngeyel. Gua liatin loh. (sesuai seksi keamanan README)
10. **CTA (154,1–166,4)** — Udah, gitu doang. Gampang kan? Link download di deskripsi & komen. Kalau ngebantu... ya tau lah harus ngapain. Hihihi, dah bye!

Caption pop frasa-per-frasa (100 entri), **tanpa background** — putih + stroke hitam,
kata kunci kuning, timing proporsional bobot karakter per chunk (`build_timeline.py` di
riwayat produksi; data final tertanam di `data.js`).

## Peta segmen video sumber (dikalibrasi frame-demi-frame dari screen.webm)

| src (webm) | isi |
|---|---|
| 6,5–14,2 | ketik rdp.xydesk.my.id di browser |
| 16,3–31 | landing page + seksi download APK (arm64/armeabi/x86_64) |
| 37–44 | unduhan selesai, ikon nongol, splash app |
| 44,3–49 | daftar perangkat |
| 49,8–75,8 | menu ➕ → form Koneksi RDP Baru → setelan cepat → nama → IP |
| 76,3–87,5 | kredensial + audio/tampilan |
| 88–112 | profil streaming, resolusi s.d. 4K, toggle pro, NLA, WOL, SSH jump host |
| 114,3–115,5 | checklist connect (Menyiapkan sesi → … → Menyiapkan desktop) |
| 148,4–151,2 | wallpaper dunes (bg tips, digelapkan) |
| 151,4–155,6 | jendela dokumen remote ("mouse jalan") |
| 159,4–162,4 | desktop Windows biru — cold open + payoff MASUK |

Hook 0–11,4 = payoff dulu (desktop Windows di HP) + 3 preview cut cepat (download → form → checklist).

## Sound design (64 entri, timing di project.json)

- Myinstants: vine-boom (cold open, "itu lu", MASUK), huh ("Hah?", "masih bingung"),
  rimshot (joke gratis / ya iyalah), bruh (ckckck, buset dah), anime-wow (tadaa),
  metal-pipe (kokpit pesawat), error (password 1234, port RDP), rizz (CTA),
  yippee (payoff MASUK).
- Sintesis lokal (reuse nextjs-use-client): bed 104bpm ×2 (gain 0,15), whoosh/whoosh-up
  (tiap ganti seksi), pop (chip muncul), tick (toggle & checklist), chime, boing, riser
  (sebelum connect), sub, thud, stamp (stempel MASUK ✅ / PAKE VPN ❗), typing/click.

## Kredit aset

- SFX meme: [myinstants.com](https://www.myinstants.com/) · SFX sintetis: repo ini (bebas royalti)
- Stiker WA tanpa border: stikerpng.blogspot.com (monyet) + pack Meme receh indo (luissela)
- Font: Plus Jakarta Sans (OFL) · Rekaman layar & produk: XyDesk Remote — xykal, XyVerse Technology Global
- Konten "bikinan Kall"

## Render

Actions → **Render video (720p60)** → project: `xydesk-remote`.
10.164 frame @60fps — perkiraan 20–35 menit (timeout job 45 menit masih cukup).
`scene.html` butuh seek `<video>` per frame: `SEEK(t)` async nunggu `seeked` +
`requestVideoFrameCallback` (deterministik; fallback timeout cuma pagar darurat).
