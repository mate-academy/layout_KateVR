'use strict';

import { openModal, closeModal } from './modal.js';

/**
 * Order Steps Module
 * Handles multi-step modal navigation, form validation, and price synchronization.
 */
export const initOrderSteps = () => {
  const modal = document.getElementById('order-modal');
  if (!modal) return;

  const stepsNav = modal.querySelectorAll('.order-modal__step');
  const screens = modal.querySelectorAll('.order-modal__screen');

  const formStep1 = document.getElementById('form-order-step-1');
  const formStep2 = document.getElementById('form-order-step-2');

  const qtyStep1 = document.getElementById('order-quantity');
  const qtyStep2 = document.getElementById('order-quantity-pay');
  const priceStep1 = document.getElementById('order-price');
  const priceStep2 = document.getElementById('order-price-pay');

  const UNIT_PRICE = 1200;

  // Sync quantity and total price across both steps
  const syncQuantity = sourceSelect => {
    const value = sourceSelect.value;
    if (qtyStep1) qtyStep1.value = value;
    if (qtyStep2) qtyStep2.value = value;

    const total = `${UNIT_PRICE * Number(value)}$`;
    if (priceStep1) priceStep1.textContent = total;
    if (priceStep2) priceStep2.textContent = total;
  };

  if (qtyStep1)
    qtyStep1.addEventListener('change', () => syncQuantity(qtyStep1));
  if (qtyStep2)
    qtyStep2.addEventListener('change', () => syncQuantity(qtyStep2));

  let maxStepReached = 1;

  const goToStep = stepNumber => {
    maxStepReached = Math.max(maxStepReached, Number(stepNumber));

    stepsNav.forEach(step => {
      const stepNum = Number(step.dataset.stepIndicator);
      step.classList.toggle('is-active', stepNum === Number(stepNumber));
      step.classList.toggle('is-reachable', stepNum <= maxStepReached);
    });

    screens.forEach(screen => {
      screen.classList.toggle(
        'is-active',
        screen.dataset.step === String(stepNumber),
      );
    });
  };

  // Step navigation: allow moving only to already reached steps
  stepsNav.forEach(step => {
    step.addEventListener('click', () => {
      const target = Number(step.dataset.stepIndicator);
      if (target <= maxStepReached) {
        goToStep(target);
      }
    });
  });

  // Initialize "Buy Now" triggers
  document.querySelectorAll('[data-action="buy-now"]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      openModal(modal);
      goToStep(1);
    });
  });

  // Form Step 1 submission
  if (formStep1) {
    formStep1.addEventListener('submit', e => {
      e.preventDefault();
      if (!formStep1.checkValidity()) {
        formStep1.reportValidity();
        return;
      }
      goToStep(2);
    });
  }

  // Form Step 2 submission
  if (formStep2) {
    formStep2.addEventListener('submit', e => {
      e.preventDefault();
      if (!formStep2.checkValidity()) {
        formStep2.reportValidity();
        return;
      }
      // TODO: Implement API submission (e.g., fetch('/api/order', ...))
      goToStep(3);
    });
  }

  // Back to home action
  const backHomeBtn = modal.querySelector('[data-action="back-home"]');
  if (backHomeBtn) {
    backHomeBtn.addEventListener('click', () => {
      closeModal(modal);
      if (formStep1) formStep1.reset();
      if (formStep2) formStep2.reset();

      maxStepReached = 1; // CRITICAL: Reset progress tracker for a fresh start
      goToStep(1);

      document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Initialize modal at step 1
  goToStep(1);
};
