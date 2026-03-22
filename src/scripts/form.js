export function initForm(onSuccess) {
  const forms = document.querySelectorAll('#footer-form, #order-form');

  const validationRules = {
    'first-name': (value) => value.trim().length >= 2,
    'surname': (value) => value.trim().length >= 2,
    'name': (value) => value.trim().length >= 2,
    'email': (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
    'tel': (value) => /^[+]?[0-9]{10,15}$/.test(value.replace(/\s/g, '')),
    'address': (value) => value.trim().length >= 5,
  };

  function validateField(input) {
    const name = input.name;
    const value = input.value.trim();

    if (!input.hasAttribute('required') && value === '') {
      input.classList.remove('is-valid', 'is-invalid');

      return true;
    }

    let isValid = true;
    if (input.hasAttribute('required') && value === '') {
      isValid = false;
    } else if (validationRules[name]) {
      isValid = validationRules[name](value);
    }

    if (isValid) {
      input.classList.add('is-valid');
      input.classList.remove('is-invalid');
    } else {
      input.classList.add('is-invalid');
      input.classList.remove('is-valid');
    }

    return isValid;
  }

  forms.forEach(form => {
    form.setAttribute('novalidate', '');

    const inputs = form.querySelectorAll('.form__input');

    inputs.forEach(input => {
      input.addEventListener('blur', () => {
        if (input.value.trim() !== '') validateField(input);
      });

      input.addEventListener('input', () => {
        input.classList.remove('is-invalid');
      });
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      e.stopPropagation();

      let isFormValid = true;

      inputs.forEach(input => {
        if (input.hasAttribute('required')) {
          const valid = validateField(input);

          if (!valid) isFormValid = false;
        }
      });

      if (isFormValid) {
        if (onSuccess && typeof onSuccess === 'function') {
          onSuccess(form);
        }

        form.reset();
        inputs.forEach(i => i.classList.remove('is-valid', 'is-invalid'));

      } else {
        const firstError = form.querySelector('.is-invalid');

        firstError?.focus();
        firstError?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  });
}
