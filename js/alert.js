function mostrarAlerta(mensaje, color) {

    const alerta = document.createElement("div");

    alerta.textContent = mensaje;
    alerta.style.backgroundColor = color;
    alerta.style.color = "white";
    alerta.style.padding = "10px";

    document.body.prepend(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 3000);
}

mostrarAlerta("Bienvenido a FitLife", "green");