/**
 * Standart API yanıt formatları için yardımcı fonksiyonlar
 */

// Başarılı yanıt oluşturur
exports.success = (data, message = 'İşlem başarılı') => {
    return {
        success: true,
        message,
        data
    };
};

// Hata yanıtı oluşturur
exports.error = (message = 'Bir hata oluştu', code = 500) => {
    return {
        success: false,
        message,
        code
    };
};

// Veri bulunamadı yanıtı
exports.notFound = (message = 'Kayıt bulunamadı') => {
    return {
        success: false,
        message,
        code: 404
    };
};

// Geçersiz istek yanıtı
exports.badRequest = (message = 'Geçersiz istek') => {
    return {
        success: false,
        message,
        code: 400
    };
};
