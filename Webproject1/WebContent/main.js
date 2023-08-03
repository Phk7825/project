function rotateSlide() {
  const slides = document.querySelectorAll(".slide");
  const textItems = document.querySelectorAll(".slideFuncTxt");
  const currentIndex = [...slides].findIndex(
    (slide) => slide.classList.contains("on")
  );
  const nextIndex = (currentIndex + 1) % slides.length;

  slides[currentIndex].classList.remove("on");
  slides[nextIndex].classList.add("on");

  textItems[currentIndex].classList.remove("on");
  textItems[nextIndex].classList.add("on");

  const newBackground = slides[nextIndex].getAttribute("data-url");
  document.querySelector(
    ".clientStory-slide-wrap"
  ).style.background = `linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)) 0% 0%/cover, url(${Background}) center center no-repeat`;
}

setInterval(rotateSlide, 3000);