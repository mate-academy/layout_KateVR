'uise strict';

import { uiState } from './uiState';
import { syncOverlay } from './overlay';

const modals = document.querySelectorAll('.modal');
const openButtons = document.querySelectorAll('[data-modal]');
const closeButtons = document.querySelectorAll('.modal__close');
const helpLinks = document.querySelectorAll('.help__redirect');


export function setModals() {
  openButtons.forEach((button) => {
    button.addEventListener('click', () => {
      openModal(button.dataset.modal);
    });
  });

  closeButtons.forEach((button) =>
    button.addEventListener('click', closeModals),
  );

  configureHelpModalLinks();
}

function openModal(modalId) {
  const modal = document.getElementById(modalId);

  if (!modal) return;

  uiState.modalOpen = true;
  syncOverlay();

  modal.classList.add('modal--active');
}

export function closeModals() {
  uiState.modalOpen = false;
  syncOverlay();

  modals.forEach((modal) => {
    if (modal.classList.contains('modal--active')) {
      modal.classList.remove('modal--active');

      const iframe = modal.querySelector('iframe');

      if (iframe) {
        iframe.src = iframe.src;
      }
    }
  });
}

function configureHelpModalLinks() {
  helpLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      closeModals();
    });
  });
}


