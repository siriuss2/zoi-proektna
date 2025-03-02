document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;
    const totalSlides = slides.length;

    // Function to change the slide
    function changeSlide(index) {
        const slider = document.querySelector('.slider');
        if (index >= totalSlides) currentIndex = 0;
        if (index < 0) currentIndex = totalSlides - 1;
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    // Next and Previous buttons functionality
    document.querySelector('.next').addEventListener('click', function() {
        currentIndex++;
        changeSlide(currentIndex);
    });

    document.querySelector('.prev').addEventListener('click', function() {
        currentIndex--;
        changeSlide(currentIndex);
    });

    // Auto slide functionality (optional)
    setInterval(function() {
        currentIndex++;
        changeSlide(currentIndex);
    }, 5000); // Change slide every 5 seconds (adjust as needed)
});
