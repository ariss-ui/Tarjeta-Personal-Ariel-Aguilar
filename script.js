/* Enlazar elementos del HTML */

const toggleButton = document.getElementById("toggle-button");
const body = document.body;

/* Creación de una función para ejecutar un código */

toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark")
} )