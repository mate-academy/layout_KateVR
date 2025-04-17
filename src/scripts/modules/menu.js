export const setupMenu = () => {
  const langButton = document.querySelector('.menu__btn--lang');
  const helpButton = document.querySelector('.menu__btn--help');
  const faqButton = document.querySelector('.menu__btn--faq');
  const langMenu = document.querySelector('.menu__lang');
  const helpMenu = document.querySelector('.menu__help');
  const faqMenu = document.querySelector('.menu__faq');
  const backButton = document.querySelector('.menu__back');
  const navMenu = document.querySelector('.menu__nav');
  const closeIcon = document.querySelector('.menu__link-close');

  const resetMenu = () => {
    langMenu.classList.add('hidden');
    helpMenu.classList.add('hidden');
    faqMenu.classList.add('hidden');
    navMenu.classList.remove('hidden');
    backButton.classList.add('hidden');
    closeIcon.classList.remove('hidden');
    closeIcon.style.order = '1';
  };

  window.addEventListener('DOMContentLoaded', resetMenu);

  langButton.addEventListener('click', function () {
    langMenu.classList.remove('hidden');
    navMenu.classList.add('hidden');
    closeIcon.classList.add('hidden');
    backButton.classList.remove('hidden');
    closeIcon.style.order = '2';
  });

  helpButton.addEventListener('click', function () {
    helpMenu.classList.remove('hidden');
    navMenu.classList.add('hidden');
    backButton.classList.remove('hidden');
    closeIcon.style.order = '2';
  });

  faqButton.addEventListener('click', function () {
    faqMenu.classList.remove('hidden');
    navMenu.classList.add('hidden');
    backButton.classList.remove('hidden');
    closeIcon.style.order = '2';
  });

  helpMenu.addEventListener('click', (e) => {
    if (e.target.closest('a')) {
      resetMenu();
    }
  });

  faqMenu.addEventListener('click', (e) => {
    if (e.target.closest('a')) {
      resetMenu();
    }
  });

  const languageButtons = langMenu.querySelectorAll('.nav__link.menu__link');
  languageButtons.forEach(button => {
    button.addEventListener('click', function () {
      resetMenu();
    });
  });

  backButton.addEventListener('click', function () {
    resetMenu();
  });

  closeIcon.addEventListener('click', function () {
    resetMenu();
  });
};
