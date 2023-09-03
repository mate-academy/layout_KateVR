'use strict';

const body = document.querySelector('#body');

// Language switcher

const langSelected = document.querySelector('#langMain');
const langMenu = document.querySelector('#langMenu');
const langs = document.querySelectorAll('.top-actions__langs-item');

langSelected.addEventListener('click', (event) => {
  langMenu.classList.toggle('top-actions__langs-container--show');
  event.stopPropagation();
});

langs.forEach(lang => {
  lang.addEventListener('click', () => {
    langSelected.innerHTML = lang.innerHTML;
    langMenu.classList.remove('top-actions__langs-container--show');
  });
});

window.onclick = (event) => {
  if (!event.target.matches('#langMain')) {
    if (langMenu.classList.contains('top-actions__langs-container--show')) {
      langMenu.classList.remove('top-actions__langs-container--show');
    };
  };
};

// Menu

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    body.classList.add('page__body--with-menu');

    window.addEventListener('resize', () => {
      if (window.innerWidth >= 1280) {
        window.location.hash = '#';
      }
    });
  } else {
    body.classList.remove('page__body--with-menu');
  }
});

// Tech info buttons

const techInfoBtns = document.querySelectorAll('.tech__button');

techInfoBtns.forEach(techBtn => {
  techBtn.addEventListener('click', () => {
    techBtn.classList.toggle('tech__button--active');
  });
});

// window resize check

window.addEventListener('resize', () => {
  if (window.innerWidth >= 1280) {
    techInfoBtns.forEach(techBtn => {
      techBtn.classList.remove('tech__button--active');
    });
  }

  if (window.innerWidth < 1280) {
    langMenu.classList.remove('top-actions__langs-container--show');
  }
});

//
