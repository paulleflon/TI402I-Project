

// For the carousel display of pictures
document.addEventListener('DOMContentLoaded', function() {
    const carouselImages = document.querySelector('.slides');
    const name = document.querySelector('parc-name');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    let currentIndex = 0;

    for (const key in data) {
        const img = document.createElement('img');
        img.src = data[key];
        carouselImages.appendChild(img);
        updateCarousel();
    }    



    function updateCarousel() {
        const width = carouselImages.clientWidth;
        carouselImages.style.transform = `translateX(-${currentIndex * width}px)`;
    }

    const images = carouselImages.querySelectorAll('img');

    prevButton.addEventListener('click', function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        updateCarousel();
    });

    nextButton.addEventListener('click', function() {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    });

     // Automatically change images every 3 seconds
    setInterval(() => {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    }, 6000);

    window.addEventListener('resize', updateCarousel);
    updateCarousel();
});

