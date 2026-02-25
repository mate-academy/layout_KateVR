export function initForm() {
  const buyElem = document.querySelector('.buy');
  const completeButton = buyElem.querySelector('.complete__button');

  const placeOrderElem = buyElem.querySelector('.place-order');
  const placeOrderForm = placeOrderElem.querySelector('.form');

  const payElem = buyElem.querySelector('.pay');
  const payForm = payElem.querySelector('.form');

  placeOrderForm.addEventListener('submit', (e) => {
    e.preventDefault();

    buyElem.classList.add('buy--pay');
    setActiveStep(1);

    placeOrderForm.reset();
  });

  payForm.addEventListener('submit', (e) => {
    e.preventDefault();

    buyElem.classList.add('buy--complete');
    setActiveStep(2);

    payForm.reset();
  });

  completeButton.addEventListener('click', () => {
    if (buyElem.classList.contains('buy--complete')) {
      buyElem.classList.remove('buy--complete');
    }

    if (buyElem.classList.contains('buy--pay')) {
      buyElem.classList.remove('buy--pay');
    }

    setActiveStep(0);
  });
}

export function setActiveStep(stepIndex = 0) {
  const stepsElem = document.querySelector('[data-steps="steps"]');
  const stepsTopElem = document.querySelector('[data-steps="top-steps"]');

  const steps = stepsElem.querySelectorAll('.checkout-steps__step');
  const lines = stepsElem.querySelectorAll('.checkout-steps__line');

  const stepsTop = stepsTopElem.querySelectorAll('.checkout-steps__step');

  [...steps].forEach((step, index) => {
    step.classList.toggle(
      'checkout-steps__step--active',
      index === stepIndex
    );
  });

  [...stepsTop].forEach((step, index) => {
    step.classList.toggle(
      'checkout-steps__step--active',
      index === stepIndex
    );
  });

  [...lines].forEach((line, index) => {
    line.classList.toggle(
      'checkout-steps__line--active',
      index === stepIndex
    );
  });
}

