'use strict';

window.addEventListener('hashchange', () => {
    if (window.location.hash === '#Menu'
      || window.location.hash === '#Help'
      || window.location.hash === '#Lang') {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  });
  
  const form = document.getElementById('Myform');
  
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    form.reset();
  });