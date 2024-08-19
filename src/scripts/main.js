"use strict";

const body = document.querySelector(".page__body");
const menuOpenButton = document.querySelector(".menu-open-button");
const playButton = [...document.querySelectorAll(".play-button")];
const closeVideoScreen = document.querySelector(".close-video__button");
const videoScreen = document.querySelector(".video-container");

playButton[0].addEventListener("click", () => {
  videoScreen.classList.remove("hidden");
  body.classList.add("overflow--hidden");
  menuOpenButton.classList.add("hidden");
});

playButton[1].addEventListener("click", () => {
  videoScreen.classList.remove("hidden");
  body.classList.add("overflow--hidden");
  menuOpenButton.classList.add("hidden");
});

closeVideoScreen.addEventListener("click", () => {
  videoScreen.classList.add("hidden");
  body.classList.remove("overflow--hidden");
  menuOpenButton.classList.remove("hidden");
});
