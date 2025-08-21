function navigation(block, className) {
  const menuBlock = document.querySelector(block);

  menuBlock.addEventListener('click', (e) => {
    e.preventDefault();

    if (e.target.closest(className)) {
      const id = e.target.getAttribute('href').slice(1);
      const element = document.getElementById(id);

      element.scrollIntoView({
        behavior: 'smooth',
      })
    }
  });
};

function scrollTo(selector) {
  const moveButton = document.querySelector(selector);
  const id = moveButton.getAttribute('href').slice(1);
  const element = document.getElementById(id);

  if (id) {
    moveButton.addEventListener('click', (e) => {
      e.preventDefault();

      element.scrollIntoView({
        behavior: 'smooth',
      })
    })
  }
}

scrollTo('.hero__move > a');
scrollTo('.scroll-to-top');
scrollTo('.header__logo');
scrollTo('.footer__logo');
scrollTo('.contact-popup');

navigation('.menu__list', '.menu__item.item-close');
navigation('.footer__list', '.footer__item');

