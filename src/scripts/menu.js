export function initMenu() {
  const pageBody = document.querySelector('.page__body');
  const burgerButton = document.querySelector('.top-bar__burger-menu');
  const closeButton = document.querySelector('.menu__close');
  const menuLinks = document.querySelectorAll('.menu__link');
  const menu = document.querySelector('.menu');

  const languageButton = document.querySelector('.menu__language-button');
  const backButton = document.querySelector('.language-menu__back');
  const languageLink = document.querySelector('.language-menu__link--active');
  const languageMenu = document.querySelector('.language-menu');

  if (!menu || !burgerButton) return;

  const closeAllMenus = () => {
    menu.classList.remove('is-open');
    menu.classList.add('is-close');
    languageMenu?.classList.remove('is-open');
    languageMenu?.classList.add('is-close');
    pageBody.classList.remove('no-scroll');
    menu.style.overflow = 'auto';
  };

  burgerButton.addEventListener('click', () => {
    menu.classList.add('is-open');
    menu.classList.remove('is-close');
    pageBody.classList.add('no-scroll');
  });

  closeButton?.addEventListener('click', closeAllMenus);

  menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (!link.classList.contains('menu__language-button')) {
        closeAllMenus();
      }
    });
  });

  languageButton?.addEventListener('click', (e) => {
    e.preventDefault();
    languageMenu?.classList.add('is-open');
    languageMenu?.classList.remove('is-close');
    menu.style.overflow = 'hidden';
  });

  backButton?.addEventListener('click', (e) => {
    e.preventDefault();
    languageMenu?.classList.remove('is-open');
    languageMenu?.classList.add('is-close');
    menu.style.overflow = 'auto';
  });

  languageLink.addEventListener('click', closeAllMenus);
}
