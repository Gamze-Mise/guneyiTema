const mysql = require('mysql2/promise');
const { dbConfig } = require('../config/config');

// Connection pool oluştur
const pool = mysql.createPool({
    ...dbConfig,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Bağlantı testi
async function testConnection() {
    try {
        // Bağlantı al
        const connection = await pool.getConnection();

        // Basit bir sorgu dene
        const [result] = await connection.query('SELECT 1');

        if (result) {
            console.log('✅ MySQL bağlantısı başarılı');
            console.log('👉 Veritabanı bilgileri:');
            console.log(`   - Host: ${dbConfig.host}`);
            console.log(`   - Database: ${dbConfig.database}`);
            console.log(`   - User: ${dbConfig.user}`);
        }

        // Bağlantıyı serbest bırak
        connection.release();
        return true;
    } catch (err) {
        console.error('❌ MySQL bağlantı hatası:');
        console.error(`   - Hata mesajı: ${err.message}`);
        console.error(`   - Hata kodu: ${err.code}`);
        console.error(`   - Host: ${dbConfig.host}`);
        console.error(`   - Database: ${dbConfig.database}`);
        return false;
    }
}

// Bağlantıyı test et
testConnection();

module.exports = pool;
