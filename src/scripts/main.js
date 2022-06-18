'use strict';

window.addEventListener('hashchange', () => {
  const hash = window.location.hash;

  if (hash === '#menu' || hash === '#language' || hash === '#help') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

window.addEventListener('scroll', () => {
  if (document.documentElement.scrollTop > 1200) {
    document.querySelector('.home-arrow').classList.add('active');
  } else {
    document.querySelector('.home-arrow').classList.remove('active');
  }
});
