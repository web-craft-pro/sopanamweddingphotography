document.addEventListener("DOMContentLoaded", () => {

    /* Page load fade */
    document.body.classList.add("page-loaded");

    /* Scroll reveal */
    const reveals = document.querySelectorAll(".reveal");

    if (!reveals.length) return;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        {
            threshold: 0.15,
            rootMargin: "0px 0px -40px 0px"
        }
    );

    reveals.forEach(el => observer.observe(el));
});
