const carousel = document.querySelector("[data-carousel]");

if (carousel) {
  const track = carousel.querySelector("[data-carousel-track]");
  const previousButton = document.querySelector("[data-carousel-previous]");
  const nextButton = document.querySelector("[data-carousel-next]");

  const getScrollStep = () => {
    const firstCard = track.querySelector(".project-card");
    const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0;

    return firstCard ? firstCard.getBoundingClientRect().width + gap : track.clientWidth;
  };

  const updateButtons = () => {
    const maximumScroll = track.scrollWidth - track.clientWidth;
    previousButton.disabled = track.scrollLeft <= 2;
    nextButton.disabled = track.scrollLeft >= maximumScroll - 2;
  };

  previousButton.addEventListener("click", () => {
    track.scrollBy({ left: -getScrollStep(), behavior: "smooth" });
  });

  nextButton.addEventListener("click", () => {
    track.scrollBy({ left: getScrollStep(), behavior: "smooth" });
  });

  track.addEventListener("scroll", updateButtons, { passive: true });
  window.addEventListener("resize", updateButtons);
  updateButtons();
}
