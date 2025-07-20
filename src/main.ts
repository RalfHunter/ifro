
import './styles/header/header.css'
import './styles/header/header2.css'
import './styles/main/main.css'
import './styles/footer/footer.css'

const app = document.querySelector<HTMLDivElement>("#app")!

const menu = document.querySelector<HTMLImageElement>(".menu")!

const fechar = document.querySelector<HTMLImageElement>(".fechar")

const topo_inferior = document.querySelector<HTMLDivElement>(".topo-inferior")
const menu_lateral = document.querySelector<HTMLDivElement>(".menu-lateral")

document.addEventListener('click', function(event) {

    const alvo = event.target as HTMLElement;
  if (menu.contains(alvo)) return;

  // ignora cliques dentro da área do menu lateral
  if (menu_lateral?.contains(alvo)) return;

  // se o menu estiver ativo, dispara o "fechamento"
  if (menu.classList.contains("ativo")) {
    menu.click();
  }
})

menu?.addEventListener("click", () =>{
    topo_inferior?.classList.toggle("ativo")
    menu?.classList.toggle("ativo")
    fechar?.classList.toggle("ativo")
    // app?.classList.toggle("ativo")
    menu_lateral?.classList.toggle("ativo")
})