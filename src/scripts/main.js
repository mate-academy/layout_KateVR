'use strict';

function redirectToOtherPage(targetClass, destination) {
  document.body.addEventListener('click', function(event) {
    if (event.target.classList.contains(targetClass)) {
      window.location.href = destination;
    }
  });
}

function redirectToOtherForm(formClass, destination) {
  document.body.addEventListener('click', function(event) {
    if (event.target.classList.contains('place-order__button')) {
      const form = document.querySelector(formClass);

      if (form.checkValidity()) {
        window.location.href = destination;
      }
    }
  });
}

redirectToOtherPage('buy-button', '#place-order');
redirectToOtherPage('buyVideo', '#video');
redirectToOtherPage('complete-id', '#');
redirectToOtherPage('complete__button', '#');
redirectToOtherForm('.pay__forms', '#pay');
redirectToOtherForm('.complete__forms', '#complete');
