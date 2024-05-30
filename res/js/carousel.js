

// For the carousel display of pictures
document.addEventListener('DOMContentLoaded', function() {
    const slidesContainer = document.querySelector('.slides');
    const carouselDots = document.querySelector('.carousel-dots-container');

    const favoriteParks = reviews.filter( e=> e.favorite);

    const nameContainer = document.querySelector('.park-name');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    let currentIndex = 0;
    let interval;

    for (const park of favoriteParks) {
        const img = document.createElement('img');
        img.src = park.splashart;
        slidesContainer.appendChild(img);
    }

    const images = slidesContainer.querySelectorAll('img');
    for (const i in Array.from(images)) {
        const dot = document.createElement('div');
        dot.classList.add('carousel-dot');
        dot.addEventListener('click', () => {
            currentIndex = parseInt(i);
            updateCarousel();
        });
        carouselDots.appendChild(dot);
    }

    function updateCarousel() {
        const width = slidesContainer.clientWidth;
        slidesContainer.style.transform = `translateX(-${currentIndex * width}px)`;
        carouselDots.querySelectorAll('.carousel-dot').forEach(e => e.classList.remove('current'));
        carouselDots.querySelector(`.carousel-dot:nth-child(${currentIndex + 1})`).classList.add('current');
        nameContainer.textContent = favoriteParks[currentIndex].name;
        clearInterval(interval);
        interval = setInterval(intervalFunction, 6000);
    }

    prevButton.addEventListener('click', function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        updateCarousel();
    });

    nextButton.addEventListener('click', function() {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    });

    function intervalFunction() {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    }

    interval = setInterval(intervalFunction, 6000);
    window.addEventListener('resize', updateCarousel);
    updateCarousel();
});

