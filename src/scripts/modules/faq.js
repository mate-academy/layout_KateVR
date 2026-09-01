'use strict';

/**
 * FAQ Accordion Module
 * Handles accordion toggle, dynamic height calculation, and "More/Less" list expansion.
 */
export const initFaq = () => {
  const openItem = item => {
    const body = item.querySelector('.faq-item__body');
    if (!body) return;

    item.classList.add('is-open');
    body.style.marginTop = '18px';
    body.style.height = `${body.scrollHeight}px`;
    body.style.opacity = '1';
  };

  const closeItem = item => {
    const body = item.querySelector('.faq-item__body');
    if (!body) return;

    item.classList.remove('is-open');
    body.style.opacity = '0';
    body.style.height = '0px';
    body.style.marginTop = '0px';
  };

  // Initialize pre-opened items on load
  document.querySelectorAll('.faq-item.is-open').forEach(openItem);

  // Unified delegated event listener for FAQ interactions
  document.addEventListener('click', e => {
    // 1. More/Less button toggle
    const moreBtn = e.target.closest('.faq-more-btn');
    if (moreBtn) {
      const parentContainer =
        moreBtn.closest('.mobile-menu__content, .popup__dialog') || document;
      const faqList = parentContainer.querySelector('.faq-list');

      if (faqList) {
        const isExpanded = faqList.classList.toggle('is-expanded');
        moreBtn.classList.toggle('is-active', isExpanded);
        moreBtn.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');

        const btnText = moreBtn.querySelector('.faq-more-btn__text');
        if (btnText) {
          btnText.textContent = isExpanded ? 'Less' : 'More';
        }
      }
      return;
    }

    // 2. Accordion item toggle
    const trigger = e.target.closest('.faq-item__trigger');
    if (!trigger) return;

    const currentItem = trigger.closest('.faq-item');
    if (!currentItem) return;

    const faqList =
      currentItem.closest('.faq-list') || currentItem.parentElement;
    const isOpen = currentItem.classList.contains('is-open');

    // Close sibling items (exclusive accordion behavior)
    if (faqList) {
      faqList.querySelectorAll('.faq-item').forEach(item => {
        if (item !== currentItem && item.classList.contains('is-open')) {
          closeItem(item);
        }
      });
    }

    // Toggle current item
    isOpen ? closeItem(currentItem) : openItem(currentItem);
  });

  // Recalculate height of open items on window resize
  window.addEventListener('resize', () => {
    document.querySelectorAll('.faq-item.is-open').forEach(item => {
      const body = item.querySelector('.faq-item__body');
      if (body) {
        body.style.height = `${body.scrollHeight}px`;
      }
    });
  });
};
