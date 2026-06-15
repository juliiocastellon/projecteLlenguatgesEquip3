/************ Combinació de tecles Ctrl+C - Anouar Bouassami ************/

// Funció principal que inicialitza l'escoltador de teclat
function inicio() {
    iniciarTeclat();
}

// Registra l'event keydown per detectar la combinació Ctrl+C
function iniciarTeclat() {
    document.addEventListener("keydown", gestionarTeclat);
}

// Gestiona les pulsacions de tecles i detecta Ctrl+C
function gestionarTeclat(event) {
    // Detectem Ctrl+C (ctrlKey + codi de tecla "c")
    if (event.ctrlKey && event.key === "c") {
        // Evitem el comportament per defecte (copiar) només en aquest context
        event.preventDefault();
        canviarColorFonsAleatori();
    }
}

// Genera un color hexadecimal aleatori i l'aplica al fons de la pàgina
function canviarColorFonsAleatori() {
    let colorAleatori = generarColorHex();
    document.body.style.backgroundColor = colorAleatori;
    console.log("Color de fons canviat a: " + colorAleatori);
}

// Retorna un color hexadecimal aleatori en format #RRGGBB
function generarColorHex() {
    let lletres = "0123456789ABCDEF";
    let color = "#";

    // Construïm el color caràcter a caràcter (6 caràcters hex)
    for (let i = 0; i < 6; i++) {
        let indexAleatori = Math.floor(Math.random() * 16);
        color += lletres[indexAleatori];
    }

    return color;
}

window.onload = inicio;
