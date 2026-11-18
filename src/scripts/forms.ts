export const forms = () => {
  const form1 = document.getElementById('form-1') as HTMLFormElement;

  form1.addEventListener('submit', (event) => {
    event.preventDefault();

    const inputs = form1.querySelectorAll(
      'input, textarea',
    ) as NodeListOf<HTMLInputElement>;

    let error = false;
    inputs.forEach((input) => {
      if (!input.required) {
        return;
      }

      if (input.name === 'name') {
        if (input.value.trim() === '') {
          input.parentElement.setAttribute('data-error', '');
          input.parentElement.querySelector('label').textContent =
            'Please, fill your name*';
          error = true;
          input.addEventListener('focus', () => {
            input.parentElement.removeAttribute('data-error');
            input.parentElement.querySelector('label').textContent =
              input.parentElement.getAttribute('data-text');
          });
        }
      }

      if (input.name === 'email') {
        if (input.value.trim() === '') {
          input.parentElement.setAttribute('data-error', '');
          input.parentElement.querySelector('label').textContent =
            'Please, fill your email*';
          error = true;
          input.addEventListener('focus', () => {
            input.parentElement.removeAttribute('data-error');
            input.parentElement.querySelector('label').textContent =
              input.parentElement.getAttribute('data-text');
          });
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
          input.parentElement.setAttribute('data-error', '');
          input.parentElement.querySelector('label').textContent =
            'Please, fill correct email*';
          error = true;
          input.addEventListener('focus', () => {
            input.parentElement.removeAttribute('data-error');
            input.parentElement.querySelector('label').textContent =
              input.parentElement.getAttribute('data-text');
          });
        }
      }

      if (input.name === 'phone') {
        if (input.value.trim() === '') {
          input.parentElement.setAttribute('data-error', '');
          input.parentElement.querySelector('label').textContent =
            'Please, fill your phone*';
          error = true;
          input.addEventListener('focus', () => {
            input.parentElement.removeAttribute('data-error');
            input.parentElement.querySelector('label').textContent =
              input.parentElement.getAttribute('data-text');
          });
        } else if (!/^\+?[0-9\s\-()]{7,20}$/.test(input.value)) {
          input.parentElement.setAttribute('data-error', '');
          input.parentElement.querySelector('label').textContent =
            'Please, fill correct phone*';
          error = true;
          input.addEventListener('focus', () => {
            input.parentElement.removeAttribute('data-error');
            input.parentElement.querySelector('label').textContent =
              input.parentElement.getAttribute('data-text');
          });
        }
      }

      if (input.name === 'message') {
        if (input.value.trim() === '') {
          input.parentElement.setAttribute('data-error', '');
          input.parentElement.querySelector('label').textContent =
            'Please, fill your massage*';
          error = true;
          input.addEventListener('focus', () => {
            input.parentElement.removeAttribute('data-error');
            input.parentElement.querySelector('label').textContent =
              input.parentElement.getAttribute('data-text');
          });
        }
      }
    });

    if (!error) {
      form1.reset();
    }
  });

  const form2 = document.getElementById('form-2') as HTMLFormElement;

  form2.addEventListener('submit', (event) => {
    event.preventDefault();

    const inputs = form2.querySelectorAll(
      'input, textarea',
    ) as NodeListOf<HTMLInputElement>;

    let error = false;
    inputs.forEach((input) => {
      if (!input.required) {
        return;
      }

      if (input.name === 'name') {
        if (input.value.trim() === '') {
          input.parentElement.setAttribute('data-error', '');
          input.parentElement.querySelector('label').textContent =
            'Please, fill your name*';
          error = true;
          input.addEventListener('focus', () => {
            input.parentElement.removeAttribute('data-error');
            input.parentElement.querySelector('label').textContent =
              input.parentElement.getAttribute('data-text');
          });
        }
      }

      if (input.name === 'adress') {
        if (input.value.trim() === '') {
          input.parentElement.setAttribute('data-error', '');
          input.parentElement.querySelector('label').textContent =
            'Please, fill your adress*';
          error = true;
          input.addEventListener('focus', () => {
            input.parentElement.removeAttribute('data-error');
            input.parentElement.querySelector('label').textContent =
              input.parentElement.getAttribute('data-text');
          });
        }
      }

      if (input.name === 'email') {
        if (input.value.trim() === '') {
          input.parentElement.setAttribute('data-error', '');
          input.parentElement.querySelector('label').textContent =
            'Please, fill your email*';
          error = true;
          input.addEventListener('focus', () => {
            input.parentElement.removeAttribute('data-error');
            input.parentElement.querySelector('label').textContent =
              input.parentElement.getAttribute('data-text');
          });
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
          input.parentElement.setAttribute('data-error', '');
          input.parentElement.querySelector('label').textContent =
            'Please, fill correct email*';
          error = true;
          input.addEventListener('focus', () => {
            input.parentElement.removeAttribute('data-error');
            input.parentElement.querySelector('label').textContent =
              input.parentElement.getAttribute('data-text');
          });
        }
      }

      if (input.name === 'phone') {
        if (input.value.trim() === '') {
          input.parentElement.setAttribute('data-error', '');
          input.parentElement.querySelector('label').textContent =
            'Please, fill your phone*';
          error = true;
          input.addEventListener('focus', () => {
            input.parentElement.removeAttribute('data-error');
            input.parentElement.querySelector('label').textContent =
              input.parentElement.getAttribute('data-text');
          });
        } else if (!/^\+?[0-9\s\-()]{7,20}$/.test(input.value)) {
          input.parentElement.setAttribute('data-error', '');
          input.parentElement.querySelector('label').textContent =
            'Please, fill correct phone*';
          error = true;
          input.addEventListener('focus', () => {
            input.parentElement.removeAttribute('data-error');
            input.parentElement.querySelector('label').textContent =
              input.parentElement.getAttribute('data-text');
          });
        }
      }

      if (input.name === 'message') {
        if (input.value.trim() === '') {
          input.parentElement.setAttribute('data-error', '');
          input.parentElement.querySelector('label').textContent =
            'Please, fill your massage*';
          error = true;
          input.addEventListener('focus', () => {
            input.parentElement.removeAttribute('data-error');
            input.parentElement.querySelector('label').textContent =
              input.parentElement.getAttribute('data-text');
          });
        }
      }
    });

    if (!error) {
      form2.reset();

      const buy = form2.closest('.buy');
      if (buy.classList.contains('buy--value-1')) {
        buy.classList.remove('buy--value-1');
        buy.classList.add('buy--value-2');
      }
    }
  });

  const payForm = () => {
    const brandBox = document.getElementById('cardBrand');

    function detectCardType(number) {
      const cleaned = number.replace(/\D/g, '');

      if (/^4/.test(cleaned)) {
        return 'visa';
      }

      if (
        /^(5[1-5])/.test(cleaned) ||
        /^(222[1-9]|22[3-9]\d|2[3-6]\d{2}|27[01]\d|2720)/.test(cleaned)
      ) {
        return 'mastercard';
      }

      return null;
    }

    const cardInputs = document.querySelectorAll(
      '#paymentForm .form__card-number .form__field-input',
    ) as NodeListOf<HTMLInputElement>;
    const expiryInput = document.getElementById(
      'paycard-input-date',
    ) as HTMLInputElement;
    const form = document.getElementById('paymentForm') as HTMLFormElement;
    const paycardInputCVV = document.getElementById(
      'paycard-input-CVV',
    ) as HTMLInputElement;
    const paycardInputName = document.getElementById(
      'paycard-input-name',
    ) as HTMLInputElement;

    cardInputs.forEach((input, index) => {
      input.addEventListener('input', (e) => {
        let value = (e.target as HTMLInputElement).value.replace(/\D/g, '');
        (e.target as HTMLInputElement).value = value;

        if (index === 0) {
          const cardType = detectCardType(value);

          if (cardType === 'mastercard') {
            brandBox.classList.add('form__card-image--mastercard');
            brandBox.classList.remove('form__card-image--visa');
          } else if (cardType === 'visa') {
            brandBox.classList.remove('form__card-image--mastercard');
            brandBox.classList.add('form__card-image--visa');
          } else {
            brandBox.classList.remove('form__card-image--mastercard');
            brandBox.classList.remove('form__card-image--visa');
          }
        }

        if (value.length === 4 && index < cardInputs.length - 1) {
          cardInputs[index + 1].focus();
        }
      });

      input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && input.value === '' && index > 0) {
          cardInputs[index - 1].focus();
        }
      });

      input.addEventListener('paste', (e) => {
        e.preventDefault();

        const pasted = e.clipboardData
          .getData('text')
          .replace(/\D/g, '')
          .slice(0, 16);

        cardInputs.forEach((field, i) => {
          field.value = pasted.slice(i * 4, i * 4 + 4);
        });

        const nextEmpty = [...cardInputs].find(
          (input) => input.value.length < 4,
        );
        if (nextEmpty) {
          nextEmpty.focus();
        } else {
          cardInputs[3].focus();
        }
      });
    });

    expiryInput.addEventListener('input', (e) => {
      let value = (e.target as HTMLInputElement).value
        .replace(/\D/g, '')
        .slice(0, 4);

      if (value.length >= 3) {
        value = value.slice(0, 2) + '/' + value.slice(2);
      }

      (e.target as HTMLInputElement).value = value;
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const cardNumber = [...cardInputs].map((input) => input.value).join('');
      let error = false;

      const data = expiryInput.value.trim();
      const cvv = paycardInputCVV.value.trim();
      const name = paycardInputName.value.trim();

      if (name.length < 2) {
        paycardInputName.parentElement.setAttribute('data-error', '');
        const label = paycardInputName.parentElement.querySelector(
          'label',
        ) as HTMLLabelElement;
        label.textContent = 'Please, fill your name';
        error = true;

        paycardInputName.addEventListener('focus', () => {
          label.textContent = label.getAttribute('data-text');
          paycardInputName.parentElement.removeAttribute('data-error');
        });
      }

      if (cvv.length < 3) {
        paycardInputCVV.parentElement.setAttribute('data-error', '');
        const label = paycardInputCVV.parentElement.querySelector(
          'label',
        ) as HTMLLabelElement;
        label.textContent = 'Please, fill your CVV';
        error = true;

        paycardInputCVV.addEventListener('focus', () => {
          label.textContent = label.getAttribute('data-text');
          paycardInputCVV.parentElement.removeAttribute('data-error');
        });
      }

      if (data.length < 5) {
        expiryInput.parentElement.setAttribute('data-error', '');
        const label = expiryInput.parentElement.querySelector(
          'label',
        ) as HTMLLabelElement;
        label.textContent = 'Please, fill your date';
        error = true;

        expiryInput.addEventListener('focus', () => {
          label.textContent = label.getAttribute('data-text');
          expiryInput.parentElement.removeAttribute('data-error');
        });
      }

      if (cardNumber.length !== 16) {
        const label = form.querySelector(
          '.form__card-number .form__field-label',
        );
        const fields = form.querySelectorAll('.form__card-number .form__field');

        fields.forEach((field) => {
          field.setAttribute('data-error', '');
        });

        label.textContent = 'Please, fill your number card';
        error = true;

        const inputs = form.querySelectorAll(
          '.form__card-number .form__field-input',
        );

        inputs.forEach((input) => {
          input.addEventListener('focus', () => {
            fields.forEach((field) => {
              field.removeAttribute('data-error');
            });

            label.textContent = label.getAttribute('data-text');
          });
        });
      }

      if (!error) {
        form.reset();

        const buy = form2.closest('.buy');
        if (buy.classList.contains('buy--value-2')) {
          buy.classList.remove('buy--value-2');
          buy.classList.add('buy--value-3');
        }
      }
    });
  };

  payForm();
};
