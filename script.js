document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".item");

    // Crearr un boton para el restablecimiento de los estilos >:)
    const resetButton = document.createElement("button");
    resetButton.textContent = "Restablecer Estilos";
    resetButton.classList.add("reset-btn"); 
    document.body.appendChild(resetButton);

    const initialStyles = new Map();
    


    items.forEach(item => {
        initialStyles.set(item, {
            backgroundColor: "Wheat", 
            color: "black",
            border: "2px solid #333",
            boxShadow: "none",
            transform: "scale(1)",
            display: "block",
            visibility: "visible"
        });

        item.addEventListener("mouseover", () => {
            item.style.backgroundColor = "#ddd";
        });

        item.addEventListener("mouseout", () => {
            item.style.backgroundColor = initialStyles.get(item).backgroundColor;
        });

        item.addEventListener("click", () => {
            item.style.transform = "scale(1.1)";
            setTimeout(() => {
                item.style.transform = initialStyles.get(item).transform;
            }, 200);
        });

        item.addEventListener("dblclick", () => {
            item.style.color = "red";
        });

    
        item.addEventListener("mousedown", () => {
            item.style.border = "2px solid blue";
        });

        item.addEventListener("mouseup", () => {
            item.style.border = initialStyles.get(item).border;
        });

        item.addEventListener("mouseenter", () => {
            console.log(`Estás sobre: ${item.innerText}`);
        });

        item.addEventListener("contextmenu", (event) => {
            event.preventDefault(); 
            item.style.visibility = "hidden"; 
        });
    });

   


    resetButton.addEventListener("click", () => {
        items.forEach(item => {
            const styles = initialStyles.get(item);
            Object.assign(item.style, styles);
        });
    });
});
