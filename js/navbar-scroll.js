document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar");
    if (!navbar) return;

    const isHome = document.body.classList.contains("home-page");

    if (!isHome) {
        navbar.classList.add("navbar-scrolled");
        return;
    }

    // FORCE transparent on first paint
    navbar.classList.remove("navbar-scrolled");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            navbar.classList.add("navbar-scrolled");
        } else {
            navbar.classList.remove("navbar-scrolled");
        }
    });
});
