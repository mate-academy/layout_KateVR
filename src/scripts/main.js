'use strict';

// const form = document.querySelector('#form');

// function submit(event) {
//   event.preventDefault();
//   form.reset();
// }

// form.addEventListener('submit', submit);

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menuR' || window.location.hash
  === '#menuX2' || window.location.hash
  === '#LANGUAGE' | window.location.hash === '#menuH') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
