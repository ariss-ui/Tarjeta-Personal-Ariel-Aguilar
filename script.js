/* Enlazar elementos del HTML */

const toggleButton = document.getElementById("toggle-button");
const body = document.body;
const logo = document.getElementById ("logo")

/* Creación de una función para ejecutar un código */

toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark");

  // Cambiamos el logo segun el tema 

  const isDark = body.classList.contains ("dark");
  logo.src = isDark ? "./assets/marca-grafica-dark.svg" : "./assets/marca-grafica.svg";
} )

