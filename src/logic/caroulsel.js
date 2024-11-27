
export function iniciarCarousel() {
  const carouselContainer = document.querySelector(".carousel-container");

  carouselContainer.addEventListener("animationiteration", () => {
    carouselContainer.style.animationName = "none";
    void carouselContainer.offsetWidth;
    carouselContainer.style.animationName = "scrollInfinito";
  });
}
