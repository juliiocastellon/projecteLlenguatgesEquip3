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

// Crea la tarjeta (div) que representa un mensaje en pantalla
function crearTarjeta(objeto) {
    let tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta-mensaje");

    let titulo = document.createElement("h3");
    titulo.textContent = objeto.asunto;
    tarjeta.appendChild(titulo);

    let datos = document.createElement("p");
    datos.classList.add("datos-mensaje");
    datos.textContent = objeto.nombre + " · " + objeto.email + " · " + objeto.edad + " años · Miembro: " + objeto.miembro;
    tarjeta.appendChild(datos);

    let texto = document.createElement("p");
    texto.textContent = objeto.mensaje;
    tarjeta.appendChild(texto);

    return tarjeta;
}

// Muestra todos los mensajes del array en el div lista-mensajes
function mostrarMensajes() {
    let lista = document.getElementById("lista-mensajes");
    lista.innerHTML = "";

    for (let i = 0; i < mensajes.length; i++) {
        let tarjeta = crearTarjeta(mensajes[i]);
        lista.appendChild(tarjeta);
    }
}

// Función inicial: se ejecuta al cargar la página
function inicio() {
    convertirMensajes();
    mostrarMensajes();
}

window.onload = inicio;
