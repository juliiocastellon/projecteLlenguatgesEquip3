// modal.js — Finestra Modal per introduir nous objectes Missatge
// Autor: Fase IV (JavaScript - Modal)

// Obre la finestra modal
function obrirModal() {
    let modal = document.getElementById("modal-overlay");
    if (modal) {
        modal.style.display = "flex";
        document.getElementById("modal-nom").focus();
    }
}

// Tanca la finestra modal i neteja els camps
function tancarModal() {
    let modal = document.getElementById("modal-overlay");
    if (modal) {
        modal.style.display = "none";
        document.getElementById("modal-form").reset();
        document.querySelectorAll(".modal-error").forEach(function(e) { e.textContent = ""; });
    }
}

// Validació i enviament del formulari de la modal
function enviarModal(event) {
    event.preventDefault();

    let nom          = document.getElementById("modal-nom").value.trim();
    let email        = document.getElementById("modal-email").value.trim();
    let edat         = document.getElementById("modal-edat").value.trim();
    let assumpte     = document.getElementById("modal-assumpte").value.trim();
    let missatgeText = document.getElementById("modal-missatge").value.trim();
    let membre       = document.querySelector('input[name="modal-membre"]:checked');

    // Neteja errors previs
    document.querySelectorAll(".modal-error").forEach(function(e) { e.textContent = ""; });

    const emailRegex = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
    const edatRegex  = /^(1[89]|[2-9]\d|100)$/;

    let valid = true;

    if (!nom)                             { document.getElementById("modal-err-nom").textContent      = "El nom és obligatori.";    valid = false; }
    if (!email || !emailRegex.test(email)){ document.getElementById("modal-err-email").textContent    = "Correu no vàlid.";         valid = false; }
    if (!edat  || !edatRegex.test(edat)) { document.getElementById("modal-err-edat").textContent     = "Edat entre 18 i 100.";     valid = false; }
    if (!assumpte)                        { document.getElementById("modal-err-assumpte").textContent = "L'assumpte és obligatori."; valid = false; }
    if (!missatgeText)                    { document.getElementById("modal-err-missatge").textContent = "El missatge és obligatori."; valid = false; }
    if (!membre)                          { document.getElementById("modal-err-membre").textContent   = "Camp obligatori.";          valid = false; }

    if (!valid) return;

    // Crea l'objecte Missatge i l'afegeix a l'array global (definit en objetos.js)
    let nouMissatge = new Missatge(nom, email, edat, assumpte, missatgeText, membre.value);
    mensajes.push(nouMissatge);
    mostrarMensajes();

    tancarModal();
}

// Inicialitza la modal en carregar la pàgina
function iniciarModal() {
    let btnObrir = document.getElementById("btn-obrir-modal");
    let overlay  = document.getElementById("modal-overlay");

    if (!btnObrir || !overlay) return;

    btnObrir.addEventListener("click", obrirModal);
    document.getElementById("btn-tancar-modal").addEventListener("click", tancarModal);

    // Tancar la modal en clicar fora del contingut
    overlay.addEventListener("click", function(e) {
        if (e.target === overlay) tancarModal();
    });

    document.getElementById("modal-form").addEventListener("submit", enviarModal);
}

window.addEventListener("load", iniciarModal);
