import { criarPontosDeLuz as r } from "./light.js";
import { iniciarAnimacaoNumeros as o } from "./numbers.js";
import { iniciarCarousel as e } from "./caroulsel.js";
import { inserirFooter } from './footer.js'


let container = document.querySelector(".container"),
  containerAlbum = document.querySelector(".container-albuns"),
  cardInformativo = document.getElementById("card-informativo");
cardInformativo.addEventListener("mouseover", () => {
  o();
}),
  window.scrollTo(0, 0),
  e(),
  r(container, 20),
  r(containerAlbum, 5);
  
inserirFooter()
