document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));

    // News Ticker Functionality
    const tickerContent = document.querySelector('.ticker-content');
    const newsItems = tickerContent.querySelectorAll('a');
    
    // Calculate the total width of all news items
    let totalWidth = 0;
    newsItems.forEach(item => {
        totalWidth += item.offsetWidth;
    });

    // Set the animation duration based on the total width
    const animationDuration = totalWidth / 50; // Adjust the divisor to change speed
    tickerContent.style.animationDuration = `${animationDuration}s`;

    // Duplicate news items to create a seamless loop
    tickerContent.innerHTML += tickerContent.innerHTML;
});
document.addEventListener('DOMContentLoaded', () => {
    // Existing code...

    // Image Slider Functionality
    const slides = document.querySelectorAll('.slide');
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');

    let currentIndex = 0;

    function showSlide(index) {
        if (index >= slides.length) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = slides.length - 1;
        }
        sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    nextButton.addEventListener('click', () => {
        currentIndex++;
        showSlide(currentIndex);
    });

    prevButton.addEventListener('click', () => {
        currentIndex--;
        showSlide(currentIndex);
    });

    // Optional: Auto-slide functionality
    setInterval(() => {
        currentIndex++;
        showSlide(currentIndex);
    }, 5000); // Change slide every 5 seconds
});
