import './style.css'

const app = document.querySelector<HTMLDivElement>("#app")!

const menu = document.querySelector<HTMLImageElement>(".menu")!

const topo_inferior = document.querySelector<HTMLDivElement>(".topo-inferior")

menu?.addEventListener("click", () =>{
    topo_inferior?.classList.toggle("ativo")
})