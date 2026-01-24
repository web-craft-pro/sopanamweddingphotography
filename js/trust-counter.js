document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".stat h3");
    let hasAnimated = false;

    const animateCount = (el, target, duration = 1000) => {
        let start = null;

        const step = (timestamp) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);

            // Ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);

            el.textContent = Math.floor(eased * target);

            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                el.textContent = target;
            }
        };

        requestAnimationFrame(step);
    };

    const startCounters = () => {
        if (hasAnimated) return;
        hasAnimated = true;

        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute("data-count"), 10);
            animateCount(counter, target);
        });
    };

    const observer = new IntersectionObserver(
        entries => {
            if (entries[0].isIntersecting) {
                startCounters();
                observer.disconnect();
            }
        },
        { threshold: 0.2 }
    );

    const trustSection = document.querySelector(".trust-section");
    if (trustSection) {
        observer.observe(trustSection);
    }
});
