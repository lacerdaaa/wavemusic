export function criarPontosDeLuz(container, numeroPontos) {
  const pontos = []; // Array para armazenar as posições dos pontos

  for (let i = 0; i < numeroPontos; i++) {
    let posicaoValida = false;
    let x, y;

    while (!posicaoValida) {
      x = Math.random() * window.innerWidth;
      y = Math.random() * window.innerHeight;
      posicaoValida = true;

      for (let j = 0; j < pontos.length; j++) {
        const distancia = Math.sqrt(
          Math.pow(x - pontos[j].x, 2) + Math.pow(y - pontos[j].y, 2)
        );
        if (distancia < 100) {
          posicaoValida = false;
          break;
        }
      }
    }

    const ponto = document.createElement("div");
    ponto.classList.add("ponto-luz");
    ponto.style.left = `${x}px`;
    ponto.style.top = `${y}px`;
    ponto.style.width = `${Math.random()}px`;
    ponto.style.height = ponto.style.width;
    container.appendChild(ponto);

    pontos.push({ x, y });
  }

  setInterval(() => {
    const pontos = document.querySelectorAll(".ponto-luz");
    pontos.forEach((ponto) => {
      let posicaoValida = false;
      let x, y;

      while (!posicaoValida) {
        x = Math.random() * window.innerWidth;
        y = Math.random() * window.innerHeight;
        posicaoValida = true;

        for (let j = 0; j < pontos.length; j++) {
          if (ponto !== pontos[j]) {
            const distancia = Math.sqrt(
              Math.pow(x - pontos[j].x, 2) + Math.pow(y - pontos[j].y, 2)
            );
            if (distancia < 100) {
              posicaoValida = false;
              break;
            }
          }
        }
      }
      ponto.style.left = `${x}px`;
      ponto.style.top = `${y}px`;
    });
  }, 100);
}
