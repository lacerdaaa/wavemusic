import { criarPontosDeLuz } from "./light.js"; 
import { iniciarAnimacaoNumeros } from "./numbers.js";
import { iniciarCarousel } from "./caroulsel.js";

const container = document.querySelector(".container");
const containerAlbum = document.querySelector(".container-albuns");
const cardInformativo = document.getElementById("card-informativo");

cardInformativo.addEventListener('mouseover', () => {
  iniciarAnimacaoNumeros();
})

window.scrollTo(0, 0); 
iniciarCarousel();
criarPontosDeLuz(container, 20);
criarPontosDeLuz(containerAlbum, 5)
