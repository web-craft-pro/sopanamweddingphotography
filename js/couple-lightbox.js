document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".gallery-item");
    const lightbox = document.getElementById("lightbox");
    const content = document.querySelector(".lightbox-content");
    const closeBtn = document.querySelector(".lightbox-close");

    items.forEach(item => {
        item.addEventListener("click", () => {
            const type = item.dataset.type;
            const src = item.dataset.src;

            content.innerHTML = "";

            if (type === "image") {
                const img = document.createElement("img");
                img.src = src;
                content.appendChild(img);
            }

            if (type === "video") {
                const iframe = document.createElement("iframe");
                iframe.src = src;
                iframe.setAttribute("frameborder", "0");
                iframe.setAttribute("allowfullscreen", "");
                content.appendChild(iframe);
            }

            lightbox.style.display = "flex";
        });
    });

    closeBtn.addEventListener("click", () => {
        lightbox.style.display = "none";
        content.innerHTML = "";
    });
});



/* Currently this file is not needed. */