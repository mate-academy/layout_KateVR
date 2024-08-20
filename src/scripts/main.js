"use strict";

/* play video funccional */

const body = document.querySelector(".page__body");
const playButton = [...document.querySelectorAll(".play-button")];
const closeVideoScreen = document.querySelector(".close-video__button");
const videoScreen = document.querySelector(".video-container");
const darkBackground = document.querySelector(".dark-background");

playButton[0].addEventListener("click", () => {
  videoScreen.classList.remove("hidden");
  body.classList.add("overflow--hidden");
  darkBackground.classList.remove("hidden");
});

playButton[1].addEventListener("click", () => {
  videoScreen.classList.remove("hidden");
  body.classList.add("overflow--hidden");
  darkBackground.classList.remove("hidden");
});

closeVideoScreen.addEventListener("click", () => {
  videoScreen.classList.add("hidden");
  body.classList.remove("overflow--hidden");
  darkBackground.classList.add("hidden");
});

/* slider functional */

const sliderScreen = document.querySelector(".about__poster");
const sliderDots = document.querySelectorAll(".nav__dot");
let slideNum = 1;

setInterval(() => {
  if (!videoScreen.classList.contains("hidden")) {
    return 0;
  } else {
    if (slideNum < 4) {
      sliderScreen.classList.remove(`img-${slideNum}`);
      sliderDots[slideNum - 1].classList.remove("nav__dot--active");
      slideNum++;
      sliderDots[slideNum - 1].classList.add("nav__dot--active");
      sliderScreen.classList.add(`img-${slideNum}`);
    } else {
      slideNum = 1;
      sliderDots[3].classList.remove("nav__dot--active");
      sliderScreen.classList.remove("img-4");
      sliderScreen.classList.add(`img-${slideNum}`);
      sliderDots[slideNum - 1].classList.add("nav__dot--active");
    }
  }
}, 2000);
