// Scroll reveal
const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});

// Slider
let index = 0;
let interval;
const slides = document.querySelector(".slides");
const total = document.querySelectorAll(".slides img").length;

function startSlider() {
  interval = setInterval(() => {
    index = (index + 1) % total;
    slides.style.transform = `translateX(-${index * 100}%)`;
  }, 3000);
}

function pauseSlider() {
  clearInterval(interval);
}

function resumeSlider() {
  startSlider();
}

window.onload = startSlider;
