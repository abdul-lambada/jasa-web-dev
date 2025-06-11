import React, { useState, useEffect } from 'react';

// SheetDB endpoint
const SHEETDB_API = 'https://sheetdb.io/api/v1/gzm99tvwobclq';


// Inline SVG icons to simulate lucide-react for direct HTML embedding
// These icons are designed to be clear and representative of their function.
const CodeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code">
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);

const DatabaseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-database">
    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
    <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
    <path d="M3 12A9 3 0 0 0 21 12"></path>
  </svg>
);

const FrameworkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layout-grid">
    <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
    <line x1="3" x2="21" y1="9" y2="9"></line>
    <line x1="3" x2="21" y1="15" y2="15"></line>
    <line x1="9" x2="9" y1="3" y2="21"></line>
    <line x1="15" x2="15" y1="3" y2="21"></line>
  </svg>
);

// Phone icon removed to fix ESLint warning
const App = () => {
  // State untuk Testimoni
  const [testimonialName, setTestimonialName] = useState('');
  const [testimonialMessage, setTestimonialMessage] = useState('');
  const [avatarPreview, setAvatarPreview] = useState('');
  const [avatarUploading, setAvatarUploading] = useState(false);
  const [testimonialsList, setTestimonialsList] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Fetch testimoni dari SheetDB saat komponen dimuat
  useEffect(() => {
    fetch(SHEETDB_API)
      .then((response) => response.json())
      .then((data) => {
        // Data sudah array of object: {nama, pesan, tanggal}
        setTestimonialsList(data);
      })
      .catch(() => setTestimonialsList([]));
  }, [isSubmitted]); // refresh list setelah submit


  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-4 sm:p-6 lg:p-8 font-inter bg-gradient-to-br from-blue-700 via-blue-900 to-gray-900 animate-gradient-shift">
      {/* Background circles for visual flair (trending aesthetic) */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-gray-700 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      {/* Main content card with glassmorphism effect */}
      <div className="relative z-10 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border border-opacity-20 border-white rounded-3xl shadow-2xl p-6 md:p-10 lg:p-14 max-w-5xl w-full text-center transform transition-all duration-500 hover:scale-[1.01] hover:shadow-3xl">
        {/* Title Section with Hero Image */}
        <div className="relative mb-12">
          {/* Background hero pattern */}
          <div className="absolute inset-0 z-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#grid)" />
            </svg>
          </div>

          <img
            src="/logo.png"
            alt="Jowi Web Logo"
            className="mx-auto mb-6 w-24 h-24 sm:w-32 sm:h-32 object-contain rounded-full shadow-lg border-4 border-white bg-white bg-opacity-80"
          />
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 sm:mb-6 leading-tight drop-shadow-lg animate-fade-in-down relative z-10">
            Wujudkan <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Impian Digital</span> Anda!
          </h1>

          <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-16 h-16 flex items-center justify-center">
            <div className="animate-bounce bg-white bg-opacity-20 p-2 w-10 h-10 ring-1 ring-blue-300 shadow-lg rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </div>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 sm:mb-10 max-w-3xl mx-auto animate-fade-in relative z-10">
            Layanan profesional untuk <span className="font-semibold text-blue-300 underline decoration-2 decoration-blue-500 underline-offset-4">pembuatan</span>, <span className="font-semibold text-blue-300 underline decoration-2 decoration-blue-500 underline-offset-4">modifikasi</span>, <span className="font-semibold text-blue-300 underline decoration-2 decoration-blue-500 underline-offset-4">penambahan fitur</span>, dan <span className="font-semibold text-blue-300 underline decoration-2 decoration-blue-500 underline-offset-4">debugging</span> website Anda.
          </p>
        </div>

        {/* Services and Technologies Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mb-10">
          {/* Services Section with Better Visual Layout */}
          <div className="bg-white bg-opacity-15 backdrop-filter backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-lg border border-opacity-20 border-white transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl animate-fade-in-left relative overflow-hidden">
            {/* Decorative corner elements */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-blue-400 rounded-tl-xl"></div>
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-blue-400 rounded-br-xl"></div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5 border-b-2 border-white border-opacity-30 pb-3 flex items-center">
              <span className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 shadow-lg">1</span>
              Layanan Kami
            </h2>

            <ul className="text-gray-100 space-y-4 text-left mx-auto max-w-sm">
              <li className="flex items-center text-lg py-3 px-4 rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-500 hover:text-white group transform hover:translate-x-1 border-l-4 border-transparent hover:border-white">
                <div className="p-2 bg-blue-500 bg-opacity-30 rounded-lg mr-3">
                  <CodeIcon className="text-blue-300 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                </div>
                <div>
                  <span className="font-semibold">Pembuatan Website Baru</span>
                  <p className="text-sm text-gray-300 group-hover:text-white">Desain modern dengan performa tinggi</p>
                </div>
              </li>
              <li className="flex items-center text-lg py-3 px-4 rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-500 hover:text-white group transform hover:translate-x-1 border-l-4 border-transparent hover:border-white">
                <div className="p-2 bg-blue-500 bg-opacity-30 rounded-lg mr-3">
                  <FrameworkIcon className="text-blue-300 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                </div>
                <div>
                  <span className="font-semibold">Modifikasi & Peningkatan</span>
                  <p className="text-sm text-gray-300 group-hover:text-white">Pembaruan fitur dan tampilan</p>
                </div>
              </li>
              <li className="flex items-center text-lg py-3 px-4 rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-500 hover:text-white group transform hover:translate-x-1 border-l-4 border-transparent hover:border-white">
                <div className="p-2 bg-blue-500 bg-opacity-30 rounded-lg mr-3">
                  <DatabaseIcon className="text-blue-300 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                </div>
                <div>
                  <span className="font-semibold">Penambahan Fitur Kustom</span>
                  <p className="text-sm text-gray-300 group-hover:text-white">Solusi sesuai kebutuhan spesifik</p>
                </div>
              </li>
              <li className="flex items-center text-lg py-3 px-4 rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-500 hover:text-white group transform hover:translate-x-1 border-l-4 border-transparent hover:border-white">
                <div className="p-2 bg-blue-500 bg-opacity-30 rounded-lg mr-3">
                  <CodeIcon className="text-blue-300 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                </div>
                <div>
                  <span className="font-semibold">Debugging & Perbaikan Bug</span>
                  <p className="text-sm text-gray-300 group-hover:text-white">Solusi masalah dengan cepat</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Technologies Section with Better Badges */}
          <div className="bg-white bg-opacity-15 backdrop-filter backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-lg border border-opacity-20 border-white transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl animate-fade-in-right relative overflow-hidden">
            {/* Decorative corner elements */}
            <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-blue-400 rounded-tr-xl"></div>
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-blue-400 rounded-bl-xl"></div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5 border-b-2 border-white border-opacity-30 pb-3 flex items-center">
              <span className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 shadow-lg">2</span>
              Teknologi Unggulan
            </h2>

            <div className="overflow-x-auto">
              <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-3 mb-6 min-w-max">
                <span className="flex items-center px-3 py-2 rounded bg-blue-700 text-white font-bold text-xs sm:text-sm whitespace-nowrap"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" className="h-5 w-5 mr-2" />CSS3</span>
                <span className="flex items-center px-3 py-2 rounded bg-gray-900 text-yellow-400 font-bold text-sm"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JS" className="h-5 w-5 mr-2" />JAVASCRIPT</span>
                <span className="flex items-center px-3 py-2 rounded bg-indigo-700 text-white font-bold text-sm"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP" className="h-5 w-5 mr-2" />PHP</span>
                <span className="flex items-center px-3 py-2 rounded bg-blue-800 text-white font-bold text-sm"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="h-5 w-5 mr-2" />PYTHON</span>
                <span className="flex items-center px-3 py-2 rounded bg-orange-600 text-white font-bold text-sm"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" className="h-5 w-5 mr-2" />HTML5</span>
                <span className="flex items-center px-3 py-2 rounded bg-black text-white font-bold text-sm"><svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24"><polygon points="12,3 22,21 2,21" fill="white" /></svg>VERCEL</span>
                <span className="flex items-center px-3 py-2 rounded bg-violet-700 text-white font-bold text-sm"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" className="h-5 w-5 mr-2" />BOOTSTRAP</span>
                <span className="flex items-center px-3 py-2 rounded bg-red-600 text-white font-bold text-sm"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg" alt="CodeIgniter" className="h-5 w-5 mr-2" />CODEIGNITER</span>
                <span className="flex items-center px-3 py-2 rounded bg-yellow-500 text-white font-bold text-sm">FILAMENT</span>
                <span className="flex items-center px-3 py-2 rounded bg-red-700 text-white font-bold text-sm"><img src="https://img.shields.io/badge/laravel-%23FF2D20.svg?style=for-the-badge&logo=laravel&logoColor=white" alt="Laravel" className="h-5 w-5 mr-2" />LARAVEL</span>
                <span className="flex items-center px-3 py-2 rounded bg-indigo-900 text-white font-bold text-sm">LIVEWIRE</span>
                <span className="flex items-center px-3 py-2 rounded bg-green-700 text-white font-bold text-sm"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" alt="NPM" className="h-5 w-5 mr-2" />NPM</span>
                <span className="flex items-center px-3 py-2 rounded bg-green-900 text-white font-bold text-sm"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="h-5 w-5 mr-2" />NODE.JS</span>
                <span className="flex items-center px-3 py-2 rounded bg-red-800 text-white font-bold text-sm"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg" alt="Apache" className="h-5 w-5 mr-2" />APACHE</span>
                <span className="flex items-center px-3 py-2 rounded bg-blue-900 text-white font-bold text-sm"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mariadb/mariadb-original.svg" alt="MariaDB" className="h-5 w-5 mr-2" />MARIADB</span>
                <span className="flex items-center px-3 py-2 rounded bg-blue-800 text-white font-bold text-sm"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" className="h-5 w-5 mr-2" />MYSQL</span>
                <span className="flex items-center px-3 py-2 rounded bg-green-600 text-white font-bold text-sm"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="h-5 w-5 mr-2" />MONGODB</span>
                <span className="flex items-center px-3 py-2 rounded bg-blue-800 text-white font-bold text-sm"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="Postgres" className="h-5 w-5 mr-2" />POSTGRES</span>
              </div>
            </div>

            <p className="text-base text-gray-200 mt-3 border-t border-white border-opacity-20 pt-3">
              <span className="font-semibold">Keunggulan:</span> Pengembangan web yang kuat, efisien, dan skalabel
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-8 mb-10">
          {/* Paket Perawatan */}
          <div className="bg-white bg-opacity-20 border-2 border-blue-500 rounded-2xl shadow-lg px-8 py-10 flex flex-col items-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 animate-slide-up">
            <h3 className="text-2xl font-bold text-yellow-300 mb-2 text-center">Modifikasi / Penambahan Fitur / Debugging</h3>
            <p className="text-2xl font-extrabold text-white mb-2 text-center">Mulai Rp 500.000 – Rp 1.500.000</p>
            <ul className="text-white text-left mb-6 space-y-2">
              <li>✔ Modifikasi tampilan atau struktur website yang sudah ada</li>
              <li>✔ Penambahan fitur baru (sesuai dengan website yang di minta)</li>
              <li>✔ Debugging & perbaikan error</li>
              <li>✔ Optimalisasi performa & tampilan</li>
              <li>✔ Konsultasi & revisi sesuai kebutuhan</li>
            </ul>
            <p className="text-xs text-white mb-4 text-center">Harga akhir tergantung kerumitan kode, bahasa pemrograman, dan struktur website.</p>
            <a href="https://wa.me/6285156553226?text=Halo%20saya%20ingin%20konsultasi%20modifikasi%20atau%20debugging%20website" target="_blank" rel="noopener noreferrer" className="mt-auto inline-block bg-yellow-400 text-blue-900 font-bold py-2 px-6 rounded-full shadow hover:bg-yellow-300 transition">Konsultasi Sekarang</a>
          </div>
          {/* Paket Pembuatan */}
          <div className="bg-white bg-opacity-20 border-2 border-blue-500 rounded-2xl shadow-lg px-8 py-10 flex flex-col items-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 animate-slide-up delay-100">
            <h3 className="text-2xl font-bold text-green-300 mb-2 text-center">Pembuatan Website dari Nol</h3>
            <p className="text-2xl font-extrabold text-white mb-2 text-center">Mulai Rp 2.000.000</p>
            <ul className="text-white text-left mb-6 space-y-2">
              <li>✔ Pembuatan website dari awal hingga jadi</li>
              <li>✔ Desain modern & responsif</li>
              <li>✔ Fitur lengkap (sesuai dengan website yang di minta)</li>
              <li>✔ Integrasi media sosial & fitur dinamis (jika diperlukan)</li>
              <li>✔ Konsultasi, revisi, dan support selama proses pembuatan</li>
            </ul>
            <p className="text-xs text-white mb-4 text-center">Harga akhir tergantung kerumitan fitur, bahasa pemrograman, dan struktur website.</p>
            <a href="https://wa.me/6285156553226?text=Halo%20saya%20ingin%20pembuatan%20website%20dari%20nol%20sampai%20jadi" target="_blank" rel="noopener noreferrer" className="mt-auto inline-block bg-green-400 text-blue-900 font-bold py-2 px-6 rounded-full shadow hover:bg-green-300 transition">Konsultasi Website Baru</a>
          </div>
        </div>

        {/* Card: Konsultasi & Revisi Minor */}
        <div className="max-w-2xl mx-auto mt-6 mb-10">
          <div className="bg-white bg-opacity-20 backdrop-blur-lg border border-white border-opacity-30 rounded-2xl shadow-lg px-6 py-5 text-center animate-fade-in">
            <p className="text-white text-lg font-semibold">
              Semua paket sudah termasuk <span className="text-green-300 font-bold">konsultasi gratis</span> & revisi minor!
            </p>
          </div>
        </div>

        {/* Gemini API Feature with Improved UI */}
        <div className="bg-white bg-opacity-15 backdrop-filter backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-xl mb-10 border border-opacity-20 border-white animate-fade-in-up relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute -right-12 -top-12 w-24 h-24 bg-green-500 opacity-20 rounded-full blur-xl"></div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5 flex items-center justify-center">
            <div className="relative mr-3">
              {/* Placeholder for ChatBubbleOvalLeftEllipsisIcon */}
              <div className="w-8 h-8 bg-green-300 rounded-full animate-pulse-slow"></div>
              <div className="absolute inset-0 animate-ping bg-green-500 rounded-full opacity-30"></div>
            </div>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-teal-400">
              Bagikan Testimoni Anda ✍️
            </span>
          </h2>

          {/* Testimonial Form (SheetDB) */}
          <div className="bg-black bg-opacity-20 rounded-xl p-5 mb-6">
            <p className="text-lg text-gray-200 mb-4">
              Kami sangat menghargai masukan Anda. Silakan bagikan pengalaman Anda dengan layanan kami:
            </p>
            {isSubmitted && (
              <div className="mb-4 p-3 rounded bg-green-700 text-white font-semibold">Terima kasih, testimoni Anda telah terkirim!</div>
            )}
            <form
              action="https://sheetdb.io/api/v1/gzm99tvwobclq"
              method="POST"
              className="space-y-4"
              target="dummyframe"
              onSubmit={() => {
                setTimeout(() => {
                  setIsSubmitted(true);
                  setTestimonialName("");
                  setTestimonialMessage("");
                  setAvatarPreview("");
                }, 100);
              }}
            >
              <input type="hidden" name="data[tanggal]" value={new Date().toISOString()} />
              <input type="hidden" name="data[foto_url]" value={avatarPreview} />
              <div>
                <label htmlFor="testimonialNameInput" className="block text-sm font-medium text-gray-300 mb-1">Nama Anda</label>
                <input
                  type="text"
                  id="testimonialNameInput"
                  name="data[nama]"
                  className="w-full p-3 border-2 border-green-400 rounded-xl bg-white bg-opacity-20 text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-green-300 focus:border-green-500 transition duration-300"
                  placeholder="cth: Budi Sanjaya"
                  value={testimonialName}
                  onChange={(e) => setTestimonialName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="testimonialMessageInput" className="block text-sm font-medium text-gray-300 mb-1">Pesan Testimoni</label>
                <textarea
                  id="testimonialMessageInput"
                  name="data[pesan]"
                  rows="4"
                  className="w-full p-3 border-2 border-green-400 rounded-xl bg-white bg-opacity-20 text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-green-300 focus:border-green-500 transition duration-300"
                  placeholder="Tuliskan kesan dan pesan Anda di sini..."
                  value={testimonialMessage}
                  onChange={(e) => setTestimonialMessage(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="testimonialAvatarInput" className="block text-sm font-medium text-gray-300 mb-1">Upload Foto/Avatar <span className="text-xs text-gray-400">(opsional)</span></label>
                <input
                  type="file"
                  id="testimonialAvatarInput"
                  accept="image/*"
                  className="w-full p-3 border-2 border-green-400 rounded-xl bg-white bg-opacity-20 text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-green-300 focus:border-green-500 transition duration-300"
                  onChange={async (e) => {
                    const file = e.target.files[0];
                    if (file) {
                      setAvatarUploading(true);
                      setAvatarPreview(URL.createObjectURL(file));
                      const formData = new FormData();
                      formData.append('UPLOADCARE_PUB_KEY', 'b3adbf4382ccef6b4376');
                      formData.append('UPLOADCARE_STORE', '1');
                      formData.append('file', file);
                      try {
                        const response = await fetch('https://upload.uploadcare.com/base/', {
                          method: 'POST',
                          body: formData
                        });
                        const data = await response.json();
                        if (data && data.file) {
                          // setTestimonialAvatar is removed, no-op (`https://ucarecdn.com/${data.file}/`);
                        }
                      } catch (err) {
                        // error handling
                        // setTestimonialAvatar is removed, no-op ('');
                      }
                      setAvatarUploading(false);
                    }
                  }}
                  disabled={avatarUploading}
                />
                {avatarUploading && <div className="text-green-300 text-sm mt-2">Mengupload avatar...</div>}
                {avatarPreview && (
                  <div className="mt-2 flex items-center">
                    <img src={avatarPreview} alt="Preview Avatar" className="w-14 h-14 rounded-full border-2 border-green-400 object-cover" />
                    <span className="ml-3 text-green-200 text-xs">Preview</span>
                  </div>
                )}
              </div>
              <button
                type="submit"
                disabled={!(testimonialName.trim() && testimonialMessage.trim())}
                className="mt-6 w-full inline-flex items-center justify-center bg-gradient-to-r from-green-500 to-teal-600 text-white px-8 py-3 rounded-xl text-lg font-bold shadow-lg hover:from-green-600 hover:to-teal-700 transition duration-300 transform hover:scale-[1.01] disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden"
              >
                <span className="mr-2">✏️</span> Kirim Testimoni
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
              </button>
            </form>
            <iframe name="dummyframe" title="Testimoni Dummy Frame" style={{display:'none'}} />
          </div>

          {/* Display Testimonials */}
          <div className="mt-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center">
              <span className="mr-3 text-2xl">👥</span> Testimoni dari Pelanggan:
            </h3>
            {(!testimonialsList || testimonialsList.length === 0) ? (
              <p className="text-gray-400 italic text-center py-4">Belum ada testimoni. Jadilah yang pertama untuk berbagi pengalaman!</p>
            ) : (
              <div className="space-y-6 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar-green">
                {testimonialsList.slice().reverse().map((testimonial, index) => (
                  <div
                    key={index}
                    className="bg-white bg-opacity-10 border border-white border-opacity-20 rounded-xl p-5 shadow-lg animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="flex items-start mb-3">
                      {testimonial.foto_url ? (
                        <img src={testimonial.foto_url} alt={testimonial.nama} className="w-10 h-10 rounded-full mr-4 object-cover border-2 border-green-300 bg-white flex-shrink-0" onError={e => {e.target.onerror=null; e.target.src='https://ui-avatars.com/api/?name='+encodeURIComponent(testimonial.nama)}} />
                      ) : (
                        <span className="w-10 h-10 bg-green-300 rounded-full mr-4 flex-shrink-0 text-2xl flex items-center justify-center">👤</span>
                      )}
                      <div>
                        <p className="font-semibold text-lg text-white">{testimonial.nama}</p>
                        <p className="text-xs text-gray-400">{testimonial.tanggal ? new Date(testimonial.tanggal).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' }) : ''}</p>
                      </div>
                    </div>
                    <p className="text-gray-200 whitespace-pre-wrap leading-relaxed text-sm sm:text-base">"{testimonial.pesan}"</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Call to Action & Contact with improved design */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 sm:p-8 rounded-2xl shadow-xl mb-8 transform transition-all duration-300 hover:scale-[1.02] animate-fade-in-up relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute -right-20 -top-20 w-40 h-40 bg-white opacity-10 rounded-full"></div>
          <div className="absolute -left-20 -bottom-20 w-40 h-40 bg-white opacity-10 rounded-full"></div>

          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-8">
                <span className="inline-block bg-white text-blue-700 text-sm font-bold px-3 py-1 rounded-full mb-3 animate-pulse-slow">PROMO TERBATAS</span>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Siap Memulai Proyek Anda?</h2>
                <p className="text-xl sm:text-2xl mb-6 text-blue-100">
                  Dapatkan <span className="underline decoration-2 decoration-yellow-400">konsultasi gratis</span> sekarang juga!
                </p>
              </div>

              <div className="flex flex-col items-center">
                <a
                  href="https://wa.me/6285156553226"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-green-600 text-white px-8 py-4 rounded-xl text-xl sm:text-2xl font-bold shadow-lg hover:bg-green-700 transition duration-300 transform hover:scale-105 group relative overflow-hidden"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 mr-3 group-hover:animate-bounce">
                    <path d="M12.001 2C17.524 2 22 6.475 22 11.999C22 17.524 17.524 22 12.001 22C10.057 22 8.257 21.462 6.712 20.534L2.513 21.862C2.324 21.924 2.124 21.782 2.088 21.587C2.079 21.535 2.079 21.482 2.087 21.43L2.529 17.293C2.537 17.235 2.553 17.179 2.578 17.126C1.592 15.61 1 13.854 1 11.999C1 6.475 5.477 2 12.001 2ZM8.603 8.06C8.469 8.066 8.338 8.107 8.221 8.179C8.126 8.236 8.045 8.312 7.979 8.401C7.879 8.502 7.818 8.596 7.756 8.689C7.424 9.15 7.253 9.7 7.26 10.264C7.263 10.698 7.363 11.12 7.528 11.514C7.866 12.314 8.463 13.1 9.271 13.825C9.451 13.991 9.629 14.159 9.822 14.312C10.818 15.113 11.995 15.637 13.233 15.83L13.777 15.887C13.968 15.893 14.16 15.879 14.349 15.853C14.627 15.814 14.894 15.715 15.126 15.563C15.255 15.477 15.371 15.372 15.469 15.252C15.497 15.218 15.523 15.182 15.546 15.144C15.598 15.062 15.635 14.98 15.657 14.894C15.693 14.751 15.729 14.475 15.661 14.254C15.597 14.054 15.434 13.941 15.288 13.876L14.806 13.656C14.663 13.595 14.257 13.42 14.092 13.377C14.028 13.362 13.962 13.356 13.895 13.361C13.777 13.372 13.666 13.425 13.584 13.513C13.541 13.564 13.493 13.628 13.445 13.691L13.385 13.77C13.323 13.853 13.257 13.914 13.167 13.958C13.135 13.973 13.102 13.985 13.068 13.992C13.01 14.005 12.95 14.004 12.892 13.99C12.779 13.958 12.669 13.916 12.565 13.864C12.422 13.789 12.286 13.701 12.157 13.601C11.817 13.358 11.509 13.066 11.245 12.734C11.206 12.688 11.169 12.641 11.132 12.594C10.929 12.343 10.76 12.069 10.629 11.777C10.609 11.728 10.592 11.675 10.585 11.622C10.576 11.536 10.625 11.459 10.694 11.42C10.727 11.401 10.759 11.381 10.791 11.36L10.89 11.301C10.936 11.274 10.981 11.243 11.026 11.211C11.085 11.168 11.128 11.135 11.165 11.092C11.228 11.022 11.291 10.941 11.332 10.853C11.392 10.711 11.362 10.551 11.278 10.438C11.254 10.4 11.217 10.334 11.175 10.262L11.079 10.091C10.995 9.943 10.909 9.795 10.824 9.647C10.751 9.526 10.678 9.406 10.602 9.287C10.524 9.168 10.42 9.072 10.293 9.022C10.221 8.992 10.141 8.974 10.06 8.973C10.034 8.972 10.008 8.972 9.982 8.973L9.767 8.976C9.686 8.977 9.605 8.983 9.526 8.994L9.432 9.012C9.395 9.019 9.358 9.027 9.323 9.039C9.205 9.078 9.095 9.138 8.999 9.216C8.888 9.309 8.793 9.42 8.719 9.545C8.659 9.642 8.61 9.746 8.574 9.855C8.552 9.924 8.532 9.994 8.515 10.064C8.465 10.271 8.44 10.485 8.439 10.7C8.439 10.908 8.465 11.115 8.515 11.316C8.62 11.76 8.836 12.161 9.083 12.523L9.203 12.695C9.47 13.064 9.788 13.391 10.148 13.664C10.196 13.7 10.244 13.736 10.294 13.771C10.53 13.951 10.781 14.112 11.044 14.25C11.365 14.422 11.703 14.555 12.053 14.647C12.155 14.674 12.258 14.698 12.362 14.718C12.54 14.752 12.722 14.771 12.903 14.769C13.161 14.767 13.42 14.721 13.663 14.634C13.7 14.619 13.736 14.603 13.771 14.585C14.06 14.447 14.271 14.142 14.334 13.829C14.376 13.612 14.406 13.394 14.423 13.175C14.429 13.121 14.432 13.081 14.434 13.063L14.446 12.955C14.457 12.856 14.409 12.765 14.323 12.724C14.271 12.7 14.221 12.687 14.17 12.685C14.129 12.684 14.089 12.69 14.05 12.703L13.885 12.757L13.774 12.791C13.537 12.856 13.293 12.895 13.047 12.905L12.953 12.909C12.09 12.914 11.243 12.67 10.511 12.206C10.351 12.111 10.199 12.006 10.055 11.891C9.598 11.498 9.222 11.015 8.958 10.468C8.813 10.151 8.735 9.806 8.728 9.458C8.723 9.137 8.811 8.823 8.984 8.557C9.044 8.467 9.122 8.39 9.213 8.329C9.28 8.287 9.356 8.261 9.435 8.254C9.474 8.251 9.514 8.251 9.553 8.254L9.782 8.268C9.868 8.272 9.953 8.242 10.015 8.185C10.078 8.128 10.112 8.046 10.11 7.961C10.109 7.879 10.073 7.81 10.03 7.754C9.949 7.648 9.858 7.547 9.758 7.456C9.658 7.363 9.541 7.283 9.409 7.238C9.319 7.208 9.224 7.198 9.129 7.203C9.084 7.205 9.041 7.209 8.997 7.214L8.897 7.228C8.802 7.24 8.707 7.248 8.614 7.263C8.606 7.564 8.602 7.865 8.603 8.06Z" />
                  </svg>
                  <span>
                    Hubungi Kami
                    <span className="block text-sm font-normal text-green-200">Chat WhatsApp</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Animasi CSS sederhana */}
        <style>{`
  @keyframes fade-in {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fade-in {
    animation: fade-in 1s ease;
  }
  @keyframes slide-up {
    from { opacity: 0; transform: translateY(40px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-slide-up {
    animation: slide-up 1.1s cubic-bezier(.4,2,.6,1) both;
  }
  .delay-100 { animation-delay: 0.15s; }
  .delay-200 { animation-delay: 0.3s; }
`}</style>
      </div>
    </div>
  );
};
export default App;