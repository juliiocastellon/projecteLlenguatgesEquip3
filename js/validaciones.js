// validaciones.js — Módulo de validación del formulario de contacto FitLife
// Autor: Marc Peiró — Fase IV (JavaScript)

// Regex para correo electrónico: usuario@dominio.extension
const emailRegex = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;

// Regex para edad: número entero entre 18 y 100 (18-19 → 1[89], 20-99 → [2-9]\d, 100 → literal)
const edadRegex = /^(1[89]|[2-9]\d|100)$/;

// Regex para nombre: letras (con acentos y ñ) y espacios, mínimo 3 caracteres
const nombreRegex = /^[a-zA-ZÀ-ÿ\s]{3,}$/;

// Regex para asunto: cualquier texto de entre 3 y 100 caracteres
const asuntoRegex = /^.{3,100}$/;

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

    const nombre  = document.getElementById('nombre').value.trim();
    const email   = document.getElementById('email').value.trim();
    const edad    = document.getElementById('edad').value.trim();
    const asunto  = document.getElementById('asunto').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();
    const miembro = document.querySelector('input[name="miembro"]:checked');

    // Validar nombre completo
    if (!nombre) {
        mostrarError('error-nombre', 'El nombre es obligatorio.');
        valido = false;
    } else if (!nombreRegex.test(nombre)) {
        mostrarError('error-nombre', 'Solo se permiten letras y espacios (mínimo 3 caracteres).');
        valido = false;
    }

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

    // Validar asunto
    if (!asunto) {
        mostrarError('error-asunto', 'El asunto es obligatorio.');
        valido = false;
    } else if (!asuntoRegex.test(asunto)) {
        mostrarError('error-asunto', 'El asunto debe tener entre 3 y 100 caracteres.');
        valido = false;
    }

    // Validar mensaje (obligatorio y máximo 500 caracteres)
    if (!mensaje) {
        mostrarError('error-mensaje', 'El mensaje es obligatorio.');
        valido = false;
    } else if (mensaje.length > 500) {
        mostrarError('error-mensaje', 'El mensaje no puede superar los 500 caracteres.');
        valido = false;
    }

    // Validar que se haya seleccionado una opción del grupo de radio buttons
    if (!miembro) {
        mostrarError('error-miembro', 'Indica si eres miembro del gimnasio.');
        valido = false;
    }

    return valido;
}
