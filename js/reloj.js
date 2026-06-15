function iniciarReloj() {

    const reloj = document.getElementById("reloj");

    function actualizarReloj() {

        const ahora = new Date();

        const dia = String(ahora.getDate()).padStart(2, "0");
        const mes = String(ahora.getMonth() + 1).padStart(2, "0");
        const anyo = ahora.getFullYear();

        const hora = String(ahora.getHours()).padStart(2, "0");
        const minuto = String(ahora.getMinutes()).padStart(2, "0");
        const segundo = String(ahora.getSeconds()).padStart(2, "0");

        reloj.textContent =
            `${dia}/${mes}/${anyo} ${hora}:${minuto}:${segundo}`;
    }

    actualizarReloj();
    setInterval(actualizarReloj, 1000);
}

iniciarReloj();