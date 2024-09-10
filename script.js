document.addEventListener('DOMContentLoaded', function() {
    // Элемент кнопки прокрутки наверх
    var scrollToTopBtn = document.getElementById('scrollToTopBtn');

    // Функция debounce для оптимизации scroll-событий
    function debounce(func, wait) {
        var timeout;
        return function(...args) {
            var context = this;
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(context, args), wait);
        };
    }

    // Функция для отображения/скрытия кнопки "Прокрутить вверх"
    function toggleScrollToTopBtn() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('visible'); // Добавляем класс для показа кнопки
        } else {
            scrollToTopBtn.classList.remove('visible'); // Удаляем класс для скрытия
        }
    }

    // Оптимизированное событие прокрутки с debounce
    window.addEventListener('scroll', debounce(toggleScrollToTopBtn, 100));

    // Плавная прокрутка наверх
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
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

    // Выполняем масштабирование при загрузке страницы и при изменении размера окна
    scaleForMobile();
    window.addEventListener('resize', scaleForMobile);
});
