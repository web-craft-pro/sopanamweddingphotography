document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".stat h3");
    let hasAnimated = false;

    const animateCount = (el, target, duration = 1400) => {
        let start = null;

        const step = (timestamp) => {
            if (!start) start = timestamp;

            const progress = Math.min((timestamp - start) / duration, 1);

            // Ease-out cubic (premium smoothness)
            const eased = 1 - Math.pow(1 - progress, 3);

            const current = Math.floor(eased * target);
            el.textContent = current.toLocaleString();

            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                // FINAL value — exact from HTML
                el.textContent = target.toLocaleString() + "+";
            }
        };

        requestAnimationFrame(step);
    };

    const startCounters = () => {
        if (hasAnimated) return;
        hasAnimated = true;

        counters.forEach(counter => {
            const target = parseInt(counter.dataset.count, 10); // ✅ FIXED
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
        { threshold: 0.3 }
    );

    const trustSection = document.querySelector(".trust-section");
    if (trustSection) {
        observer.observe(trustSection);
    }
});
