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

    /* =========================
       HOME NAVBAR SCROLL EFFECT
    ========================= */

    const navbar = document.querySelector(".home-page .navbar");

    if (navbar) {
        const toggleNavbar = () => {
            if (window.scrollY > 60) {
                navbar.classList.add("navbar-scrolled");
            } else {
                navbar.classList.remove("navbar-scrolled");
            }
        };

        toggleNavbar(); // run once on load
        window.addEventListener("scroll", toggleNavbar);
    }
});
