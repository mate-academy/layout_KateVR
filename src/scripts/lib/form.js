function checkInputStatus() {
  const fieldsContainers = document.querySelectorAll('.form__fields');

  fieldsContainers.forEach(container => {
    const inputs = container.querySelectorAll('.form__input');

    inputs.forEach(input => {
      input.addEventListener('focus', () => {
        input.classList.add('_foc');
      });

      input.addEventListener('blur', () => {
        if (!input.value.trim()) {
          input.classList.remove('_foc');
        }
      });
    });
  });
}

checkInputStatus();

const sectionOrder = {
  btn1: '.aside-buy__step-btn--order',
  btn2: '.aside-buy__step-btn--pay',
  sec1: '.aside-buy-order',
  sec2: '.aside-buy-pay'
}

const sectionPay = {
  btn1: '.aside-buy__step-btn--pay',
  btn2: '.aside-buy__step-btn--complete',
  sec1: '.aside-buy-pay',
  sec2: '.aside-buy-complete'
}

function switchSection(section) {
  const btnFirst = document.querySelector(section.btn1);
  const btnSecont = document.querySelector(section.btn2);
  const secFirst = document.querySelector(section.sec1);
  const secSecond = document.querySelector(section.sec2);

  btnFirst.classList.remove('aside-buy__step-btn--active');
  btnFirst.classList.add('aside-buy__step-btn--lock');

  btnSecont.classList.remove('aside-buy__step-btn--lock');
  btnSecont.classList.add('aside-buy__step-btn--active');

  secFirst.classList.add('_hidden-section');
  secSecond.classList.remove('_hidden-section');

  if (window.updateDotPosition) {
    window.updateDotPosition();
  }
}

function validation(validForm) {
  const formMessage = document.getElementById(validForm);
  const bankCard = document.querySelectorAll('.aside-buy-pay__card > input');

  formMessage.addEventListener('submit', formSend);

  async function formSend(e) {
    e.preventDefault();

    let error = formValidate(formMessage);

    if (!error) {
      if (validForm === 'aside-buy-order-form') {
        switchSection(sectionOrder);

        if (window.updateDotPosition) {
          window.updateDotPosition();
        }
      }

      if (validForm === 'aside-buy-pay-form') {
        switchSection(sectionPay);

        if (window.updateDotPosition) {
          window.updateDotPosition();
        }
      }
    }
  }

  function formValidate(form) {
    let error = 0;
    const formReq = form.querySelectorAll('._req');

    formReq.forEach(input => {
      formRemoveError(input);

      if (input.classList.contains('_min')) {
        if (!checkLength(input)) {
          formAddError(input, 'empty');
          error++;
        }
      }

      if (input.classList.contains('_email')) {
        if (input.value.trim() === '') {
          formAddError(input, 'empty');
          error++;
        } else if (emailTest(input)) {
          formAddError(input, 'format');
          error++;
        }
      } else {
        if (input.value.trim() === '') {
          formAddError(input, 'empty');
          error++;
        }
      }

      bankCard.forEach(inp => {
        inp.addEventListener('click', (e) => {
          bankCard[0].classList.remove('_error');
        })

        if (inp.classList.contains('_error')) {
          if (!bankCard[0].classList.contains('_error')) {
            bankCard[0].style.borderBottom = '1px solid #2f2f2f';
          }

          bankCard[0].classList.add('_error');
        }
      })

      input.addEventListener('focus', function () {
        formRemoveError(input);
      });
    });

    return error;
  }

  function formAddError(input, type = '') {
    const errorContainer = input.closest('.form__field');
    const emptyError = errorContainer.querySelector('.empty-error');
    const formatError = errorContainer.querySelector('.format-error');

    input.classList.add('_error');

    if (type === 'empty' && emptyError) {
      emptyError.style.display = 'block';
      if (formatError) formatError.style.display = 'none';
    } else if (type === 'format' && formatError) {
      formatError.style.display = 'block';
      if (emptyError) emptyError.style.display = 'none';
    }
  }

  function formRemoveError(input) {
    const errorContainer = input.closest('.form__field');
    const emptyError = errorContainer.querySelector('.empty-error');
    const formatError = errorContainer.querySelector('.format-error');

    input.classList.remove('_error');
    if (emptyError) emptyError.style.display = 'none';
    if (formatError) formatError.style.display = 'none';
  }

  function emailTest(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
  }

  function checkLength(input) {
    const minLength = parseInt(input.getAttribute('maxlength'), 10) || 0;
    return input.value.trim().length >= minLength;
  }
}

validation('main-form');
validation('aside-buy-order-form');
validation('aside-buy-pay-form');
