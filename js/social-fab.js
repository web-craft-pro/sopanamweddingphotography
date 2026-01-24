document.addEventListener("DOMContentLoaded", () => {
    const fab = document.querySelector(".social-fab");
    const toggle = document.querySelector(".social-fab-toggle");

    if (!fab || !toggle) return;

    toggle.addEventListener("click", () => {
        fab.classList.toggle("open");
    });

    document.addEventListener("click", (e) => {
        if (!fab.contains(e.target)) {
            fab.classList.remove("open");
        }
    });
});
