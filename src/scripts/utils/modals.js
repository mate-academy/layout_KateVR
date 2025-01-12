export const modalTemplate = (linkSelector, modalSelector) => {
  const link = document.querySelectorAll(linkSelector);
  const modal = document.querySelector(modalSelector);

  const closeElements = modal.querySelectorAll(
    '.modal__overlay, .modal__close, .order-modal__close, .order-modal__complete-back-btn, #modal-more-btn, #modal-contact-us',
  );

  link.forEach((item) => {
    item.addEventListener('click', (event) => {
      event.preventDefault();
      openModal(modal);
    });
  });

  closeElements.forEach((element) => {
    element.addEventListener('click', () => closeModal(modal));
  });

  function openModal(modal) {
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(modal) {
    modal.classList.remove('show');
    document.body.style.overflow = '';
  }

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('show')) {
      closeModal(modal);
    }
  });
};
