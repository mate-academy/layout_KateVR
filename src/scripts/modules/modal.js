'use strict';

/**
 * Modal Module
 * Handles opening, closing, and internal navigation of popup modals.
 */

export const openModal = modalNode => {
  if (!modalNode) return;

  modalNode.classList.add('is-open');
  document.documentElement.classList.add('no-scroll');
};

export const closeModal = modalNode => {
  if (!modalNode) return;

  modalNode.classList.remove('is-open');

  // Unlock scroll only if no other modals remain open
  const openModals = document.querySelectorAll('.popup.is-open');
  if (openModals.length === 0) {
    document.documentElement.classList.remove('no-scroll');
  }
};

export const initModals = () => {
  const modals = document.querySelectorAll('.popup');
  if (!modals.length) return;

  // 1. Global close on Escape key
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      modals.forEach(modal => closeModal(modal));
    }
  });

  modals.forEach(modal => {
    // 2. Close on backdrop click
    modal.addEventListener('click', event => {
      if (event.target === modal) {
        closeModal(modal);
      }
    });

    // 3. Close on specific button clicks
    const closeButtons = modal.querySelectorAll('[data-action="close-popup"]');
    closeButtons.forEach(btn => {
      btn.addEventListener('click', () => closeModal(modal));
    });
  });

  // 4. Universal open triggers
  const modalTriggers = document.querySelectorAll('[data-modal-target]');
  modalTriggers.forEach(trigger => {
    trigger.addEventListener('click', e => {
      e.preventDefault();
      const targetModal = document.getElementById(trigger.dataset.modalTarget);
      openModal(targetModal);
    });
  });

  // 5. Internal content navigation
  document.addEventListener('click', e => {
    // A. Help -> FAQ transition
    const faqTrigger = e.target.closest('[data-action="open-faq"]');
    if (faqTrigger) {
      e.preventDefault();
      const currentPopup = faqTrigger.closest('.popup');
      const faqPopup = document.getElementById('popup-faq');

      if (currentPopup && faqPopup) {
        closeModal(currentPopup);
        openModal(faqPopup);
      }
      return;
    }

    // B. Help -> Contacts transition (Close + Smooth Scroll)
    const contactTrigger = e.target.closest(
      '[data-action="scroll-to-contacts"]',
    );
    if (contactTrigger) {
      e.preventDefault();
      const currentPopup = contactTrigger.closest('.popup');

      if (currentPopup) {
        closeModal(currentPopup);
      }

      const targetSection =
        document.querySelector('#contacts') || document.querySelector('footer');
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
};
