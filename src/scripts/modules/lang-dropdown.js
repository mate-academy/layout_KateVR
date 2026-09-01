'use strict';

/**
 * Language Dropdown Module
 * Handles toggling the dropdown and closing it on outside clicks.
 */
export const initLangDropdown = () => {
  const langDropdown = document.querySelector('.lang-dropdown');
  const langBtn = document.querySelector('.lang-dropdown__btn');

  // Early exit if elements are missing
  if (!langDropdown || !langBtn) return;

  // Toggle dropdown on button click
  langBtn.addEventListener('click', event => {
    event.stopPropagation();
    langDropdown.classList.toggle('is-open');
  });

  // Close dropdown when clicking outside the component
  document.addEventListener('click', event => {
    if (!langDropdown.contains(event.target)) {
      langDropdown.classList.remove('is-open');
    }
  });
};
