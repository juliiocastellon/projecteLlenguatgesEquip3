// formulario.js — Lógica del formulario de contacto FitLife
// Autor: Marc Peiró — Fase IV (JavaScript)

document.addEventListener('DOMContentLoaded', function () {

    const textarea = document.getElementById('mensaje');
    const contador = document.getElementById('contador-mensaje');
    const LIMITE   = 500;

    const form = document.getElementById('contact-form');

    // Actualiza el contador de caracteres cada vez que el usuario escribe
    textarea.addEventListener('input', function () {
        const total = textarea.value.length;
        contador.textContent = total + '/' + LIMITE + ' caracteres';
        contador.style.color = total > LIMITE ? '#ff3b3b' : '';
    });

    // Al pulsar Limpiar, resetea también el contador de caracteres
    form.addEventListener('reset', function () {
        setTimeout(function () {
            contador.textContent = '0/' + LIMITE + ' caracteres';
            contador.style.color = '';
        }, 0);
    });

    // Al enviar el formulario: valida los campos y, si son correctos, prepara los datos
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        if (!validarFormulario()) {
            return;
        }

        const datos = {
            nombre:  document.getElementById('nombre').value.trim(),
            email:   document.getElementById('email').value.trim(),
            edad:    document.getElementById('edad').value.trim(),
            asunto:  document.getElementById('asunto').value.trim(),
            mensaje: document.getElementById('mensaje').value.trim(),
            miembro: document.querySelector('input[name="miembro"]:checked').value
        };

        console.log('Formulario válido. Datos recogidos:', datos);

        // TODO: integración con clase Missatge de Julio
    });

});
