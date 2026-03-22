export function initPaymentForm(onSuccess) {
  const form = document.getElementById('pay-form');

  if (!form) return;

  const inputs = form.querySelectorAll('.pay__input, [data-card-part]');
  const cardFields = form.querySelectorAll('[data-card-part]');
  const hiddenCardInput = document.getElementById('card-number-full');
  const validationRules = {
    'card-number': (val) => val.length === 16,
    'holder-name': (val) => val.trim().split(' ').length >= 2,
    'cvv': (val) => /^\d{3}$/.test(val),
    'date': (val) => {
      const clean = val.replace(/\D/g, '');

      if (clean.length !== 4) return false;

      const mm = parseInt(clean.substring(0, 2));
      const yy = parseInt(clean.substring(2, 4));
      const curYear = new Date().getFullYear() % 100;
      const curMonth = new Date().getMonth() + 1;

      if (mm < 1 || mm > 12) return false;

      if (yy < 26 || yy > 50) return false;

      if (yy < curYear || (yy === curYear && mm < curMonth)) return false;

      return true;
    }
  };
  const visaIcon = form.querySelector('.pay__form-visa');
  const mastercardIcon = form.querySelector('.pay__form-mastercard');

  function validateField(input) {
    const name = input.name;
    const value = input.value.trim();
    const container = input.closest('.pay__card-number, .pay__form-date, .pay__form-cvv, .form__field');
    let isValid = true;

    if (input.hasAttribute('required') && (value === '' || (name === 'card-number' && value.length < 16))) {
      isValid = false;
    } else if (validationRules[name]) {
      isValid = validationRules[name](value);
    }

    if (isValid) {
      container?.classList.remove('is-invalid');
      container?.classList.add('is-valid');
      input.classList.add('is-valid');
      input.classList.remove('is-invalid');
    } else {
      container?.classList.add('is-invalid');
      container?.classList.remove('is-valid');
      input.classList.add('is-invalid');
      input.classList.remove('is-valid');
    }

    return isValid;
  }

  inputs.forEach(input => {
    input.addEventListener('focus', () => {
      const container = input.closest('.pay__card-number, .pay__form-date, .pay__form-cvv');

      container?.classList.remove('is-invalid');
    });
  });

  const dateInput = document.getElementById('date');

  dateInput.addEventListener('input', (e) => {
    let v = e.target.value.replace(/\D/g, '');

    if (v.length >= 2) v = v.substring(0, 2) + ' / ' + v.substring(2, 4);

    e.target.value = v;
  });

  cardFields.forEach((field, index) => {
    field.addEventListener('input', () => {
      field.value = field.value.replace(/\D/g, '');

      if (index === 0) {
        const firstDigit = field.value.substring(0, 1);

        visaIcon?.classList.remove('is-active');
        mastercardIcon?.classList.remove('is-active');

        if (firstDigit > 0 && firstDigit <= 4) {
          visaIcon?.classList.add('is-active');
        } else if (firstDigit >= 5 && firstDigit <= 9) {
          mastercardIcon?.classList.add('is-active');
        }
      }

      if (field.value.length === 4 && index < 3) cardFields[index + 1].focus();

      const full = Array.from(cardFields).map(f => f.value).join('');

      hiddenCardInput.value = full;

      field.closest('.pay__card-number').classList.remove('is-invalid');
    });
  });


  form.addEventListener('submit', (e) => {
  e.preventDefault();

  let isFormValid = true;

  inputs.forEach(input => {
    if (input.name) {
      const valid = validateField(input);

      if (!valid) isFormValid = false;
    }
  });

  const cardNumber = hiddenCardInput.value;

  if (cardNumber.length !== 16) {
    isFormValid = false;
    form.querySelector('.pay__card-number')?.classList.add('is-invalid');
  } else {
    form.querySelector('.pay__card-number')?.classList.remove('is-invalid');
    form.querySelector('.pay__card-number')?.classList.add('is-valid');
  }

  if (isFormValid) {
    if (onSuccess && typeof onSuccess === 'function') {
      onSuccess(form);
    }

    form.reset();

    document.querySelectorAll('.is-valid, .is-invalid').forEach(el =>
      el.classList.remove('is-valid', 'is-invalid')
    );
  }
});
}
