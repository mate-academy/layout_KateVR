'use strict';

const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-modal]');
const overlay = document.getElementById('overlay');

const faqModal = document.getElementById('faq');
const faqModalLink = document.querySelector('.help__button-close');

const allModals = document.querySelectorAll('.modal');

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
  modal.classList.add('modal--active');
  overlay.classList.add('modal__overlay--active');
}

function closeModal(modal) {
  const iframe = document.querySelector('iframe');

  if (modal === null) {
    // eslint-disable-next-line no-useless-return
    return;
  } else {
    const link = modal.querySelector('.video__link');
    const button = modal.querySelector('.video__button');

    modal.classList.remove('modal--active');
    overlay.classList.remove('modal__overlay--active');

    if (iframe) {
      iframe.outerHTML = '';
    }

    if (link) {
      link.style.display = 'block';
    }

    if (button) {
      button.style.display = 'block';
    }
  }
}

faqModalLink.addEventListener('click', () => {
  if (faqModal.classList.contains('modal--active')) {
    overlay.classList.add('modal__overlay--active');
  };
});

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    for (let i = 0; i < allModals.length; i++) {
      if (allModals[i].classList.contains('modal--active')) {
        allModals[i].classList.remove('modal--active');
        overlay.classList.remove('modal__overlay--active');
      }
    }
  }
});
