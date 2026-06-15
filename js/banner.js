/************ Banner amb imatges i textos - Anouar Bouassami ************/

// Array de diapositives: cada element té una imatge i un text relacionat amb el projecte
let diapositives = [
    { imatge: "../img/banner1.jpg", text: "Benvinguts al nostre projecte LMSGI" },
    { imatge: "../img/banner2.jpg", text: "Formulari de contacte amb validació" },
    { imatge: "../img/banner3.jpg", text: "Gestió d'objectes i missatges" },
    { imatge: "../img/banner4.jpg", text: "Interfície dinàmica i responsive" },
    { imatge: "../img/banner5.jpg", text: "Desenvolupat per 1r DAM - IES Lluís Simarro" }
];

// Índex de la diapositiva actual
let indexActual = 0;

// Referència a l'interval del banner per poder aturar-lo si cal
let intervalBanner = null;

// Funció principal que inicialitza el banner
function inicio() {
    iniciarBanner();
}

// Crea l'estructura HTML del banner i arrenca el slideshow automàtic
function iniciarBanner() {
    let contenidor = document.getElementById("banner");

    // Si no existeix l'element banner a la pàgina, no fem res
    if (!contenidor) return;

    // Creem la imatge principal del banner
    let imatgeBanner = document.createElement("img");
    imatgeBanner.id = "bannerImatge";
    imatgeBanner.src = diapositives[indexActual].imatge;
    imatgeBanner.alt = "Banner imatge";

    // Creem el paràgraf amb el text de la diapositiva
    let textBanner = document.createElement("p");
    textBanner.id = "bannerText";
    textBanner.textContent = diapositives[indexActual].text;

    // Creem els botons de control anterior / següent
    let botoAnterior = document.createElement("button");
    botoAnterior.id = "bannerAnterior";
    botoAnterior.textContent = "◀";
    botoAnterior.addEventListener("click", diapositivaAnterior);

    let botoSeguent = document.createElement("button");
    botoSeguent.id = "bannerSeguent";
    botoSeguent.textContent = "▶";
    botoSeguent.addEventListener("click", diapositivaSeguent);

    // Afegim tot al contenidor
    contenidor.appendChild(botoAnterior);
    contenidor.appendChild(imatgeBanner);
    contenidor.appendChild(textBanner);
    contenidor.appendChild(botoSeguent);

    // Arranquem el canvi automàtic cada 3 segons
    intervalBanner = setInterval(diapositivaSeguent, 3000);
}

// Mostra la diapositiva de l'índex actual actualitzant imatge i text
function mostrarDiapositiva() {
    let imatgeBanner = document.getElementById("bannerImatge");
    let textBanner = document.getElementById("bannerText");

    if (imatgeBanner && textBanner) {
        imatgeBanner.src = diapositives[indexActual].imatge;
        imatgeBanner.alt = diapositives[indexActual].text;
        textBanner.textContent = diapositives[indexActual].text;
    }
}

// Avança a la diapositiva següent (torna al principi si és l'última)
function diapositivaSeguent() {
    indexActual = (indexActual + 1) % diapositives.length;
    mostrarDiapositiva();
}

// Torna a la diapositiva anterior (va al final si és la primera)
function diapositivaAnterior() {
    indexActual = (indexActual - 1 + diapositives.length) % diapositives.length;
    mostrarDiapositiva();
}

window.onload = inicio;
