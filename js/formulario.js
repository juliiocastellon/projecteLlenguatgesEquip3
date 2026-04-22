// formulario.js — Lógica del formulario de contacto FitLife
// Autor: Marc Peiró — Fase IV (JavaScript)

document.addEventListener('DOMContentLoaded', function () {

    const textarea = document.getElementById('mensaje');
    const contador = document.getElementById('contador-mensaje');
    const LIMITE   = 500;

    // Actualiza el contador de caracteres cada vez que el usuario escribe
    textarea.addEventListener('input', function () {
        const total = textarea.value.length;
        contador.textContent = total + '/' + LIMITE + ' caracteres';
        contador.style.color = total > LIMITE ? '#ff3b3b' : '';
    });

});
