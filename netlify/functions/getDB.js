const fs = require('fs');
const path = require('path');

// Fungsi untuk menangani request dan mengambil data dari db.json
exports.handler = async function(event, context) {
  try {
    // Tentukan lokasi file db.json
    const filePath = path.join(__dirname, './db.json');
    
    // Membaca file db.json secara sinkron dan mengubahnya menjadi objek JavaScript
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

    // Mengembalikan data dalam format JSON dengan status 200
    return {
      statusCode: 200,
      body: JSON.stringify(data), // Mengembalikan data db.json
    };
  } catch (error) {
    // Jika ada error, kembalikan status 500 dan pesan error
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error loading data', error: error.message }),
    };
  }
};
