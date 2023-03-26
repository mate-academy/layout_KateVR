'use strict';

const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-modal]');
const overlay = document.getElementById('overlay');

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget);

    openModal(modal);
  });
});

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal--active');

  modals.forEach(modal => {
    closeModal(modal);
  });
});

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');

    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal === null) {
    // eslint-disable-next-line no-useless-return
    return;
  } else {
    modal.classList.add('modal--active');
    overlay.classList.add('modal__overlay--active');
  }
}

function closeModal(modal) {
  if (modal === null) {
    // eslint-disable-next-line no-useless-return
    return;
  } else {
    modal.classList.remove('modal--active');
    overlay.classList.remove('modal__overlay--active');
  }
}
