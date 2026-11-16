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

const offerCountdowns = document.querySelectorAll("[data-offer-countdown]");

offerCountdowns.forEach((countdown) => {
  const deadline = new Date(countdown.dataset.deadline).getTime();
  const daysElement = countdown.querySelector("[data-countdown-days]");
  const hoursElement = countdown.querySelector("[data-countdown-hours]");
  const minutesElement = countdown.querySelector("[data-countdown-minutes]");
  const secondsElement = countdown.querySelector("[data-countdown-seconds]");
  const statusElement = countdown.querySelector("[data-countdown-status]");
  const titleElement = countdown.querySelector(".offer-countdown-kicker");
  let previousAnnouncedMinute = null;
  let intervalId;

  const padNumber = (value) => String(value).padStart(2, "0");

  const updateCountdown = () => {
    const remainingTime = Math.max(0, deadline - Date.now());
    const totalSeconds = Math.ceil(remainingTime / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    daysElement.textContent = padNumber(days);
    hoursElement.textContent = padNumber(hours);
    minutesElement.textContent = padNumber(minutes);
    secondsElement.textContent = padNumber(seconds);

    const totalMinutes = Math.floor(totalSeconds / 60);
    if (totalMinutes !== previousAnnouncedMinute) {
      statusElement.textContent = `${days} días, ${hours} horas y ${minutes} minutos para que termine la oferta.`;
      previousAnnouncedMinute = totalMinutes;
    }

    if (remainingTime === 0) {
      countdown.classList.add("is-expired");
      titleElement.textContent = "Oferta finalizada";
      statusElement.textContent = "La oferta ha finalizado.";
      window.clearInterval(intervalId);
      return false;
    }

    return true;
  };

  if (Number.isNaN(deadline)) {
    countdown.hidden = true;
    return;
  }

  if (updateCountdown()) {
    intervalId = window.setInterval(updateCountdown, 1000);
  }
});
