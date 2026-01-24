// =========================
// CONTACT FORM UX
// =========================

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Thank you! We will get back to you shortly.");
        form.reset();
    });
});
