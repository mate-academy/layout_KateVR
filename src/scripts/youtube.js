'use strict';

const playBtn = document.querySelectorAll('.play-btn');
const ytVideo = document.querySelector('.yt-video');
const ytFrame = document.querySelector('.yt-video__iframe');
const ytVideoClose = document.querySelector('.yt-video__close');
const modalDesktopBg = document.querySelector('.modal-desktop-bg');

playBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    ytVideo.classList.add('yt-video--show');
    modalDesktopBg.classList.add('modal-desktop-bg--show');
  });
});

ytVideoClose.addEventListener('click', () => {
  ytVideo.classList.remove('yt-video--show');
  modalDesktopBg.classList.remove('modal-desktop-bg--show');
  // eslint-disable-next-line max-len
  ytFrame.contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
});
