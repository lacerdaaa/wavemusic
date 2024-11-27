export function criarPontosDeLuz(container, numeroPontos) {
  for (let i = 0; i < numeroPontos; i++) {
    const ponto = document.createElement("div");
    ponto.classList.add("ponto-luz");
    ponto.style.top = `${Math.random() * 100}%`;
    ponto.style.left = `${Math.random() * 100}%`;
    ponto.style.width = `${Math.random()}px`;
    ponto.style.height = ponto.style.width;
    container.appendChild(ponto);
  }

  setInterval(() => {
    const pontos = document.querySelectorAll(".ponto-luz");
    pontos.forEach((ponto) => {
      ponto.style.top = `${Math.random() * 100}%`;
      ponto.style.left = `${Math.random() * 100}%`;
    });
  }, 100);
}
