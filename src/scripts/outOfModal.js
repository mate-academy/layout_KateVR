'use strict';

const modalDesktopBg = document.querySelector('.modal-desktop-bg');
const faq = document.querySelector('.faq');
const help = document.querySelector('.help');
const ytVideo = document.querySelector('.yt-video');
const ytFrame = document.querySelector('.yt-video__iframe');

modalDesktopBg.addEventListener('click', () => {
  faq.classList.remove('faq--show');
  help.classList.remove('help--show');
  modalDesktopBg.classList.remove('modal-desktop-bg--show');
  ytVideo.classList.remove('yt-video--show');
  // eslint-disable-next-line max-len
  ytFrame.contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
});
