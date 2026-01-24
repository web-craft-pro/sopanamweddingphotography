// =========================
// HERO SLIDESHOW
// =========================

document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slideshow img");

    if (slides.length === 0) return;

    let currentSlide = 0;

    setInterval(() => {
        slides[currentSlide].classList.remove("active");
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add("active");
    }, 4000); // change image every 4 seconds
});
