// validaciones.js — Módulo de validación del formulario de contacto FitLife
// Autor: Marc Peiró — Fase IV (JavaScript)

// Regex para correo electrónico: usuario@dominio.extension
const emailRegex = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;

// Regex para edad: número entero entre 18 y 100 (18-19 → 1[89], 20-99 → [2-9]\d, 100 → literal)
const edadRegex = /^(1[89]|[2-9]\d|100)$/;

// Escribe un mensaje de error en el span identificado por idSpan
function mostrarError(idSpan, mensaje) {
    const span = document.getElementById(idSpan);
    if (span) span.textContent = mensaje;
}

// Borra todos los mensajes de error del formulario
function limpiarErrores() {
    document.querySelectorAll('.error-msg').forEach(function (s) { s.textContent = ''; });
}

/**
 * Función principal de validación del formulario.
 * Devuelve true si todos los campos son correctos, false si hay errores.
 */
function validarFormulario() {
    limpiarErrores();
    let valido = true;

    const email = document.getElementById('email').value.trim();
    const edad  = document.getElementById('edad').value.trim();

    // Validar correo electrónico
    if (!email) {
        mostrarError('error-email', 'El correo electrónico es obligatorio.');
        valido = false;
    } else if (!emailRegex.test(email)) {
        mostrarError('error-email', 'Introduce un correo electrónico válido (ej: usuario@gmail.com).');
        valido = false;
    }

    // Validar edad (número entero entre 18 y 100)
    if (!edad) {
        mostrarError('error-edad', 'La edad es obligatoria.');
        valido = false;
    } else if (!edadRegex.test(edad)) {
        mostrarError('error-edad', 'La edad debe ser un número entero entre 18 y 100.');
        valido = false;
    }

    return valido;
}
