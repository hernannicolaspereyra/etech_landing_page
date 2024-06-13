// menu nav

let abrir = document.querySelector("#abir")
let cerrar = document.querySelector("#cerrar")
let menu = document.querySelector("#menu")

abrir.addEventListener("click", () => {
    menu.classList.add("visible")
})

cerrar.addEventListener("click", () => {
    menu.classList.remove("visible")
})

window.addEventListener("scroll", () => {
    let header = document.querySelector("#header")
    header.classList.toggle("abajo", window.scrollY>0)
})