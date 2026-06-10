// objetos.js — Mensajes de usuarios FitLife (array JSON y objetos Missatge)
// Autor: Julio — Fase IV (JavaScript - Objetos)

// Array JSON con 5 mensajes de usuarios (mismos campos que el formulario de contacto)
let mensajesJSON = [
    { "nombre": "Laura Gómez",    "email": "laura.gomez@gmail.com",   "edad": "28", "asunto": "Horarios de zumba",       "mensaje": "Hola, me gustaría saber los horarios de las clases de zumba por la tarde.",          "miembro": "si" },
    { "nombre": "Carlos Ferrer",  "email": "carlosferrer@hotmail.com","edad": "35", "asunto": "Inscripción a boxeo",     "mensaje": "Quiero apuntarme a las clases de boxeo para principiantes. ¿Qué necesito llevar?",   "miembro": "no" },
    { "nombre": "Anna Martí",     "email": "anna.marti@gmail.com",    "edad": "22", "asunto": "Planes de dieta",         "mensaje": "Me interesa el servicio de dietas personalizadas. ¿Está incluido en la cuota?",      "miembro": "si" },
    { "nombre": "Joan Soler",     "email": "joansoler@outlook.com",   "edad": "41", "asunto": "Queja vestuarios",        "mensaje": "Las taquillas del vestuario masculino llevan una semana sin funcionar bien.",        "miembro": "si" },
    { "nombre": "María Navarro",  "email": "marianavarro@gmail.com",  "edad": "19", "asunto": "Solicitar información",   "mensaje": "¿Hay algún descuento para estudiantes? Me gustaría probar una clase gratis.",        "miembro": "no" }
];

// Array donde se guardan los objetos de la clase Missatge
let mensajes = [];

// Convierte cada elemento del array JSON en un objeto Missatge
// y lo añade al array de mensajes
function convertirMensajes() {
    for (let i = 0; i < mensajesJSON.length; i++) {
        let m = mensajesJSON[i];
        let objeto = new Missatge(m.nombre, m.email, m.edad, m.asunto, m.mensaje, m.miembro);
        mensajes.push(objeto);
        console.log(objeto.resumen());
    }
}

// Función inicial: se ejecuta al cargar la página
function inicio() {
    convertirMensajes();
}

window.onload = inicio;
