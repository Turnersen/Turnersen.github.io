let currentIndex = 0;

function updateCarousel() {
    const cards = document.querySelectorAll('.event-card');
    const totalCards = cards.length;

    const carousel = document.querySelector('.carousel');
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextEvent() {
    const cards = document.querySelectorAll('.event-card');
    const totalCards = cards.length;
    currentIndex = (currentIndex + 1) % totalCards;
    updateCarousel();
}

function prevEvent() {
    const cards = document.querySelectorAll('.event-card');
    const totalCards = cards.length;
    currentIndex = (currentIndex - 1 + totalCards) % totalCards;
    updateCarousel();
}

updateCarousel();
