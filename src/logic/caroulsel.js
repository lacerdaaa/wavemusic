export function iniciarCarousel() {
  let e = document.querySelector(".carousel-container");
  e.addEventListener("animationiteration", () => {
    (e.style.animationName = "none"),
      e.offsetWidth,
      (e.style.animationName = "scrollInfinito");
  });
}