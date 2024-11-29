window.addEventListener("scroll", function () {
  let ball = document.querySelector(".timeline-ball");
  let events = document.querySelectorAll(".timeline-event");
  let lastEventTop = 0; // Variável para armazenar a posição do último evento

  events.forEach((event) => {
    let eventTop = event.offsetTop;

    if (window.pageYOffset > eventTop - 100) {
      lastEventTop = eventTop; // Atualiza a posição do último evento
    }
  });

  // Define a posição da bolinha com base no último evento
  ball.style.top = lastEventTop + "px";
});
