export const setupMenuToggle = () => {
  const pageMenu = document.querySelector('.page__menu');
  const pageMenuContent = document.querySelector('.menu__nav');
  const langMenu = document.querySelector('.menu__lang');
  const pageMenuLangBtn = pageMenu.querySelector('.menu__btn--lang');
  const openMenuBtn = document.querySelector('.header__menu-open-btn');
  const closeMenuBtn = document.querySelector('.menu__close');
  const openLangBarBtn = document.querySelector('.menu__btn--lang');
  const closeLangBarBtn = document.querySelector('.menu__back');

  if (!pageMenu || !langMenu || !openMenuBtn || !closeMenuBtn || !openLangBarBtn || !closeLangBarBtn) {
    return;
  }

  const openMenu = () => pageMenu.classList.add('page__menu--active');
  const closeMenu = () => pageMenu.classList.remove('page__menu--active');

  const openLangBar = () => langMenu.classList.add('menu__lang--active');
  const closeLangBar = () => langMenu.classList.remove('menu__lang--active');

  openMenuBtn.addEventListener('click', openMenu);
  closeMenuBtn.addEventListener('click', closeMenu);

  openLangBarBtn.addEventListener('click', openLangBar);
  closeLangBarBtn.addEventListener('click', closeLangBar);

  langMenu.addEventListener('click', (e) => {
    if (e.target.closest('li')) {
      closeLangBar();
    }

    e.stopPropagation();
  });

  pageMenu.addEventListener('click', (e) => {
    const li = e.target.closest('li');

    if (li && !li.contains(pageMenuLangBtn)) {
      closeMenu();
    }
  });

  document.addEventListener('click', (e) => {
    if (
      !langMenu.contains(e.target)
      && langMenu.classList.contains('menu__lang--active')
      && e.target !== openLangBarBtn
    ) {
      closeLangBar();
      return;
    }

    if (!pageMenuContent.contains(e.target)
      && pageMenu.classList.contains('page__menu--active')
      && e.target !== openMenuBtn
    ) {
      closeMenu();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1280 && pageMenu.classList.contains('page__menu--active')) {
      closeLangBar();
      closeMenu();
    }
  })
};
