# PROIECTUM STUDIO — AUDIT & BRANDING MIGRATION REPORT
> **Dokumen Audit Komprehensif: Status Implementasi Rebranding & Inventaris Konten Legacy**  
> *Tanggal*: 6 Oktober 2026  
> *Target Proyek*: [Proiectum Studio](https://github.com/RanuPutra/Proiectum.studio) (`d:\Портфолио\nootsius-copy-exact-next`)  
> *Framework*: Next.js 15 (App Router & Static Export)  
> *Tujuan Dokumen*: Diserahkan ke **AI Branding Agent** untuk memetakan strategi konten, penulisan copy orisinal, serta penggantian aset visual portofolio.

---

## 1. RINGKASAN EKSEKUTIF (EXECUTIVE SUMMARY)

Website ini telah berhasil dimigrasikan dari hasil export Framer mentah menjadi arsitektur **Next.js Production Ready** yang stabil, ter-host di GitHub, dan siap di-deploy ke Vercel. 

Seluruh aspek teknis dasar, sistem routing (17 halaman), penanganan form kontak mandiri, serta identitas inti brand (Nama, SVG Logo Typography, Email resmi, Akun Instagram, dan Zona Waktu) telah **100% beralih ke Proiectum**.

Namun, aset portofolio visual (*case studies*), galeri *shots*, teks penawaran layanan (*services*), angka statistik studio (*about metrics*), lowongan kerja (*careers*), serta banner media sosial (OpenGraph) dan favicon **masih menggunakan materi bawaan (placeholder/legacy template lama)**. Laporan ini merinci status kedua kategori tersebut secara transparan.

---

## 2. APA SAJA YANG SUDAH 100% JADI "PROIECTUM" (STATUS: SELESAI)

Bagian ini mencakup elemen-elemen yang telah sepenuhnya dirombak, dibersihkan, dan disesuaikan dengan identitas Proiectum:

### A. Identitas Brand & Tipografi
- [x] **Display Name & Brand Identity**: Nama resmi brand diubah menjadi **Proiectum** dan **Proiectum Studio** di seluruh 17 halaman HTML, metadata SEO, `package.json`, dan file runtime JavaScript (`.mjs`).
- [x] **Pembersihan Brand Lama**: Lebih dari **534 referensi teks** brand lama telah dieliminasi 100% tanpa menyisakan jejak di codebase maupun search index.
- [x] **SVG Logo Header & Footer**: Logo vektor telah diperbarui dengan tipografi SVG proporsional bertuliskan `PROIECTUM`, terintegrasi sempurna di dalam header responsif dan footer.
- [x] **Title & SEO Metadata**: Semua tag `<title>`, `<meta name="description">`, OpenGraph titles, dan Twitter card titles telah dialihkan ke Proiectum (misal: `"Proiectum — Brand, Motion & Interface Studio"`).

### B. Saluran Komunikasi & Media Sosial
- [x] **Email Resmi**: Seluruh link `mailto:` dan teks kontak di seluruh halaman telah menggunakan:  
  `proiectumsstudio@gmail.com`
- [x] **Instagram Resmi**: Terhubung langsung ke:  
  `https://www.instagram.com/proiectum.studio/` (`@proiectum.studio`)
- [x] **Eliminasi Media Sosial Non-Aktif**: Link LinkedIn, X (Twitter), dan Dribbble bawaan template telah **disembunyikan secara bersih** via aturan CSS tingkat lanjut di semua breakpoint (Desktop, Tablet, Mobile Drawer, dan Sidebar Contact). Hanya Instagram yang aktif.

### C. Lokasi Studio & Zona Waktu
- [x] **Geolokasi Studio**: Diubah dari lokasi default Eropa menjadi:  
  `Jakarta, ID — GMT+7` (tampil di footer dan halaman `/contact`).

### D. Infrastruktur & Form Kontak
- [x] **Sistem Routing (17 Halaman 200 OK)**: Seluruh rute yang sebelumnya hilang/terpotong telah ditarik dan di-mapping dengan Next.js rewrites:
  - Utama: `/`, `/works`, `/services`, `/shots`, `/about`, `/contact`, `/careers`
  - Legal & Info: `/privacy`, `/terms`, `/thank-you`, `/404`
  - Portofolio Detail: `/works/aeon-capital`, `/works/cassio`, `/works/mar-e`, `/works/northbound`, `/works/studio-halst`, `/works/vector-type`
- [x] **Decoupled Contact Form (`/api/contact`)**: Form inquiry pada halaman `/contact` sudah dilepaskan dari backend Framer (`api.framer.com`) dan dialihkan ke **Next.js Route Handler** lokal (`app/api/contact/route.ts`).
  - Menerima: `Name`, `Email`, `Company`, `What do you need?`, `Budget`, `Tell us about the project`.
  - Logging otomatis pada server Vercel.
  - Redirect otomatis ke `/thank-you` bawaan setelah submit berhasil.
  - Siap dihubungkan ke Web3Forms (`WEB3FORMS_ACCESS_KEY`) atau Resend (`RESEND_API_KEY`) untuk forward langsung ke inbox email.

### E. Pembersihan Watermark & Template Clutter
- [x] **Floating Badge Framer Dihapus**: Lencana melayang *"Made in Framer / Remix"* disembunyikan permanen.
- [x] **Framer Tracking & Watermark Comments Dihapus**: Skrip telemetry tracking (`events.framer.com`) dan metadata komentar pembuat template telah dibersihkan.
- [x] **Section Profil Tim Dihapus**: Section *"The People"* beserta foto/nama profil mock tim telah disembunyikan sesuai permintaan.

---

## 3. AUDIT KONTEN & ASET YANG MASIH "BEKAS DULU" (STATUS: MEMBUTUHKAN ARAHAN BRANDING)

Berikut adalah daftar aset visual, portofolio, dan materi copy yang **saat ini masih memakai data bawaan template lama** dan perlu ditentukan perubahannya oleh AI Branding Agent:

### A. Case Studies Portofolio (`/works/*`)
Saat ini terdapat **6 proyek fiktif bawaan template**. Seluruh teks narasi, gambar mockup, dan detail proyek di dalamnya adalah konten template:

| Slug Proyek | Kategori di Template | Konten Saat Ini (Legacy Template) | Kebutuhan Branding Baru |
| :--- | :--- | :--- | :--- |
| **`/works/aeon-capital`** | Brand & Web Design | Identitas fintech fiktif, kartu debit hitam mock, chart investasi. | Ganti dengan karya nyata Proiectum / Konsep baru |
| **`/works/cassio`** | Interface & Hardware | Mockup perangkat audio hardware, display digital, app sound design. | Ganti dengan karya nyata Proiectum / Konsep baru |
| **`/works/mar-e`** | Brand Identity & Spatial | Identitas perhotelan / hospitality, interior mock, signage cafe. | Ganti dengan karya nyata Proiectum / Konsep baru |
| **`/works/northbound`** | Rebrand & Platform | Platform logistik pengiriman, dashboard UI, branding truk fiktif. | Ganti dengan karya nyata Proiectum / Konsep baru |
| **`/works/studio-halst`** | Minimalist Identity | Studio arsitektur Skandinavia, editorial book, layout minimalis. | Ganti dengan karya nyata Proiectum / Konsep baru |
| **`/works/vector-type`** | Type Foundry & Specimen | Situs jual font custom, spesimen tipografi alfabet, merchandise. | Ganti dengan karya nyata Proiectum / Konsep baru |

> **Catatan Struktur Tiap Proyek**:
> Tiap halaman detail proyek memiliki:
> 1. *Client Name & Project Title*
> 2. *Disciplines / Tags* (misal: "Brand Identity, Web Design, 3D")
> 3. *Year* (misal: "2024")
> 4. *The Brief* (Paragraf tantangan klien)
> 5. *The Solution & Outcome* (Paragraf strategi & hasil)
> 6. *Image Assets* (10–18 mockup visual per studi kasus)

---

### B. Galeri Eksplorasi Visual (`/shots`)
Halaman `/shots` adalah grid galeri visual lepas (mini-showcase). Saat ini menampilkan **13 gambar render 3D & desain grafis placeholder** (`public/assets/framerusercontent.com/images/`):
- Render objek 3D abstrak metalik, poster tipografi Swiss-style, animasi loop visual.
- **Kebutuhan**: Apakah AI Branding ingin mengganti galeri ini dengan karya grafis/3D Proiectum, atau menggantinya dengan portofolio preview karya lokal?

---

### C. Profil Studio & Statistik (`/about`)
Meskipun pengantar dan lokasinya telah Proiectum, terdapat **angka statistik dan narasi filosofi** yang masih berpatokan pada data bawaan:
- **Tahun Berdiri**: `"2021"` *(Perlu disesuaikan dengan tahun berdirinya Proiectum, misal 2024 / 2025 / 2026).*
- **Statistik Counter**:
  - `6` (Angka ukuran tim / partner)
  - `48` (Jumlah proyek selesai)
  - `12` (Penghargaan / industri)
- **Teks Filosofi & Studio Principles**: Teks narasi di section *"How we work"* (misal: *"We take on a handful of projects a year and finish every one of them properly"*). Perlu diselaraskan dengan *Tone of Voice* Proiectum.

---

### D. Paket Layanan & Penawaran (`/services`)
Halaman `/services` memiliki 3 model paket layanan dengan copy dan deliverables bawaan:
1. **Project**: Paket pembuatan brand end-to-end (Scope: 6–8 minggu).
2. **Retainer**: Kerjasama berkelanjutan untuk desain bulanan.
3. **Sprint**: Desain intensif kilat (Scope: 2 minggu).
- **Kebutuhan**: Apakah struktur 3 paket ini (Project / Retainer / Sprint) ingin dipertahankan dengan deskripsi baru, atau diubah menjadi daftar kapabilitas Proiectum (misal: Brand Identity, Motion Design, Web/Interface, 3D Art)?

---

### E. Halaman Karir (`/careers`)
Saat ini memuat **2 lowongan kerja fiktif**:
1. **Senior Brand Designer** (Full-time / Remote)
2. **Framer Developer** (Contract / Remote)
- **Kebutuhan**: Apakah halaman ini ingin disembunyikan/dikosongkan, atau diisi dengan ajakan kolaborasi/freelancer khusus Proiectum Studio?

---

### F. Aset Gambar Ikon & Banner Sosial (Favicon & OpenGraph)
- **Favicon Browser**:
  - `assets/framerusercontent.com/images/uiX0T2hAVBmdowb2eoA9MDDYto.png` (Light & Dark favicon)
  - `assets/framerusercontent.com/images/mZK0sJWoicBdbT0JDDerSnuqzrY.png` (Apple Touch Icon)
  - *Status*: Masih menggunakan ikon huruf/simbol dari template lama. Perlu diganti dengan favicon huruf **"P"** atau monomark Proiectum.
- **OpenGraph & Twitter Share Banner (Preview Card)**:
  - `https://framerusercontent.com/assets/VRaQfNZ7HF6V2Bz9jRG6cC7LM9Y.png`
  - *Status*: Banner gambar yang muncul saat link website di-share di WhatsApp, Twitter, LinkedIn, dll. masih menampilkan grafis template lama. Perlu banner 1200x630px bertuliskan Proiectum Studio.
- **Library Gambar Keseluruhan**:
  - Terdapat total **221 file gambar** (total ukuran **55.24 MB**) di `public/assets/framerusercontent.com/images/` yang mayoritas merupakan mockup portofolio lama.

---

## 4. PERTANYAAN STRATEGIS UNTUK AI BRANDING AGENT

Mohon berikan panduan atau materi tertulis untuk poin-poin berikut agar dapat langsung kami implementasikan ke codebase:

1. **Portofolio / Works**:
   - Apakah 6 studi kasus ingin diganti nama kliennya (re-contextualized) atau dipertahankan sebagian?
   - Jika ingin diganti, mohon berikan: Nama Klien/Proyek, Kategori/Disiplin, dan Paragraf *Brief & Outcome*.
2. **Gallery / Shots**:
   - Apakah halaman `/shots` ingin diisi kurasi karya motion/grafis spesifik Proiectum, atau sementara disembunyikan dari navbar?
3. **Layanan / Services**:
   - Apakah penamaan paket (Project, Retainer, Sprint) tetap dipakai atau ingin diganti daftar servis deskriptif?
4. **About Numbers**:
   - Berapa angka resmi untuk: *Tahun Berdiri* (misal: 2025/2026), *Projects Completed*, dan *Fokus Studio*?
5. **Brand Tone & Tagline**:
   - Apakah ada tagline spesifik yang ingin menggantikan `"Brand, Motion & Interface Studio"`?
6. **Aset Visual Baru**:
   - Kebutuhan file gambar:
     - Favicon (Format PNG / ICO 32x32px & 512x512px).
     - OG Share Banner (Format PNG 1200x630px bertema Proiectum).

---

*Laporan ini siap dikirimkan langsung ke AI Branding Agent Anda.*
