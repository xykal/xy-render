# Naskah — Next.js: apa itu, dan kenapa tombol lu nggak bisa diklik

Format: 720x1280 (9:16), 60 fps, **96,6 detik**.
VO perempuan gaul (voice-00), natural **101,84 s** → `speed 1,08` = **94,3 s** jalan.
Semua fakta dari dokumentasi resmi Next.js (Server and Client Components, halaman diupdate 25 Agustus 2026, versi 16.3.7).
Aturan: nggak ada klaim metrik/angka karangan, dan nggak ada menyebut AI.

## Naskah (27 kalimat)

1. Next.js itu apa sih? Oke, gua jelasin dari nol, santai aja.
2. Next.js itu framework buat bikin website, dibangun di atas React. React sendiri fungsinya nyusun tampilan, potongan-potongan kecil yang namanya komponen. Jadi, React itu mesinnya, Next.js itu mobil lengkapnya.
3. Kenapa orang milih Next.js? Karena lu nggak perlu ngatur semuanya sendiri. Routing, bundling, optimasi gambar, udah disiapin.
4. Terus, bedanya sama website biasa apa? Next.js jalan di dua tempat sekaligus: di server, dan di browser.
5. Kebanyakan komponen lu dirender di server. Jadi yang dikirim ke browser itu HTML jadi, bukan halaman kosong. Efeknya loading lebih cepat, dan kunci API lu aman, karena nggak pernah sampe ke browser.
6. Tapi ada harganya. Di server nggak ada klik, nggak ada state, nggak ada local storage, nggak ada window.
7. Makanya, tombol yang lu bikin pakai onClick tanpa tanda khusus bakal diam. Bukan rusak, tapi emang nggak ada yang jaga di sana.
8. Jalan keluarnya satu: tulis use client di baris paling atas file. Artinya, oke, komponen ini dikirim ke browser, kasih dia semua yang interaktif.
9. Tapi hati-hati. Use client itu pintu, bukan stiker. Sekali lu tulis di file yang gede, semua yang diimpor di dalamnya ikut jadi bundel client. Halaman lu yang tadinya enteng, jadi berat lagi.
10. Jadi gimana yang bener? Pisahin. Biarin halaman tetap di server, taruh use client cuma di komponen kecil yang emang butuh interaksi. Tombol, modal, kolom pencarian.
11. Satu keputusan kecil, bedanya gede. Lu tim yang mana? Komen di bawah.

(11 blok kalimat = 56 frasa pendek; timing per frasa ada di `caps.js` waktu produksi, dipakai buat caption pop.)

## Peta beat (14 beat)

| t | isi |
|---|---|
| 0 – 5 | hook: judul + subjudul, kebaca tanpa suara |
| 5 – 14 | apa itu: blok-blok komponen ditumpuk jadi halaman |
| 14 – 18,4 | React = mesin, Next.js = mobil lengkap |
| 18,4 – 28,9 | toolkit: routing, bundling, optimasi gambar (dicentang satu-satu) |
| 28,9 – 38,4 | dua tempat: dokumen HTML jalan dari server ke browser |
| 38,4 – 48,1 | untung: HTML jadi (loading) + kunci API tetap di server |
| 48,1 – 56,6 | harga: klik / state / local storage / window dicoret satu-satu |
| 56,6 – 63,3 | tombol diam: kursor klik, chip "nggak respon", stempel BUKAN BUG |
| 63,3 – 73,6 | pintu: `'use client'` jadi pintu, komponen kecil dikirim ke client |
| 73,6 – 79,3 | semua ikut: 6 file anak lewat pintu, bundel client 8% → 100% |
| 79,7 – 91,1 | yang bener: pisahin, bundel turun ke ±10%, 3 contoh (tombol, modal, pencarian) |
| 91,2 – 94,4 | CTA: tim yang mana, komen |
| 94,4 – 96,6 | penutup: baris aturan main + credit "bikinan Kall" + XyVerse Technology Global |

## Sound design (52 entri SFX)

Semua SFX bikinan sendiri (sintesis numpy/soundfile, `make_sfx.py`), jadi bebas royalti:
`bed.wav` (pulsa kick+tick 104 bpm, 97 s, gain 0,16 — jadi lantai, bukan lagu),
whoosh / whoosh-up (transisi), pop (17x, tiap elemen muncul), chime (6x, langkah selesai),
boing (4x, bantingan stiker), click/tick/typing (interaksi), thud/sub/riser (pintu + impact),
stamp (stempel BUKAN BUG), error.mp3 (opsional), vine-boom.mp3 (opsional).
Nggak pakai musik berhak cipta — kalau mau ada musik, tinggal tambah audio dari TikTok.

## Stiker

10 stiker meme dari `projects/kall-promo-1/assets/sticker/` (repo sendiri, bukan tempelan luar):
`stiker-01,02,03,04,06,07,09,10,11,12.webp`. Tiap stiker punya jendela waktu sendiri,
posisinya diaudit biar nggak nutupin caption/label.

## Catatan QA (lokal, sebelum push)

- `node --check` bersih; nol API terlarang (nggak ada CSS animation/transition, Date.now, Math.random, timer, rAF).
- Harness 5.797 langkah SEEK: nol error, determinisme identik (snapshot acak dibandingkan).
- Nol elemen keluar safe area (top 150 / bottom 300 / right 130).
- Tabrakan tersisa: cuma peralihan antar-beat (crossfade) + antrean anak lewat pintu; nggak ada teks ketutup stiker.
- Pelafalan TTS nggak bisa gua denger sendiri — tolong dicek pas nonto.
