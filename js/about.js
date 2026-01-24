// =========================
// ABOUT PAGE FADE-IN
// =========================

document.addEventListener("DOMContentLoaded", () => {
    const section = document.querySelector(".about-editorial");

    if (!section) return;

    section.style.opacity = "0";
    section.style.transform = "translateY(20px)";

    requestAnimationFrame(() => {
        section.style.transition = "opacity 0.8s ease, transform 0.8s ease";
        section.style.opacity = "1";
        section.style.transform = "translateY(0)";
    });
});

// =========================
// ABOUT PAGE SLIDESHOW
// =========================

document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".about-slideshow img");
    let current = 0;

    if (!slides.length) return;

    setInterval(() => {
        slides[current].classList.remove("active");
        current = (current + 1) % slides.length;
        slides[current].classList.add("active");
    }, 3500);
});
