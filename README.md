# Jasa Web - Website Layanan Pembuatan Website

Aplikasi React untuk layanan jasa pembuatan, modifikasi, dan penambahan fitur website.

## Fitur

- Landing page modern dengan desain responsive
- Animasi menarik menggunakan CSS
- Generator ide konten website menggunakan Gemini AI API
- Tampilan dengan gaya glassmorphism

## Memulai Proyek

### Prasyarat

- Node.js versi 14.0.0 atau lebih tinggi
- NPM versi 6.0.0 atau lebih tinggi

### Instalasi

1. Pastikan Anda berada di direktori proyek
```
cd path/to/jasa-web
```

2. Install dependensi
```
npm install
```

3. Edit file `src/App.js` dan ganti placeholder API key Gemini dengan API key Anda sendiri
```javascript
// Line 70: Ganti "YOUR_GEMINI_API_KEY" dengan API key Anda
const apiKey = "YOUR_GEMINI_API_KEY"; 
```

4. Jalankan aplikasi
```
npm start
```

5. Buka browser dan akses `http://localhost:3000`

## Pengembangan

Aplikasi ini menggunakan:
- React untuk UI components
- Tailwind CSS untuk styling
- Gemini API untuk generator ide konten

## Catatan

- Untuk menggunakan fitur generator ide konten, Anda harus mendapatkan API key dari [Google AI Studio](https://ai.google.dev/)
- Tanpa API key yang valid, fitur generator ide konten tidak akan berfungsi
