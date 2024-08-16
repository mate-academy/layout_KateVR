"use strict";

const playButton = [...document.querySelectorAll(".play-button")];
const closeVideoScreen = document.querySelector(".close-video__button");
const videoScreen = document.querySelector(".video-container");

playButton[0].addEventListener("click", () => {
  videoScreen.classList.remove("hidden");
});

playButton[1].addEventListener("click", () => {
  videoScreen.classList.remove("hidden");
});

closeVideoScreen.addEventListener("click", () => {
  videoScreen.classList.add("hidden");
});
