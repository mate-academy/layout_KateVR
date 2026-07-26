const purchaseForm = document.querySelector('#purchase-form');
const quantitySelect = document.querySelector('#quantity');
const purchasePrice = document.querySelector('#purchase-price');
const paymentQuantity = document.querySelector('#payment-quantity');
const paymentPrice = document.querySelector('#payment-price');
const nextStepButton = document.querySelector(
  '[data-next-step="2"]',
);
const countrySelect = document.querySelector('#country');

const productPrice = 1200;

const showStep = (stepNumber) => {
  const purchaseSteps = document.querySelectorAll(
    '[data-purchase-step]',
  );

  const progressSteps = document.querySelectorAll(
    '[data-step-button]',
  );

  purchaseSteps.forEach((step) => {
    const isCurrentStep =
      Number(step.dataset.purchaseStep) === stepNumber;

    step.hidden = !isCurrentStep;

    step.classList.toggle(
      'purchase__step--active',
      isCurrentStep,
    );
  });

  progressSteps.forEach((step) => {
    const isCurrentStep =
      Number(step.dataset.stepButton) === stepNumber;

    step.classList.toggle(
      'purchase-progress__step--active',
      isCurrentStep,
    );
  });
};

const updatePrice = () => {
  const quantity = Number(quantitySelect.value);
  const totalPrice = productPrice * quantity;

  purchasePrice.textContent = `${totalPrice}$`;
  paymentQuantity.textContent = quantity;
  paymentPrice.textContent = `${totalPrice}$`;
};

quantitySelect.addEventListener('change', updatePrice);

nextStepButton.addEventListener('click', () => {
  const firstStep = document.querySelector(
    '[data-purchase-step="1"]',
  );

  const requiredFields = firstStep.querySelectorAll(
    'input[required], select[required]',
  );

  const isFirstStepValid = [...requiredFields].every(
    (field) => field.reportValidity(),
  );

  if (!isFirstStepValid) {
    return;
  }

  if (countrySelect.value === 'choose-country') {
    countrySelect.focus();

    return;
  }

  showStep(2);

  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

purchaseForm.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!purchaseForm.reportValidity()) {
    return;
  }

  showStep(3);

  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

updatePrice();