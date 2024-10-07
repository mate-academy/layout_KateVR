'use strict';

const page = document.documentElement;

const overlayVideoOpen = document.querySelectorAll('.start-video__button');
const overlayVideoClose = document.querySelector(
  '.video-overlay__button-close',
);
const overlayVideo = document.querySelector('.video-overlay');

/**
 * Make overlay with video visible, block scrolling the page under the overlay.
 */
overlayVideoOpen.forEach((element) => {
  element.addEventListener('click', () => {
    console.log(overlayVideoOpen);
    overlayVideo.style.display = 'grid';
    page.style.overflow = 'hidden';
    page.scroll = 'no';
  });
});

/**
 * Stop video and close overlay.
 */
overlayVideoClose.addEventListener('click', () => {
  overlayVideo.style.display = 'none';
  page.style.overflow = 'scroll';
  page.scroll = 'yes';
});

const dropdown = document.querySelector('.dropdown');
const dropdownTrigger = dropdown.querySelector('.dropdown__trigger');

dropdownTrigger.addEventListener('click', () => {
  dropdown.classList.toggle('dropdown--active');
});
