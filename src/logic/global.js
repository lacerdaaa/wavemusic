import { criarPontosDeLuz } from "./light.js"; 
import { iniciarAnimacaoNumeros } from "./numbers.js";
import { iniciarCarousel } from "./caroulsel.js";

const container = document.querySelector(".container");
const cardInformativo = document.getElementById("card-informativo");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
      if (entry.isIntersecting) {
          iniciarAnimacaoNumeros();
          observer.unobserve(cardInformativo);
      }
    });
},
{
    rootMargin: "-600px 0px 0px 0px",
}
);
observer.observe(cardInformativo);

window.scrollTo(0, 0); 
iniciarCarousel();
criarPontosDeLuz(container, 15);
