function bankCard() {
  const cardBlock = document.querySelector('.aside-buy-pay__card');
  const cardInputs = cardBlock.querySelectorAll('.aside-buy-pay__input');

  cardInputs.forEach((input, index) => {
    input.addEventListener('input', (e) => {
      const value = e.target.value;

      e.target.value = value.replace(/\D/g, '');

      if (e.target.value.length === e.target.maxLength) {
        const nextInput = cardInputs[index + 1];
        if (nextInput) {
          nextInput.focus();
        }
      }
    });

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Tab' && e.shiftKey) {
        e.preventDefault();
        const prevInput = cardInputs[index - 1];
        if (prevInput) {
          prevInput.focus();
        }
      }
    });
  });
}

function expiration() {
  const expiration = document.getElementById('input-expiration');

  expiration.addEventListener('input', (e) => {
    let value = e.target.value;

    value = value.replace(/[^\d]/g, '');

    if (value.length >= 3) {
      value = value.slice(0, 2) + ' / ' + value.slice(2, 4);
    } else if (value.length >= 2) {
      value = value.slice(0, 2) + ' / ';
    }

    e.target.value = value;
  });

  expiration.addEventListener('keydown', (e) => {
    let value = e.target.value;

    if (e.key === 'Backspace' && value.endsWith(' / ')) {
      e.target.value = value.slice(0, -3);
      e.preventDefault();
    }
  });
}

bankCard();
expiration();

const cardButton = document.querySelector('.aside-buy-pay__card-type');

cardButton.addEventListener('click', (e) => {
  e.preventDefault();

  cardButton.classList.toggle('_hide-card');
})
