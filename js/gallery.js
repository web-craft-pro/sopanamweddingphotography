// =========================
// COUPLE GALLERY – LIGHTBOX
// =========================

document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".masonry-grid img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.querySelector(".lightbox-img");
    const closeBtn = document.querySelector(".lightbox-close");

    // Exit if gallery not present on page
    if (!images.length || !lightbox) return;

    images.forEach(img => {
        img.addEventListener("click", () => {
            lightboxImg.src = img.src;
            lightbox.style.display = "flex";
        });
    });

    closeBtn.addEventListener("click", () => {
        lightbox.style.display = "none";
    });

    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
        }
    });
});
