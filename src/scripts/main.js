'use strict';

const body = document.querySelector('#body');

const langSelected = document.querySelector('#langMain');
const langMenu = document.querySelector('#langMenu');
const langs = document.querySelectorAll('.top-actions__langs-item');

const moreBtn = document.querySelector('#more-btn');
const moreSection = document.querySelector('#more');

// Language switcher

langSelected.addEventListener('click', (e) => {
  langMenu.classList.toggle('top-actions__langs-container--show');
  e.stopPropagation();
});

langs.forEach(lang => {
  lang.addEventListener('click', () => {
    langSelected.innerHTML = lang.innerHTML;
    langMenu.classList.remove('top-actions__langs-container--show');
  });
});

window.onclick = function(event) {
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
  } else {
    body.classList.remove('page__body--with-menu');
  }
});

// More Section

moreBtn.addEventListener('click', (e) => {
  moreSection.classList.toggle('more--active');
  e.stopPropagation();
});
