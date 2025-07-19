import './style.css'

const app = document.querySelector<HTMLDivElement>("#app")!

const menu = document.querySelector<HTMLImageElement>(".menu")!

const fechar = document.querySelector<HTMLImageElement>(".fechar")

const topo_inferior = document.querySelector<HTMLDivElement>(".topo-inferior")

menu?.addEventListener("click", () =>{
    topo_inferior?.classList.toggle("ativo")
    menu?.classList.toggle("ativo")
    fechar?.classList.toggle("ativo")
})