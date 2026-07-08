'use strict';

export function initScrollTop() {
  document.querySelectorAll('.contact__arrow, .page__home').forEach((element) => {
    element.addEventListener('click', (event) => {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
}
