'use strict';

function redirectTo(hash) {
  window.location.href = `#${hash}`;
}

document.body.addEventListener('click', function(event) {
  const target = event.target;

  if (target.classList.contains('buy-button')) {
    redirectTo('place-order');
  } else if (target.classList.contains('buyVideo')) {
    redirectTo('video');
  } else if (target.classList.contains('complete-id')) {
    redirectTo('');
  } else if (target.classList.contains('complete__button')) {
    redirectTo('');
  } else if (target.classList.contains('place-order__button')) {
    const form = document.querySelector('.place-order__forms');

    if (form.checkValidity()) {
      redirectTo('pay');
    }
  } else if (target.classList.contains('pay__button')) {
    const form = document.querySelector('.pay__forms');

    if (form.checkValidity()) {
      redirectTo('complete');
    }
  }
});
