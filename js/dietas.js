function inici() {
    let servicios = document.getElementById("servicios");
    let ejercicios = document.getElementById("ejercicios");

    servicios.addEventListener("change",serv);
   
    ejercicios.addEventListener("change",serv);

}
function serv(){
    let servicios = document.getElementById("servicios");
    if (servicios.value !== "selecciona") {
            ejercicios.disabled = false;
    } else {
            ejercicios.disabled = true;
            if (document.getElementById("imgseleccion")) {
            let img = document.getElementById("imgseleccion");
            divseleccion.removeChild(img);
        }
    }
    if (servicios.value == "boxeo") {
        
        let ejercicios = document.getElementById("ejercicios");
        
        if (ejercicios.value == "Ejercicio1") {
            let divseleccion = document.getElementById("divseleccion");
            if (document.getElementById("imgseleccion")) {
                let img = document.getElementById("imgseleccion");
                divseleccion.removeChild(img);
            }
            let img = document.createElement("img");
            img.src = "../img/box4k.jpg";
            img.height = 300;
            img.width = 300;
            img.style.marginLeft = "35%";
            img.id = "imgseleccion";
            divseleccion.appendChild(img);
            console.log(img.src);
        }
        if (ejercicios.value == "Ejercicio2") {
            let divseleccion = document.getElementById("divseleccion");
            if (document.getElementById("imgseleccion")) {
                let img = document.getElementById("imgseleccion");
                divseleccion.removeChild(img);
            }
            let img = document.createElement("img");
            img.src = "../img/boxeo2.jpg";
            img.style.height = "150px";
            img.style.width = "300px";
            img.style.marginLeft = "35%";
            img.id = "imgseleccion";
            divseleccion.appendChild(img);
        }
    }
    if (servicios.value == "zumba") {
        
        let ejercicios = document.getElementById("ejercicios");
        
        if (ejercicios.value == "Ejercicio1") {
            let divseleccion = document.getElementById("divseleccion");
            if (document.getElementById("imgseleccion")) {
                let img = document.getElementById("imgseleccion");
                divseleccion.removeChild(img);
            }
            let img = document.createElement("img");
            img.src = "../img/zumba1.jpg";
            img.style.height = "150px";
            img.style.width = "300px";
            img.style.marginLeft = "35%";
            img.id = "imgseleccion";
            divseleccion.appendChild(img);
            console.log(img.src);
        }
        if (ejercicios.value == "Ejercicio2") {
            let divseleccion = document.getElementById("divseleccion");
            if (document.getElementById("imgseleccion")) {
                let img = document.getElementById("imgseleccion");
                divseleccion.removeChild(img);
            }
            let img = document.createElement("img");
            img.src = "../img/zumba3.jpg";
            img.style.height = "150px";
            img.style.width = "300px";
            img.style.marginLeft = "35%";
            img.id = "imgseleccion";
            divseleccion.appendChild(img);
        }
    }
}
window.addEventListener('load', inici);
