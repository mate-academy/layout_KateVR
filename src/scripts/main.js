"use strict";

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
