'use strict';

const mobileHelpTrigger = document.querySelectorAll('.help-modal-trigger');
const help = document.querySelector('.help');
const helpClose = document.querySelectorAll('.help__close');
const modalDesktopBg = document.querySelector('.modal-desktop-bg');

mobileHelpTrigger.forEach(trigger => {
  trigger.addEventListener('click', () => {
    help.classList.add('help--show');
    modalDesktopBg.classList.add('modal-desktop-bg--show');
  });
});

helpClose.forEach(close => {
  close.addEventListener('click', () => {
    help.classList.remove('help--show');
    modalDesktopBg.classList.remove('modal-desktop-bg--show');
  });
});
