document.addEventListener("DOMContentLoaded", () => {
    /* =========================
       MOBILE MENU LOGIC
    ========================= */

    const openBtn = document.querySelector(".mobile-menu-toggle");
    const closeBtn = document.querySelector(".mobile-nav-close");
    const overlay = document.querySelector(".mobile-nav-overlay");
    const body = document.body;

    if (openBtn && closeBtn && overlay) {
        openBtn.addEventListener("click", () => {
            overlay.style.display = "block";
            body.classList.add("mobile-menu-open");
        });

        closeBtn.addEventListener("click", () => {
            overlay.style.display = "none";
            body.classList.remove("mobile-menu-open");
        });

        overlay.addEventListener("click", (e) => {
            if (e.target === overlay) {
                overlay.style.display = "none";
                body.classList.remove("mobile-menu-open");
            }
        });
    }
});
