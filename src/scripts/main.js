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

document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.contact__forms');
  // eslint-disable-next-line no-shadow
  const inputs = form.querySelectorAll('.contact__input, .contact__textarea');

  inputs.forEach(input => {
    input.addEventListener('input', function() {
      if (this.type === 'number') {
        if (this.value === '' || !isNaN(this.value)) {
          this.classList.remove('invalid');
        } else {
          this.classList.add('invalid');
        }
      } else if (this.value === '' || this.checkValidity()) {
        this.classList.remove('invalid');
      } else {
        this.classList.add('invalid');
      }
    });
  });

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    let isValid = true;

    inputs.forEach(input => {
      if (input.type === 'number') {
        if (input.value !== '' && isNaN(input.value)) {
          isValid = false;
          input.classList.add('invalid');
        } else {
          input.classList.remove('invalid');
        }
      } else if (input.value !== '' && !input.checkValidity()) {
        isValid = false;
        input.classList.add('invalid');
      } else {
        input.classList.remove('invalid');
      }
    });

    if (isValid) {
      form.reset();
      inputs.forEach(input => input.classList.remove('invalid'));
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.pay__forms');
  // eslint-disable-next-line max-len, no-shadow
  const inputs = form.querySelectorAll('.pay__card-number, .pay__card-number--2, .pay__card-number--3, .pay__card-number--4, .pay__card-holder-name, .pay__date, .pay__card-cvv');

  inputs.forEach(input => {
    input.addEventListener('input', function() {
      if (this.type === 'number') {
        if (this.value === '' || !isNaN(this.value)) {
          this.classList.remove('invalid');
        } else {
          this.classList.add('invalid');
        }
      } else if (this.value === '' || this.checkValidity()) {
        this.classList.remove('invalid');
      } else {
        this.classList.add('invalid');
      }
    });
  });

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    let isValid = true;

    inputs.forEach(input => {
      if (input.type === 'number') {
        if (input.value !== '' && isNaN(input.value)) {
          isValid = false;
          input.classList.add('invalid');
        } else {
          input.classList.remove('invalid');
        }
      } else if (input.value !== '' && !input.checkValidity()) {
        isValid = false;
        input.classList.add('invalid');
      } else {
        input.classList.remove('invalid');
      }
    });

    if (isValid) {
      form.reset();
      inputs.forEach(input => input.classList.remove('invalid'));
    }
  });
});

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  input.addEventListener('blur', () => {
    input.classList.add('blurred');
  });
}
