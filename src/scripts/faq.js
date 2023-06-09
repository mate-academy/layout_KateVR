'use strict';

const modalDesktopBg = document.querySelector('.modal-desktop-bg');
const banner = document.querySelector('.banner');
const faq = document.querySelector('.faq');
const faqClose = document.querySelectorAll('.faq__close');

banner.addEventListener('click', (event) => {
  const target = event.target;

  if (target.classList.contains('faq-modal-trigger')) {
    faq.classList.add('faq--show');
    modalDesktopBg.classList.add('modal-desktop-bg--show');
  }
});

faqClose.forEach(close => {
  close.addEventListener('click', () => {
    faq.classList.remove('faq--show');
    modalDesktopBg.classList.remove('modal-desktop-bg--show');
  });
});
