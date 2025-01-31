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
    size += 10;
    yesButton.style.fontSize = size + "px";
    
    if (clickCount == 1) {
        message.textContent = "Segura?";
    } else if (clickCount == 2) {
        message.textContent = "Va, dona-li que sí, no siguis dolenta!";
    } else if (clickCount == 3) {
        message.textContent = "Si prems 'No' una altra vegada, ploraré 😢";
    } else {
        message.textContent = "Ja estic plorant... ara ho arregles! 😭";
    }
});
