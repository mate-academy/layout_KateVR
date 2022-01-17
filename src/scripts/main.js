'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu'
    || window.location.hash === '#lang'
    || window.location.hash === '#faq'
    || window.location.hash === '#help') {
    document.body.classList.add('page__body--window-active');
  } else {
    document.body.classList.remove('page__body--window-active');
  }
});

document.querySelector('#contact').addEventListener('submit',
  function(event) {
    event.preventDefault();

    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('tel').value = '';
    document.getElementById('message').value = '';
  }
);
