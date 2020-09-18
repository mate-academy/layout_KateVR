'use strict';

// @import styles from '../styles/utils/_export.scss';

const navSlide = () => {
  const burgerIco = document.querySelector('.nav__mobile-ico');
  const mainList = document.querySelector('.nav__list--main');
  const secondaryList = document.querySelector('.nav__list--secondary');
  const header = document.querySelector('.header');
  const headerMain = document.querySelector('.header__main');
  const main = document.querySelector('.main');
  const footer = document.querySelector('.footer');
  const orderButton = document.querySelector('.header__oreder-button');

  burgerIco.addEventListener('click', () => {
    mainList.classList.toggle('nav__list--active');
    secondaryList.classList.toggle('nav__list--active');
    header.classList.toggle('header--active');
    headerMain.classList.toggle('header__main--active');
    main.classList.toggle('main--active');
    footer.classList.toggle('footer--active');
    orderButton.classList.toggle('header__oreder-button--hidden');
  });

  document.addEventListener('click', (e) => {
    if (!['nav__mobile-ico'].some(el => e.target.classList.contains(el))) {
      mainList.classList.remove('nav__list--active');
      secondaryList.classList.remove('nav__list--active');
      header.classList.remove('header--active');
      headerMain.classList.remove('header__main--active');
      main.classList.remove('main--active');
      footer.classList.remove('footer--active');
      orderButton.classList.remove('header__oreder-button--hidden');
      // header.style.background = 'green'; // NOT work(
    }
  });
};

navSlide();

// function pointsToggle(e) {
//   const shortParagraphs = document.querySelectorAll('.paragraph--lines-two');

//   // if (e.matches) {
//   //   shortParagraphs.classList.remove('paragraph--red');
//   // } else {
//   //   shortParagraphs.classList.toggle('paragraph--red');
//   // }

//   // if (e.matches) {
//   //   shortParagraphs.classList.toggle('paragraph--lines-two');
//   // } else {
//   //   shortParagraphs.classList.remove('paragraph--lines-two');
//   // }

//   if (e.matches) {
//     // shortParagraphs.classList.toggle('paragraph--blue');
//     // shortParagraphs.classList.remove('paragraph--red');
//     document.body.style.backgroundColor = 'blue';
//   } else {
//     // shortParagraphs.classList.toggle('paragraph--red');
//     // shortParagraphs.classList.remove('paragraph--blue');
//     document.body.style.backgroundColor = 'red';
//   }
// }

// const point1 = window.matchMedia('(min-width: 768px)');

// pointsToggle(point1);

// point1.addListener(pointsToggle);
