'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#lang') {
    document.body.classList.add('page__body--with-lang');
  } else {
    document.body.classList.remove('page__body--with-lang');
  }
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#help') {
    document.body.classList.add('page__body--with-help');
  } else {
    document.body.classList.remove('page__body--with-help');
  }
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#buy') {
    document.body.classList.add('page__body--with-buy');
  } else {
    document.body.classList.remove('page__body--with-buy');
  }
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#pay') {
    document.body.classList.add('page__body--with-pay');
  } else {
    document.body.classList.remove('page__body--with-pay');
  }
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#complete') {
    document.body.classList.add('page__body--with-complete');
  } else {
    document.body.classList.remove('page__body--with-complete');
  }
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#faq') {
    document.body.classList.add('page__body--with-faq');
  } else {
    document.body.classList.remove('page__body--with-faq');
  }
});

window.addEventListener('hashchange', () => {
  const langMenu = document.querySelector('.lang');

  if (window.location.hash === '#lang') {
    langMenu.classList.add('page__menu');
  } else {
    langMenu.classList.remove('page__menu');
  }
});

window.addEventListener('hashchange', () => {
  const faqMenu = document.querySelector('.faq');

  if (window.location.hash === '#faq') {
    faqMenu.classList.add('page__menu');
  } else {
    faqMenu.classList.remove('page__menu');
  }
});

window.addEventListener('hashchange', () => {
  const helpMenu = document.querySelector('.help');

  if (window.location.hash === '#help') {
    helpMenu.classList.add('page__menu');
  } else {
    helpMenu.classList.remove('page__menu');
  }
});

window.addEventListener('hashchange', () => {
  const buyMenu = document.querySelector('.buy');

  if (window.location.hash === '#buy') {
    buyMenu.classList.add('page__menu');
  } else {
    buyMenu.classList.remove('page__menu');
  }
});

window.addEventListener('hashchange', () => {
  const payMenu = document.querySelector('.pay');

  if (window.location.hash === '#pay') {
    payMenu.classList.add('page__menu');
  } else {
    payMenu.classList.remove('page__menu');
  }
});

window.addEventListener('hashchange', () => {
  const completeMenu = document.querySelector('.complete');

  if (window.location.hash === '#complete') {
    completeMenu.classList.add('page__menu');
  } else {
    completeMenu.classList.remove('page__menu');
  }
});

const form = document.querySelector('#form');

form.addEventListener('submit', onSubmit, false);

function onSubmit(event) {
  event.preventDefault();
  form.reset();
};
