let noButton = document.getElementById("no");
let yesButton = document.getElementById("yes");
let message = document.getElementById("message");
let size = 18;
let clickCount = 0;

yesButton.addEventListener("click", function() {
    message.textContent = "Gràcies ratona, tk!";
});

noButton.addEventListener("click", function() {
    clickCount++;
    size += 15;
    yesButton.style.fontSize = size + "px";
    
    if (clickCount == 1) {
        message.textContent = "Segura?";
    } else if (clickCount == 2) {
        message.textContent = "Va, dona-li que sí, no siguis aixi!";
    } else if (clickCount == 3) {
        message.textContent = "Si prems 'No' una altra vegada, morirà un monito 🐵";
    } else if (clickCount == 4) {
        message.textContent = "Alaaaaaa pobre monito 🐒, arregleu amb un SI";
    } else {
        message.textContent = "Doncs no me queda altre...";
        
        // Cambiar el botón "No" por un nuevo botón "Sí"
        noButton.parentNode.removeChild(noButton);  // Elimina el botón "No"
        
        // Crea el nuevo botón "Sí"
        let newYesButton = document.createElement("button");
        newYesButton.textContent = "Sí";
        newYesButton.classList.add("btn", "yes"); // Añadir las mismas clases para estilo
        newYesButton.addEventListener("click", function() {
            message.textContent = "Gràcies ratona, tk!";
        });
        
        // Añadir el nuevo botón al contenedor
        yesButton.parentNode.appendChild(newYesButton);
    }
});
