export function iniciarAnimacaoNumeros() {
  function animarNumero(elemento, valorFinal) {
    let valorAtual = 0;
    const intervalo = setInterval(() => {
      valorAtual += Math.ceil(valorFinal / 100);
      if (valorAtual >= valorFinal) {
        valorAtual = valorFinal;
        clearInterval(intervalo);
      }
      elemento.textContent = `+${valorAtual.toLocaleString()}`;
    }, 20);
  }

  const numeroFaixas = document.getElementById("numero-faixas");
  const numeroArtistas = document.getElementById("numero-artistas");
  const numeroOuvintes = document.getElementById("numero-ouvintes");

  const valorFaixas = Math.floor(Math.random() * 100000) + 30000;
  const valorArtistas = Math.floor(Math.random() * 5000) + 1300;
  const valorOuvintes = Math.floor(Math.random() * 1000000) + 1000000;

  animarNumero(numeroFaixas, valorFaixas);
  animarNumero(numeroArtistas, valorArtistas);
  animarNumero(numeroOuvintes, valorOuvintes);
}
