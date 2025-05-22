import React, { useState, useEffect } from 'react';

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

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail">
    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
  </svg>
);

const SparklesIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles">
    <path d="M9.9 10.95a2.5 2.5 0 0 0 3.1 3.1L22 22l-8.05-8.05a2.5 2.5 0 0 0-3.1-3.1L2 2l8.05 8.05Z"></path>
    <path d="M14.5 5.5L16 7"></path>
    <path d="M8.5 8.5L7 10"></path>
    <path d="M14.5 18.5L16 17"></path>
    <path d="M8.5 15.5L7 14"></path>
  </svg>
);

const App = () => {
  const [websiteType, setWebsiteType] = useState('');
  const [contentIdeas, setContentIdeas] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Function to generate content ideas using Gemini API
  const generateContentIdeas = async () => {
    setIsLoading(true);
    setErrorMessage('');
    setContentIdeas('');

    try {
      let chatHistory = [];
      const prompt = `Berikan ide konten yang kreatif dan menarik untuk website dengan jenis berikut: "${websiteType}". Sertakan ide untuk halaman utama, tentang kami, layanan/produk, blog, dan kontak. Format respons dalam poin-poin yang mudah dibaca.`;
      chatHistory.push({ role: "user", parts: [{ text: prompt }] });

      const payload = { contents: chatHistory };
      const apiKey = ""; // API key is provided by the Canvas environment
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (result.candidates && result.candidates.length > 0 &&
          result.candidates[0].content && result.candidates[0].content.parts &&
          result.candidates[0].content.parts.length > 0) {
        const text = result.candidates[0].content.parts[0].text;
        setContentIdeas(text);
      } else {
        setErrorMessage("Gagal mendapatkan ide konten. Silakan coba lagi.");
        console.error("Unexpected API response structure:", result);
      }
    } catch (error) {
      setErrorMessage("Terjadi kesalahan saat menghubungi API. Pastikan koneksi internet Anda stabil.");
      console.error("Error calling Gemini API:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    // Main container with a vibrant, animated background gradient
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-4 sm:p-6 lg:p-8 font-inter bg-gradient-to-br from-blue-700 via-blue-900 to-gray-900 animate-gradient-shift">
      {/* Background circles for visual flair (trending aesthetic) */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-gray-700 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      {/* Main content card with glassmorphism effect */}
      <div className="relative z-10 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border border-opacity-20 border-white rounded-3xl shadow-2xl p-6 md:p-10 lg:p-14 max-w-5xl w-full text-center transform transition-all duration-500 hover:scale-[1.01] hover:shadow-3xl">
        {/* Title Section */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 sm:mb-6 leading-tight drop-shadow-lg animate-fade-in-down">
          Wujudkan Impian Digital Anda!
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 sm:mb-10 max-w-3xl mx-auto animate-fade-in">
          Layanan profesional untuk <span className="font-semibold text-blue-300">pembuatan</span>, <span className="font-semibold text-blue-300">modifikasi</span>, <span className="font-semibold text-blue-300">penambahan fitur</span>, dan <span className="font-semibold text-blue-300">debugging</span> website Anda.
        </p>

        {/* Services and Technologies Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mb-10">
          {/* Services Section */}
          <div className="bg-white bg-opacity-15 backdrop-filter backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-lg border border-opacity-20 border-white transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl animate-fade-in-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5 border-b-2 border-white border-opacity-30 pb-3">Layanan Kami</h2>
            <ul className="text-gray-100 space-y-4 text-left mx-auto max-w-sm">
              <li className="flex items-center text-lg py-2 px-3 rounded-lg transition-all duration-200 hover:bg-white hover:bg-opacity-20 hover:text-white group transform hover:translate-x-1">
                <CodeIcon className="text-blue-300 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" /> Pembuatan Website Baru
              </li>
              <li className="flex items-center text-lg py-2 px-3 rounded-lg transition-all duration-200 hover:bg-white hover:bg-opacity-20 hover:text-white group transform hover:translate-x-1">
                <FrameworkIcon className="text-blue-300 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" /> Modifikasi & Peningkatan
              </li>
              <li className="flex items-center text-lg py-2 px-3 rounded-lg transition-all duration-200 hover:bg-white hover:bg-opacity-20 hover:text-white group transform hover:translate-x-1">
                <DatabaseIcon className="text-blue-300 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" /> Penambahan Fitur Kustom
              </li>
              <li className="flex items-center text-lg py-2 px-3 rounded-lg transition-all duration-200 hover:bg-white hover:bg-opacity-20 hover:text-white group transform hover:translate-x-1">
                <CodeIcon className="text-blue-300 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" /> Debugging & Perbaikan Bug
              </li>
            </ul>
          </div>

          {/* Technologies Section */}
          <div className="bg-white bg-opacity-15 backdrop-filter backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-lg border border-opacity-20 border-white transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl animate-fade-in-right">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5 border-b-2 border-white border-opacity-30 pb-3">Teknologi Unggulan</h2>
            <div className="flex flex-col items-center space-y-5">
              <div className="flex items-center bg-white bg-opacity-20 text-white px-6 py-3 rounded-full shadow-md text-xl font-semibold transform transition-transform duration-200 hover:scale-105 hover:bg-opacity-30">
                <img src="https://www.php.net/images/logos/new-php-logo.svg" alt="PHP Logo" className="h-9 w-9 mr-4" onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/36x36/ADD8E6/000000?text=PHP'; }} />
                PHP
              </div>
              <div className="flex items-center bg-white bg-opacity-20 text-white px-6 py-3 rounded-full shadow-md text-xl font-semibold transform transition-transform duration-200 hover:scale-105 hover:bg-opacity-30">
                <img src="https://laravel.com/img/logomark.min.svg" alt="Laravel Logo" className="h-9 w-9 mr-4" onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/36x36/D3D3D3/000000?text=Laravel'; }} />
                Laravel
              </div>
            </div>
            <p className="text-base text-gray-200 mt-5">
              Pengembangan web yang kuat dan efisien dengan PHP dan Laravel.
            </p>
          </div>
        </div>

        {/* Gemini API Feature: Content Idea Generator */}
        <div className="bg-white bg-opacity-15 backdrop-filter backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-xl mb-10 border border-opacity-20 border-white animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5 flex items-center justify-center border-b-2 border-white border-opacity-30 pb-3">
            <SparklesIcon className="mr-3 text-blue-300 w-8 h-8 animate-pulse-slow" /> Dapatkan Ide Konten Website ✨
          </h2>
          <p className="text-lg text-gray-200 mb-6">
            Masukkan jenis website Anda (misalnya: "Toko online kerajinan tangan", "Blog perjalanan pribadi") untuk mendapatkan ide konten yang menarik!
          </p>
          <input
            type="text"
            className="w-full p-3 sm:p-4 border-2 border-blue-300 rounded-xl mb-5 text-lg bg-white bg-opacity-20 text-white placeholder-gray-300 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:border-blue-500 transition duration-300"
            placeholder="Contoh: Blog resep masakan sehat"
            value={websiteType}
            onChange={(e) => setWebsiteType(e.target.value)}
          />
          <button
            onClick={generateContentIdeas}
            disabled={isLoading || !websiteType.trim()}
            className="inline-flex items-center bg-blue-500 text-white px-8 py-4 rounded-full text-lg sm:text-xl font-bold shadow-lg hover:bg-blue-600 transition duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden"
          >
            {isLoading ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Membuat Ide...
              </span>
            ) : (
              <>
                <SparklesIcon className="mr-3 w-6 h-6 group-hover:rotate-12 transition-transform duration-300" /> Hasilkan Ide Konten
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
              </>
            )}
          </button>

          {errorMessage && (
            <p className="text-red-300 mt-5 text-base sm:text-lg font-medium">{errorMessage}</p>
          )}

          {contentIdeas && (
            <div className="mt-8 p-5 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-xl text-left text-gray-100 whitespace-pre-wrap shadow-inner overflow-auto max-h-96">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-blue-300 border-b border-blue-400 pb-2">Ide Konten Anda:</h3>
              <p className="text-base sm:text-lg leading-relaxed">{contentIdeas}</p>
            </div>
          )}
        </div>

        {/* Call to Action & Contact */}
        <div className="bg-blue-500 bg-opacity-15 backdrop-filter backdrop-blur-md text-white p-6 sm:p-8 rounded-2xl shadow-xl mb-8 transform transition-all duration-300 hover:scale-[1.02] hover:bg-opacity-25 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Siap Memulai Proyek Anda?</h2>
          <p className="text-xl sm:text-2xl mb-6">
            Dapatkan konsultasi gratis sekarang juga!
          </p>
          <a
            href="tel:+6285156553226"
            className="inline-flex items-center bg-white text-blue-700 px-8 py-4 rounded-full text-xl sm:text-2xl font-bold shadow-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105 group relative overflow-hidden animate-pulse-cta"
          >
            <PhoneIcon className="mr-3 w-7 h-7 group-hover:animate-bounce" /> Hubungi Kami: 085156553226
            <span className="absolute inset-0 bg-blue-700 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
          </a>
        </div>

        <div className="text-gray-200 text-lg sm:text-xl">
          <p className="flex items-center justify-center">
            <MailIcon className="mr-2 w-6 h-6" /> Konsultasi gratis dengan <span className="font-bold text-blue-300 ml-1">Abdul Lambada</span>
          </p>
        </div>
      </div>

      {/* Custom CSS for animations and glassmorphism */}
      <style>{`
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }

        @keyframes pulse-cta {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }

        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 10s ease infinite;
        }

        .animate-blob {
          animation: blob 7s infinite cubic-bezier(0.68, -0.55, 0.27, 1.55);
        }

        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }

        .animate-pulse-slow {
          animation: pulse-slow 2s infinite ease-in-out;
        }

        .animate-pulse-cta {
          animation: pulse-cta 2s infinite ease-in-out;
        }

        .animate-fade-in-down { animation: fade-in-down 1s ease-out forwards; }
        .animate-fade-in { animation: fade-in 1s ease-out forwards 0.5s; opacity: 0; } /* Delayed fade-in */
        .animate-fade-in-left { animation: fade-in-left 1s ease-out forwards 0.7s; opacity: 0; }
        .animate-fade-in-right { animation: fade-in-right 1s ease-out forwards 0.9s; opacity: 0; }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out forwards 1.1s; opacity: 0; }
      `}</style>
    </div>
  );
};

export default App;
