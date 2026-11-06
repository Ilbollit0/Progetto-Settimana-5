// Bloom — Week Project Settimana V

// 
// MODALE "Richiedi preventivo"
// 
const overlay = document.getElementById("modal-overlay");
const closeBtn = document.getElementById("modal-close");
const form = document.getElementById("quote-form");
const successMsg = document.getElementById("modal-success");
const openButtons = document.querySelectorAll(".open-modal");

let closeTimer = null;

function openModal(event) {
  event.preventDefault();
  overlay.removeAttribute("hidden");
  document.body.style.overflow = "hidden"; // blocca lo scroll della pagina sotto
}

function closeModal() {
  overlay.setAttribute("hidden", "");
  document.body.style.overflow = "";

  // reset: form vuoto e visibile, messaggio di conferma nascosto
  clearTimeout(closeTimer);
  form.reset();
  form.removeAttribute("hidden");
  successMsg.setAttribute("hidden", "");
}

openButtons.forEach(function (btn) {
  btn.addEventListener("click", openModal);
});

closeBtn.addEventListener("click", closeModal);

form.addEventListener("submit", function (event) {
  event.preventDefault(); // niente invio reale: mostriamo solo la conferma
  form.setAttribute("hidden", "");
  successMsg.removeAttribute("hidden");

  // chiusura automatica dopo 2 secondi
  closeTimer = setTimeout(closeModal, 2000);
});
