# Naskah — Next.js: apa itu, dan kenapa tombol lu nggak bisa diklik

Format: 720x1280 (9:16), 60 fps, 29,6 detik. VO perempuan gaul, speed **1,10** (sebelumnya 1,30 — ini yang bikin kedengeran cepet banget).
Semua fakta dari dokumentasi resmi Next.js (Server and Client Components, halaman diupdate 25 Agustus 2026, versi 16.3.7):
layouts dan pages default-nya Server Component; Client Component dipakai kalau butuh state, event handler, lifecycle, atau API browser; `"use client"` bikin batas modul, dan sekali ditulis di satu file, semua import dan komponen yang dirender di dalamnya ikut masuk ke bundel client; Server Component bisa dikirim jadi HTML dan ngurangin JavaScript yang dikirim ke browser.

## VO (yang diucapkan)

| # | Mulai | Selesai | Kalimat |
|---|-------|---------|---------|
| 1 | 0,40 | 3,09 | "Next.js itu framework React buat bikin web." |
| 2 | 3,52 | 5,35 | "Bedanya, dia jalan di dua tempat:" |
| 3 | 5,75 | 6,97 | "server dan browser." |
| 4 | 7,64 | 9,19 | "Komponen lu default-nya di server:" |
| 5 | 9,56 | 10,25 | "nggak ada klik," |
| 6 | 10,43 | 11,15 | "nggak ada state," |
| 7 | 11,31 | 12,13 | "nggak ada storage." |
| 8 | 12,50 | 14,14 | "Makanya tombol lu nggak bisa diklik," |
| 9 | 14,39 | 15,32 | "dan itu bukan bug." |
| 10 | 16,04 | 17,10 | "Yang butuh interaksi," |
| 11 | 17,29 | 18,62 | "tandain pakai use client," |
| 12 | 18,92 | 19,59 | "di atas file." |
| 13 | 20,14 | 22,58 | "Tapi use client itu pintu, bukan stiker." |
| 14 | 23,03 | 24,48 | "Sekali ditulis di file gede," |
| 15 | 24,79 | 26,00 | "semuanya ikut ke browser." |
| 16 | 26,67 | 27,35 | "Lu tim yang mana?" |
| 17 | 27,78 | 28,06 | "Komen." |

Waktu dihitung dari jeda asli file VO (dibagi speed 1,10, ditambah `at: 0.15`). Aturan penutupnya sengaja nggak diucapin, cuma muncul di kartu akhir — biar VO-nya bisa lebih pelan.

## Yang digambar di layar (semua dari kode, nggak ada gambar AI)

- **0-3,2 hook:** "NEXT.JS ITU APA?" besar, terus kartu jawaban "framework React / buat bikin web".
- **3,4-7 dua wilayah:** label "DI SERVER" (kanan: "jadi HTML") dan "DI BROWSER" (kanan: "yang interaktif"), dipisah satu garis batas yang punya celah pintu.
- **7,5-16 kartu file:** kartu `like-button.tsx` bergaya editor: baris kode, nomor baris, dan judul file. Di layar nilai jualnya: server ngasih HTML jadi, browser yang ngurus interaksi.
- **9,5-12,4 tiga chip:** klik, state, storage muncul di wilayah browser, masing-masing dikasih tanda silang merah pas disebut VO.
- **12,5-15,9** tombol "Simpan" ditekan kursor sampai ada pil merah "nggak respon", terus stempel "BUKAN BUG" mendarat miring.
- **16-20** baris 1 kartu diketik langsung: `'use client'` (efek ngetik, bukan fade).
- **19,95-22,6** chip `'use client'` turun dari kartu ke celah di batas server/browser, jadi pintu; daun pintunya kebuka; komponen `tombol` lewat pintu ke browser, warnanya berubah jadi biru (satu-satunya yang butuh interaksi).
- **22,9-26,1** file berganti nama jadi `page.tsx`: lima komponen lain (icon, modal, chart, search, map) muncul di dalamnya, terus ikut lewat pintu yang sama — karena `'use client'` ada di atas file. Pil alamat di jendela browser berubah jadi "bundel js" dan bar-nya ngisi penuh.
- **26,5-28,1 CTA:** "LU TIM YANG MANA?" + dua pilihan (A. di file gede / B. di komponen kecil) + pil "komen".
- **28,3-29,6 penutup:** "server by default, / client kalau butuh interaksi." + kredit "bikinan Kall" + "XyVerse Technology Global".
- "bikinan Kall" juga nangkring halus di kiri atas dari detik 1,7 sampai sebelum penutup.

## Caption chip (teks bawah, per frasa VO)

Setiap caption maksimal dua baris, dan tiap barisnya udah diukur pakai font pengganti yang lebih lebar dari Plus Jakarta Sans — jadi nggak ada yang kepotong.

1. 0,40 — "nextjs itu / framework React"
2. 3,55 — "jalan di dua tempat: / server & browser"
3. 5,75 — "komponen lu / default di server"
4. 7,64 — "nggak ada klik"
5. 9,56 — "nggak ada state"
6. 10,43 — "nggak ada storage"
7. 12,50 — "makanya tombol lu / nggak bisa diklik"
8. 14,39 — "dan itu bukan bug"
9. 16,04 — "yang butuh interaksi"
10. 17,35 — "tandain: 'use client' / di baris paling atas"
11. 20,14 — "use client itu pintu, / bukan stiker"
12. 23,03 — "sekali ditulis / di file gede"
13. 24,79 — "semuanya ikut / ke browser"
14. 26,60 — "lu tim yang mana?"
15. 27,72 — "komen"

## Caption posting + hashtag

Caption:
"Tombol lu nggak bisa diklik? Cek dulu: komponennya jalan di server atau di client. Server Component: nggak ada klik, nggak ada state, nggak ada storage — jadi tombolnya diam."
(Lanjut: "'use client' itu pintu, bukan stiker. Taruh di komponen terkecil, jangan di file gede." — dua paragraf pendek, bukan satu blok panjang.)

Hashtag (5): #nextjs #frontend #webdev #programmerindonesia #javascript

## Musik & audio

- VO: `assets/vo.mp3`, speed 1,10, energy true, at 0,15, gain 1,0
- SFX lima biji, semuanya di bawah 0,5: bruh 0,34 (hook), error 0,40 (tombol nggak respon), metal-pipe 0,28 (stempel), vine-boom 0,34 (pintu kebuka), rizz 0,32 (semuanya lewat pintu)
- Nggak ada musik di render. Musik trending ditambahin di aplikasi TikTok pas posting, volumenya dikecilin di bawah VO.

## Yang udah dites lokal

`node --check` bersih; nggak ada `Date.now`, `Math.random`, timer, `requestAnimationFrame`, CSS transition/animation, atau URL http; scene dijalani 1777 langkah `SEEK(i/60)` di DOM tiruan tanpa error; hasil `SEEK` identik walau urutan pemanggilannya diacak (nggak ada state bocor); semua elemen dicek masuk kolom aman x 30..590 dan y 150..980; tabrakan antar teks dicek tiap frame (yang tersisa cuma yang disengaja: stempel di atas tombol, komponen berpapasan di pintu); lebar tiap caption diukur pakai font yang lebih lebar dari font aslinya.

Yang belum dites: pelafalan "use client" sama "Next.js" oleh suara. Gua nggak bisa muter audionya dari sini, cuma bisa ngukur durasi dan jeda.

## Catatan QA dari hasil render

Tiap iterasi gua cek frame hasil mp4-nya (bukan cuma nebak dari kode), dan tiap kali ketemu masalah langsung dibenerin:

1. Terdeteksi: kursor masih nangkring di atas stempel "BUKAN BUG" — kursor sekarang keluar di detik 14,32, tepat sebelum stempelnya mendarat.
2. Terdeteksi: chip "klik" nempel di bawah stempel — chip-nya sekarang turun di detik 12,40, sebelum tombolnya muncul.
3. Terdeteksi: teks `'use client'` ketiban nomor baris 1 di kartu file — teksnya digeser ke kanan gutter, highlight-nya ikut.
4. Terdeteksi: komponen "kid" nabrak baris kode di dalam kartu — baris kode dan nomor barisnya keluar di detik 22,86 pas kartunya ganti nama jadi `page.tsx`.
5. Terdeteksi: caption satu baris kepotong di 7 dari 15 frasa — semua caption sekarang maksimal dua baris dan udah diukur satu-satu.

Catatan buat `xy-render`: log render nulis `Error submitting packet to decoder: Invalid data found when processing input` di salah satu track mp3, di tiap run (termasuk run yang hijau). Belum ketahuan track mana dan belum ada bukti ada yang ke-drop — gua nggak bisa probe audionya dari sini karena ffmpeg cuma ada di runner. Layak dicek sekali pakai `ffprobe` di runner.
