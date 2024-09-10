// script.js
document.addEventListener('DOMContentLoaded', function() {
    var scrollToTopBtn = document.getElementById('scrollToTopBtn');

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) { // Show button after scrolling 300px
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scroll to the top
        });
    });
});

// Функция для настройки масштабирования в зависимости от устройства
function scaleForMobile() {
    var viewportMeta = document.querySelector('meta[name="viewport"]');
    if (!viewportMeta) {
        // Если мета-тег viewport отсутствует, создаем его
        viewportMeta = document.createElement('meta');
        viewportMeta.name = "viewport";
        document.head.appendChild(viewportMeta);
    }

    // Определяем ширину экрана
    var screenWidth = window.innerWidth;
    
    if (screenWidth < 768) {
        // Для мобильных устройств
        viewportMeta.content = "width=device-width, initial-scale=1, maximum-scale=1";
    } else {
        // Для планшетов и десктопов
        viewportMeta.content = "width=device-width, initial-scale=1";
    }
}

// Выполняем функцию при загрузке страницы
window.onload = scaleForMobile;

// Обновляем масштаб при изменении размера окна
window.onresize = scaleForMobile;


