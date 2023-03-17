'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const burgerButtonHeader = document.querySelector('.header__burger');
  const crossButtonMenu = document.querySelectorAll('.menu__cross');
  const body = document.querySelector('.body');
  const menuHeader = document.querySelector('.header__menu');
  const menuItemHasSub = document.querySelectorAll('.menu__link--has-sub');
  const menuItemSubArrow = document.querySelectorAll('.arrow-back');

  burgerButtonHeader.addEventListener('click', () => {
    body.classList.toggle('lock');
    menuHeader.classList.toggle('active');
  });

  crossButtonMenu.forEach(cross => {
    cross.addEventListener('click', () => {
      if (window.location.hash) {
        window.location.hash = '';
      }

      if (cross.closest('.active')) {
        cross.closest('.active').classList.remove('active');
      }
    });
  });

  menuItemHasSub.forEach(item => {
    item.addEventListener('click', () => {
      item.nextElementSibling.classList.toggle('active');
    });
  });

  menuItemSubArrow.forEach(arrow => {
    arrow.addEventListener('click', () => {
      arrow.closest('.active').classList.remove('active');
    });
  });
});
