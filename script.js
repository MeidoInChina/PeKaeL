// Navigation scroll effect
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.background = '#000000';
    } else {
        nav.style.background = 'linear-gradient(#000000 50%, #00000000)';
    }
});

// Image slider
const slideImages = document.querySelector('.slide');
let currentPosition = 0;

function nextSlide() {
    currentPosition -= 100;
    if (currentPosition < -200) currentPosition = 0;
    slideImages.style.transform = `translateX(${currentPosition}%)`;
}

setInterval(nextSlide, 5000);
