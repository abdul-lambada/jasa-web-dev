import React, { useEffect, useState } from 'react';

const SHEETDB_API = 'https://sheetdb.io/api/v1/v6ajkgxarji1z'; // Ganti dengan endpoint SheetDB client jika berbeda

const ClientList = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(SHEETDB_API)
      .then((res) => res.json())
      .then((data) => {
        setClients(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white bg-opacity-20 p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-white">Daftar Client Kami</h2>
      {loading ? (
        <div className="text-center text-white">Memuat data...</div>
      ) : clients.length === 0 ? (
        <div className="text-center text-gray-300">Belum ada data client.</div>
      ) : (
        <div className="w-full overflow-x-auto">
          <div className="flex space-x-6 py-4 px-2 min-w-max">
            {clients.map((client, idx) => (
              <div key={idx} className="flex flex-col items-center bg-white bg-opacity-30 rounded-xl shadow p-4 min-w-[140px] max-w-[160px] mx-2">
                {client.foto && client.foto.trim() ? (
                  <img
                    src={`/foto-client/${client.foto.trim()}`}
                    alt={client.nama}
                    className="w-16 h-16 rounded-full object-cover border mb-2"
                    onError={e => {
                      e.target.onerror = null;
                      e.target.src = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(client.nama);
                    }}
                  />
                ) : (
                  <span className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center text-2xl mb-2">👤</span>
                )}
                <div className="text-gray-900 font-semibold text-center mt-1 text-sm truncate w-full" title={client.nama}>{client.nama}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ClientList; 