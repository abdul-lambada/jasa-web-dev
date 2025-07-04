import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Untuk data client
const SHEETDB_API = 'https://sheetdb.io/api/v1/v6ajkgxarji1z';

const initialForm = {
  nama: '',
  foto: '',
};

const AdminClientPanel = () => {
  const [clients, setClients] = useState([]);
  const [form, setForm] = useState(initialForm);
  const [editingIdx, setEditingIdx] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  // Fetch data
  const fetchClients = () => {
    setLoading(true);
    fetch(SHEETDB_API)
      .then((res) => res.json())
      .then((data) => {
        setClients(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  useEffect(() => {
    fetchClients();
  }, []);

  // Handle form change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('foto', file);
      try {
        const res = await axios.post('http://localhost:5000/api/upload-client-photo', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        setForm({ ...form, foto: res.data.filename });
      } catch (err) {
        alert('Upload gagal!');
        console.error('Upload error:', err);
      }
    }
  };

  // Add or update client
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    if (editingIdx === null) {
      // Add
      await fetch(SHEETDB_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: form }),
      });
    } else {
      // Update (by row index, SheetDB needs search param)
      const client = clients[editingIdx];
      await fetch(`${SHEETDB_API}/id/${client.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: form }),
      });
    }
    setForm(initialForm);
    setEditingIdx(null);
    setSubmitting(false);
    fetchClients();
  };

  // Edit client
  const handleEdit = (idx) => {
    setForm(clients[idx]);
    setEditingIdx(idx);
  };

  // Delete client
  const handleDelete = async (idx) => {
    if (!window.confirm('Yakin ingin menghapus data ini?')) return;
    const client = clients[idx];
    await fetch(`${SHEETDB_API}/id/${client.id}`, { method: 'DELETE' });
    fetchClients();
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white bg-opacity-20 p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-white">Panel Admin: CRUD Client</h2>
      {/* Form Tambah/Edit */}
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <input name="nama" value={form.nama} onChange={handleChange} placeholder="Nama" className="p-3 rounded border" required />
        <div>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="p-3 rounded border w-full"
          />
          {form.foto && (
            <div className="text-sm text-gray-600 mt-1">Nama file: {form.foto}</div>
          )}
        </div>
        <button type="submit" disabled={submitting} className="md:col-span-2 bg-blue-600 text-white font-bold py-2 px-6 rounded hover:bg-blue-700 transition">{editingIdx === null ? 'Tambah Client' : 'Update Client'}</button>
        {editingIdx !== null && (
          <button type="button" onClick={() => { setForm(initialForm); setEditingIdx(null); }} className="md:col-span-2 bg-gray-400 text-white font-bold py-2 px-6 rounded hover:bg-gray-500 transition">Batal Edit</button>
        )}
      </form>
      {/* Tabel Data Client */}
      {loading ? (
        <div className="text-center text-white">Memuat data...</div>
      ) : clients.length === 0 ? (
        <div className="text-center text-gray-300">Belum ada data client.</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white bg-opacity-80 rounded-xl">
            <thead>
              <tr>
                <th className="px-4 py-2">Nama</th>
                <th className="px-4 py-2">Foto</th>
                <th className="px-4 py-2">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client, idx) => (
                <tr key={client.id || idx} className="border-b last:border-b-0">
                  <td className="px-4 py-2">{client.nama}</td>
                  <td className="px-4 py-2">
                    {client.foto && client.foto.trim() ? (
                      <img
                        src={/^https?:\/\//.test(client.foto.trim()) ? client.foto.trim() : `http://localhost:5000/foto-client/${client.foto.trim()}`}
                        alt={client.nama}
                        title={/^https?:\/\//.test(client.foto.trim()) ? client.foto.trim() : `http://localhost:5000/foto-client/${client.foto.trim()}`}
                        className="w-12 h-12 rounded-full object-cover border"
                        style={{ border: '2px solid #ccc' }}
                        onError={e => {
                          console.error('Gagal load gambar:', e.target.src);
                          e.target.onerror = null;
                          e.target.src = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(client.nama);
                          e.target.style.border = '2px solid red';
                        }}
                      />
                    ) : (
                      <span className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-xl">👤</span>
                    )}
                  </td>
                  <td className="px-4 py-2 space-x-2">
                    <button onClick={() => handleEdit(idx)} className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500">Edit</button>
                    <button onClick={() => handleDelete(idx)} className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">Hapus</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminClientPanel; 