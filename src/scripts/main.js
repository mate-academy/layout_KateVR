'use strict';

const page = document.documentElement;

const overlayVideoOpen = document.querySelector('.start-video__button');
const overlayVideoClose = document.querySelector('.video-overlay__button-close');
const overlayVideo = document.querySelector('.video-overlay');

overlayVideoOpen.addEventListener('click', () => {
  overlayVideo.style.display = "grid";
  page.style.overflow = 'hidden';
  page.scroll = "no";
})

overlayVideoClose.addEventListener('click', () => {
  overlayVideo.style.display = "none";
  page.style.overflow = 'scroll';
  page.scroll = "yes";
})
