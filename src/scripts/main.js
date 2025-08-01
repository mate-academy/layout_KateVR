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
 * Stop an iframe or HTML5 <video> from playing
 * @param  {Element} element The element that contains the video
 */
var stopVideo = function (element) {
  var iframe = element.querySelector('iframe');
  var video = element.querySelector('video');
  if (iframe) {
    var iframeSrc = iframe.src;
    iframe.src = iframeSrc;
  }
  if (video) {
    video.pause();
  }
};

/**
 * Stop video and close overlay.
 */
overlayVideoClose.addEventListener('click', () => {
  stopVideo(overlayVideo);
  overlayVideo.style.display = 'none';
  page.style.overflow = 'scroll';
  page.scroll = 'yes';
});

const dropdown = document.querySelector('.dropdown');
const dropdownTrigger = dropdown.querySelector('.dropdown__trigger');

dropdownTrigger.addEventListener('click', () => {
  dropdown.classList.toggle('dropdown--active');
});
