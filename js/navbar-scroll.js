document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".home-page .navbar");

    if (!navbar) return;

    const toggleNavbar = () => {
        if (window.scrollY > 60) {
            navbar.classList.add("navbar-scrolled");
        } else {
            navbar.classList.remove("navbar-scrolled");
        }
    };

    toggleNavbar();
    window.addEventListener("scroll", toggleNavbar);
});
