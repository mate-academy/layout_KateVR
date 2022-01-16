'use strict';

document.querySelector('#contact').addEventListener('submit',
  function(event) {
    event.preventDefault();

    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('tel').value = '';
    document.getElementById('message').value = '';
  }
);
