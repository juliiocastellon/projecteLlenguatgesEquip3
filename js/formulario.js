/************ Lògica del formulari de contacte - Marc Peiró ************/

function inicio() {
    iniciarFormulari();
}

function iniciarFormulari() {
    let formulari = document.getElementById("contact-form");

    if (!formulari) return;

    formulari.addEventListener("submit", altaMensaje);

    formulari.addEventListener("reset", function () {
        limpiarErrores();
        actualitzarComptador(0);
    });

    let textarea = document.getElementById("mensaje");
    if (textarea) {
        textarea.addEventListener("input", function () {
            actualitzarComptador(textarea.value.length);
        });
    }
}


function actualitzarComptador(actual) {
    let maxCaracters = 500;
    let comptador = document.getElementById("comptador-missatge");

    if (comptador) {
        comptador.textContent = actual + " / " + maxCaracters + " caràcters";

        if (actual >= maxCaracters) {
            comptador.style.color = "red";
        } else if (actual >= maxCaracters * 0.8) {
            comptador.style.color = "orange";
        } else {
            comptador.style.color = "";
        }
    }
}

window.onload = inicio;
