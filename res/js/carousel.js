document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.slide');
    let index = 0;

    function showSlide(newIndex) {
        slides.forEach((slide, idx) => {
            if (idx === newIndex) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });
    }

    function previousSlide() {
        index = (index - 1 + slides.length) % slides.length;
        showSlide(index);
    }

    function nextSlide() {
        index = (index + 1) % slides.length;
        showSlide(index);
    }

    document.querySelector('.previous').addEventListener('click', previousSlide);
    document.querySelector('.next').addEventListener('click', nextSlide);

    // Initially show the first slide
    showSlide(index);
});
