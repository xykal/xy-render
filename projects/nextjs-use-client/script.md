# Naskah — Next.js: "use client" itu pintu, bukan stiker

Format: 720x1280 (9:16), 60 fps, 25,2 detik. VO perempuan gaul, speed 1.3. Non-promo, nggak jualan apa pun.

Fakta di naskah ini dari dokumentasi resmi Next.js (Server and Client Components, halaman diupdate 25 Agustus 2026, versi 16.3.7): layouts dan pages default-nya Server Component; Client Component dipakai kalau butuh state, event handler, lifecycle, atau API browser; `"use client"` bikin batas modul, dan sekali ditulis di satu file, semua import dan komponen yang dirender di dalamnya ikut masuk ke bundel client.

## VO (yang diucapkan)

| # | Mulai | Selesai | Kalimat |
|---|-------|---------|---------|
| 1 | 0,38 | 2,13 | "Tombol lu nggak bisa diklik di Next.js?" |
| 2 | 2,46 | 3,17 | "Itu bukan bug." |
| 3 | 3,60 | 6,15 | "Semua komponen Next.js default-nya jalan di server." |
| 4 | 6,46 | 7,43 | "Di server nggak ada klik," |
| 5 | 7,63 | 8,24 | "nggak ada state," |
| 6 | 8,49 | 9,49 | "nggak ada local storage." |
| 7 | 9,89 | 10,81 | "Yang butuh interaksi," |
| 8 | 11,00 | 12,80 | "tandain pakai use client, di atas file." |
| 9 | 13,27 | 15,52 | "Tapi use client itu pintu, bukan stiker." |
| 10 | 15,86 | 17,10 | "Sekali lu tulis di file gede," |
| 11 | 17,27 | 18,58 | "semua isinya ikut ke browser." |
| 12 | 18,93 | 19,46 | "Makanya," |
| 13 | 19,63 | 20,93 | "taruh di komponen paling kecil." |
| 14 | 21,37 | 22,63 | "Lu tim taruh use client di mana?" |
| 15 | 22,93 | 23,23 | "Komen." |

Waktu di atas sudah termasuk `at: 0.15` dan `speed: 1.3` (dihitung dari jeda asli file VO, bukan kira-kira).

## Teks di layar (bukan cuma caption)

- 0,0-2,9 hook, tiga baris besar: "TOMBOL LU / NGGAK BISA / DIKLIK?" + tombol contoh "Simpan" + label "onClick ×"
- 3,3-15,6 diagram dua wilayah: label "DI SERVER" di atas, wadah "DI BROWSER" di bawah, dipisah satu garis dengan celah pintu
- 6,2-9,5 tiga kartu API di wilayah server: `onClick`, `useState`, `localStorage`, masing-masing dicoret tepat saat disebut VO
- 9,7-15,6 kartu `like-button.tsx` ditempeli chip `'use client'`; chip yang sama turun jadi pintu di celah garis
- 15,7-18,6 kartu `page.tsx` gede dengan enam komponen kecil di dalamnya (tombol, icon, modal, chart, search, map); semuanya lewat pintu turun ke wilayah browser
- 18,9-21,2 chip `'use client'` balik ke pintu; lima komponen balik ke kartu dan meredup, cuma `tombol` yang tetap di browser dan berubah warna
- 21,3-23,4 CTA: "LU TIM / 'USE CLIENT' / DI MANA?" + pil "komen"
- 23,4-25,2 penutup: aturan satu baris, kredit "bikinan Kall", "XyVerse Technology Global"
- Sudut kiri atas dari detik 1,9: "bikinan Kall" (kredit wajib, halus)

## Caption chip (teks bawah, per frasa VO)

1. 0,38-2,13 — nggak bisa diklik?
2. 2,46-3,17 — itu bukan bug
3. 3,60-6,15 — default-nya di server
4. 6,46-7,43 — nggak ada klik
5. 7,63-8,24 — nggak ada state
6. 8,49-9,49 — nggak ada storage
7. 9,89-10,81 — yang butuh interaksi
8. 11,00-12,80 — tandain: 'use client'
9. 13,27-15,52 — pintu, bukan stiker
10. 15,86-17,10 — sekali di file gede
11. 17,27-18,58 — semua isinya ikut
12. 19,63-20,93 — di komponen terkecil
13. 21,37-22,63 — lu tim yang mana?
14. 22,93-23,23 — komen

Semua caption satu baris dan ada jeda kosong di 18,93-19,46 biar mata istirahat.

## Caption posting + hashtag

Caption:
"Kalau tombol lu nggak reaksi, cek dulu: komponennya jalan di server atau di client. 'use client' itu pintu — sekali ketulis di file gede, semua isinya ikut ke browser."

Hashtag (5): #nextjs #frontend #webdev #programmerindonesia #javascript

## Audio

- VO: `assets/vo.mp3` (speed 1.3, energy true, at 0.15, gain 1.0)
- SFX cuma tiga: bruh 0,42 di 0,35 (hook), vine-boom 0,36 di 13,20 (bagian pintu), metal-pipe 0,26 di 18,95 (bagian "makanya")
- Nggak ada musik. Musik trending ditambahin di aplikasi TikTok pas posting, volumenya dikecilin di bawah VO.

## Yang udah dites lokal (dan yang belum)

Dites: sintaks JS scene (`node --check`); nggak ada `Date.now`, `Math.random`, timer, `requestAnimationFrame`, CSS transition/animation, atau URL http; scene dijalani 1513 langkah `SEEK(i/60)` di DOM tiruan tanpa error; hasil `SEEK(17,5)` identik walau urutan pemanggilannya diacak (nggak ada state bocor); semua elemen punya ukuran tetap dicek masuk kolom aman x 30..590 dan y 150..980; lebar teks dicek pakai font pengganti yang lebih lebar dari Plus Jakarta Sans, yang lewat batas dipangkas.

Belum dites: hasil gambar sebenarnya (nggak ada browser/renderer di sandbox), dan pelafalan "use client" sama "Next.js" oleh suara (gua nggak bisa dengerin hasilnya, cuma bisa ngukur durasi). Kalau pelafalannya aneh, ganti ejaan di naskahnya terus VO-nya diganti.

## Catatan bug buat xy-render

Scene contoh `kall-promo-1` nge-set `textContent` lewat helper `set()` yang isinya cuma `Object.assign(el.style, o)`. Di DOM, `style.textContent` itu properti JS biasa, bukan deklarasi CSS, jadi caption di scene itu nggak pernah tampil. Gua cek frame `out/kall-promo-1.mp4` di detik 1 dan 4: area caption (x 60..660, y 944..1018) kosong tanpa satu piksel terang pun, padahal VO-nya lagi jalan. Di scene ini gua set `el.textContent` langsung ke elemennya, dan hasilnya udah gua verifikasi dari frame mp4. Perbaikan yang sama bisa dipakai di `kall-promo-1/scene.html`.
