// I will be creating a different pen with touch support but right // now I have no time for it due to school

const slider = document.querySelector(".caroucel");
const slides = document.querySelectorAll(".item");
const button = document.querySelectorAll(".button");

let current = 0;
let prev = 4;
let next = 1;

button[0].addEventListener("click", () => {
  return gotoPrev();
});
button[1].addEventListener("click", () => {
  return gotoNext();
});

const gotoPrev = () => {
  return current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);
};

const gotoNext = () => {
  return current < 4 ? gotoNum(current + 1) : gotoNum(0);
};

export function gotoNum(number){
  current = number;
  prev = current - 1;
  next = current + 1;
  slides[current].classList.remove("active");
  slides[current].classList.remove("prev");
  slides[current].classList.remove("next");
  if (next == 5) {
    next = 0;
  }

  if (prev == -1) {
    prev = 4;
  }

  slides[current].classList.add("active");
  slides[prev].classList.add("prev");
  slides[next].classList.add("next");
};

