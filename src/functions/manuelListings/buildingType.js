const AWS = require('aws-sdk');
const mysql = require('mysql2/promise');
const { dbConfig } = require('../../config/config');

exports.handler = async (event) => {
    try {
        // Veritabanı bağlantısı
        const connection = await mysql.createConnection(dbConfig);

        // Path parametrelerini al
        const { lang } = event.pathParameters;

        // SQL sorgusu
        const [rows] = await connection.execute(
            'SELECT * FROM def_manuel_listings_building_type WHERE lang = ?',
            [lang]
        );

        // Bağlantıyı kapat
        await connection.end();

        // Başarılı yanıt
        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                success: true,
                data: rows
            })
        };
    } catch (error) {
        // Hata durumu
        return {
            statusCode: 500,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                success: false,
                message: error.message
            })
        };
    }
};
