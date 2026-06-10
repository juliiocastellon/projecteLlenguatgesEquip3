// missatge.js — Clase Missatge para los mensajes de usuarios FitLife
// Autor: Julio — Fase IV (JavaScript - Objetos)

// Clase que representa un mensaje enviado por un usuario.
// Tiene los mismos campos que el formulario de contacto:
// nombre, email, edad, asunto, mensaje y miembro (radiobuttons sí/no)
class Missatge {

    constructor(nombre, email, edad, asunto, mensaje, miembro) {
        this.nombre  = nombre;
        this.email   = email;
        this.edad    = edad;
        this.asunto  = asunto;
        this.mensaje = mensaje;
        this.miembro = miembro;
    }

    // Devuelve un resumen del mensaje en una línea (útil para la consola)
    resumen() {
        return this.nombre + " (" + this.edad + " años) - " + this.asunto + ": " + this.mensaje;
    }

    // Devuelve true si el usuario es miembro del gimnasio
    esMiembro() {
        return this.miembro === "si";
    }
}
