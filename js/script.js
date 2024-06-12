let abrir = document.querySelector("#abir")
let cerrar = document.querySelector("#cerrar")
let menu = document.querySelector("#menu")

abrir.addEventListener("click", () => {
    menu.classList.add("visible")
})

cerrar.addEventListener("click", () => {
    menu.classList.remove("visible")
})

console.log("hola")