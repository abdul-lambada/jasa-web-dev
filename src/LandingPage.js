
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
                console.log('SheetDB fetched data:', data); // Debug log
                setTestimonialsList(data);
            })
            .catch(() => setTestimonialsList([]));
    }, [isSubmitted]); // refresh list setelah submit

    const ClientCarousel = () => {
        const [clients, setClients] = useState([]);
        useEffect(() => {
            fetch('https://sheetdb.io/api/v1/v6ajkgxarji1z')
                .then(res => res.json())
                .then(data => setClients(data));
        }, []);
        if (!clients.length) return <div className="text-white text-center">Memuat data client...</div>;
        return (
            <div className="carousel">
                <div className="carousel-track">
                    {clients.map((client, idx) => (
                        <div className="carousel-item" key={idx}>
                            {client.foto && client.foto.trim() ? (
                                <img
                                    src={`/foto-client/${client.foto.trim()}`}
                                    alt={client.nama}
                                    className="client-img"
                                    onError={e => {
                                        e.target.onerror = null;
                                        e.target.src = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(client.nama);
                                    }}
                                />
                            ) : (
                                <span className="client-img bg-gray-300 flex items-center justify-center text-3xl">👤</span>
                            )}
                            <div className="client-name" title={client.nama}>{client.nama}</div>
                        </div>
                    ))}
                </div>
                <style>{`
                    .carousel {
                        width: 100%;
                        overflow-x: auto;
                        padding-bottom: 8px;
                    }
                    .carousel-track {
                        display: flex;
                        gap: 1.5rem;
                        min-width: max-content;
                        justify-content: center;
                        align-items: stretch;
                    }
                    .carousel-item {
                        background: rgba(255,255,255,0.12);
                        border-radius: 1rem;
                        padding: 1rem;
                        min-width: 130px;
                        max-width: 150px;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        transition: transform 0.2s;
                    }
                    .carousel-item:hover {
                        transform: translateY(-2px) scale(1.03);
                        background: rgba(255,255,255,0.18);
                    }
                    .client-img {
                        width: 80px;
                        height: 80px;
                        border-radius: 50%;
                        object-fit: cover;
                        margin-bottom: 0.5rem;
                        border: 1px solid #fff3;
                        background: #f3f3f3;
                        display: block;
                    }
                    .client-name {
                        color: #fff;
                        font-weight: 600;
                        text-align: center;
                        font-size: 1rem;
                        width: 100%;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                    @media (max-width: 600px) {
                        .carousel-track { gap: 0.75rem; }
                        .carousel-item { min-width: 110px; max-width: 120px; padding: 0.7rem; }
                        .client-img { width: 60px; height: 60px; }
                        .client-name { font-size: 0.95rem; }
                    }
                `}</style>
            </div>
        );
    };

    return (
        <div className="min-h-screen relative flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 font-inter bg-gradient-to-br from-blue-700 via-blue-900 to-gray-900">
            {/* Main content card with glassmorphism effect */}
            <div className="relative z-10 bg-white bg-opacity-10 border border-opacity-20 border-white rounded-3xl p-6 md:p-10 lg:p-14 max-w-5xl w-full text-center">
                {/* Title Section with Hero Image */}
                <div className="relative mb-12">
                    <img
                        src="/logo.png"
                        alt="Jowi Web Logo"
                        className="mx-auto mb-6 w-24 h-24 sm:w-32 sm:h-32 object-contain rounded-full shadow-lg border-4 border-white bg-white bg-opacity-80"
                    />
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 sm:mb-6 leading-tight drop-shadow-lg">
                        Wujudkan <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Impian Digital</span> Anda!
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 sm:mb-10 max-w-3xl mx-auto">
                        Layanan profesional untuk <span className="font-semibold text-blue-300 underline decoration-2 decoration-blue-500 underline-offset-4">pembuatan</span>, <span className="font-semibold text-blue-300 underline decoration-2 decoration-blue-500 underline-offset-4">modifikasi</span>, <span className="font-semibold text-blue-300 underline decoration-2 decoration-blue-500 underline-offset-4">penambahan fitur</span>, dan <span className="font-semibold text-blue-300 underline decoration-2 decoration-blue-500 underline-offset-4">debugging</span> website Anda.
                    </p>
                </div>

                {/* Services and Technologies Sections */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mb-10">
                    {/* Services Section with Better Visual Layout */}
                    <div className="bg-white bg-opacity-15 p-6 sm:p-8 rounded-2xl border border-opacity-20 border-white transition-transform duration-300 hover:scale-[1.02] animate-fade-in-left relative overflow-hidden">
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
                    <div className="bg-white bg-opacity-15 p-6 sm:p-8 rounded-2xl border border-opacity-20 border-white transition-transform duration-300 hover:scale-[1.02] animate-fade-in-right relative overflow-hidden">
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
                    <div className="bg-white bg-opacity-20 border-2 border-blue-500 rounded-2xl px-8 py-10 flex flex-col items-center hover:-translate-y-2 transition-all duration-300 animate-slide-up">
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
                    <div className="bg-white bg-opacity-20 border-2 border-blue-500 rounded-2xl px-8 py-10 flex flex-col items-center hover:-translate-y-2 transition-all duration-300 animate-slide-up delay-100">
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
                    <div className="bg-white bg-opacity-20 border border-white border-opacity-30 rounded-2xl px-6 py-5 text-center animate-fade-in">
                        <p className="text-white text-lg font-semibold">
                            Semua paket sudah termasuk <span className="text-green-300 font-bold">konsultasi gratis</span> & revisi minor!
                        </p>
                    </div>
                </div>

                {/* Gemini API Feature with Improved UI */}
                <div className="bg-white bg-opacity-15 p-6 sm:p-8 rounded-2xl mb-10 border border-opacity-20 border-white animate-fade-in-up relative overflow-hidden">
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
                            onSubmit={(e) => {
                                // Debugging: log data yang akan dikirim
                                console.log('SUBMIT DATA:', {
                                    nama: testimonialName,
                                    pesan: testimonialMessage,
                                    tanggal: new Date().toISOString(),
                                    foto_url: avatarPreview
                                });
                                setTimeout(() => {
                                    setIsSubmitted(true);
                                    setTestimonialName("");
                                    setTestimonialMessage("");
                                    setAvatarPreview("");
                                }, 300);
                            }}
                        >
                            <input type="hidden" name="data[tanggal]" value={new Date().toISOString()} />
                            <input type="hidden" name="data[foto_url]" value={avatarPreview || ''} />
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
                        <iframe name="dummyframe" title="Testimoni Dummy Frame" style={{ display: 'none' }} />
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
                                                <img src={testimonial.foto_url} alt={testimonial.nama} className="w-10 h-10 rounded-full mr-4 object-cover border-2 border-green-300 bg-white flex-shrink-0" onError={e => { e.target.onerror = null; e.target.src = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(testimonial.nama) }} />
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

                    <div className="mt-12 w-full flex justify-center">
                        <div className="w-full max-w-screen-md mx-auto">
                            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-2">Klien Kami</h2>
                            <p className="text-white text-opacity-80 text-center mb-6 text-base md:text-lg">Beberapa instansi, Mahasiswa dan perusahaan yang telah mempercayakan layanan kami.</p>
                            <ClientCarousel />
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
            {/* Carousel Client di bawah landing page */}

        </div>
    );
};
export default App;
