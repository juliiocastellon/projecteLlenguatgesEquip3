function iniciarTooltip() {

    const elementos = document.querySelectorAll("[data-tooltip]");

    elementos.forEach(elemento => {

        elemento.addEventListener("mouseenter", () => {

            const tooltip = document.createElement("div");

            tooltip.id = "tooltip";
            tooltip.textContent = elemento.dataset.tooltip;

            document.body.appendChild(tooltip);

            const rect = elemento.getBoundingClientRect();

            tooltip.style.position = "absolute";
            tooltip.style.left = rect.left + "px";
            tooltip.style.top = rect.bottom + 5 + "px";
        });

        elemento.addEventListener("mouseleave", () => {

            const tooltip = document.getElementById("tooltip");

            if (tooltip) {
                tooltip.remove();
            }
        });
    });
}

iniciarTooltip();