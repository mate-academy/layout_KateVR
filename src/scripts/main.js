"use strict";

/* play video functional */

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

/* menu open background */

const menuOpenButton = document.querySelector(".menu-open-button");
const menuCloseButton = document.querySelector(".menu-close-button");
const menuList = document.querySelector(".menu-list");
const helpPage = document.querySelector(".help-page");
const languagePage = document.querySelector(".languages-page");

menuOpenButton.addEventListener("click", () => {
  darkBackground.classList.remove("hidden");
});

menuCloseButton.addEventListener("click", () => {
  darkBackground.classList.add("hidden");
});

menuList.addEventListener("click", (event) => {
  if (
    event.target.innerText === "Help" ||
    event.target.innerText === "Language"
  ) {
    return 0;
  } else {
    darkBackground.classList.add("hidden");
  }
});

helpPage.addEventListener("click", (event) => {
  if (event.target.classList.contains("help-page__close-button")) {
    return 0;
  } else {
    darkBackground.classList.add("hidden");
  }
});

languagePage.addEventListener("click", (event) => {
  if (event.target.classList.contains("menu-page-back__link")) {
    return 0;
  } else {
    darkBackground.classList.add("hidden");
  }
});

/* desktop lang list beheviour */

const langSelScreen = document.querySelector(".lang-selector-screen");

langSelScreen.addEventListener("click", () => {
  if (langSelScreen.classList.contains("overflow--hidden")) {
    langSelScreen.classList.remove("overflow--hidden");
  } else {
    langSelScreen.classList.add("overflow--hidden");
  }
});
