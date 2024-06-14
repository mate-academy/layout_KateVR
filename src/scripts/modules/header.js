export const burgerFunctionality = () => {
  const burger_btn = document.querySelector('.header-burger__btn');
  const header_menu = document.querySelector('.header__menu');
  const header_menu_line = document.querySelector('.header-burger__line');
  const bodyElem = document.querySelector('body');
  if (burger_btn && header_menu) {
    burger_btn.addEventListener('click', () => {
      burger_btn.classList.toggle('header-burger__btn--open');
      bodyElem.classList.toggle('page__body--lock');
      if (bodyElem.classList.contains('page__body--lock')) {
        bodyElem.classList.remove('page__body--lock');
      } else {
        bodyElem.classList.add('page__body--lock');
      }
      header_menu.classList.toggle('header__menu--open');
      header_menu_line.classList.toggle('header-burger__line--open');
    });
  }
};

export const stickyHeader = () => {
  let scrollpos = window.scrollY;
  const header = document.querySelector('.header__wrapper');
  const headerInner = document.querySelector('.header__inner');

  const add_class_on_scroll = () => {
    header.classList.add('header__wrapper--scrolled');
    headerInner.classList.add('header__inner--scrolled');
  };
  const remove_class_on_scroll = () => {
    headerInner.classList.remove('header__inner--scrolled');
    header.classList.remove('header__wrapper--scrolled');
  };

  window.addEventListener('scroll', function () {
    scrollpos = window.scrollY;

    if (scrollpos >= 27) {
      add_class_on_scroll();
    } else {
      remove_class_on_scroll();
    }
  });
};
