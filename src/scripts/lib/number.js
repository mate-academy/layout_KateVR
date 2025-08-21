function number() {
  const amountElements = document.querySelectorAll('.product__amount');
  const numberBlocks = document.querySelectorAll('.number');
  const amountValue = parseInt(amountElements[0].textContent.replace('$', ''));

  numberBlocks.forEach(numberBlock => {
    numberBlock.addEventListener('click', (e) => {
      let generalQuantity = parseInt(numberBlock.querySelector('.number__quantity').textContent);

      if (e.target.closest('.number__decrease')) {
        if (generalQuantity > 1) {
          generalQuantity -= 1;
          updateAmount(-amountValue);
        }
      }

      if (e.target.closest('.number__increase')) {
        if (generalQuantity < 10) {
          generalQuantity += 1;
          updateAmount(amountValue);
        }
      }

      updateQuantities(generalQuantity);
      toggleLockClasses();
    });
  });

  function updateAmount(delta) {
    amountElements.forEach(amountEl => {
      const currentAmount = parseInt(amountEl.textContent.replace('$', ''));
      const newAmount = currentAmount + delta;
      amountEl.textContent = `${newAmount}$`;
    });
  }

  function updateQuantities(newQuantity) {
    numberBlocks.forEach(numberBlock => {
      numberBlock.querySelector('.number__quantity').textContent = newQuantity;
    });
  }

  function toggleLockClasses() {
    numberBlocks.forEach(numberBlock => {
      const quantity = parseInt(numberBlock.querySelector('.number__quantity').textContent);

      if (quantity <= 1) {
        numberBlock.querySelector('.number__decrease').classList.add('_lock');
      } else {
        numberBlock.querySelector('.number__decrease').classList.remove('_lock');
      }

      if (quantity >= 10) {
        numberBlock.querySelector('.number__increase').classList.add('_lock');
      } else {
        numberBlock.querySelector('.number__increase').classList.remove('_lock');
      }
    });
  }

  toggleLockClasses();
}

number();
