'use script';

import { query, queryAll, trimString } from "./utils.js";

// #region slider
  import image_1 from '../images/image_1.png';
  import image_2 from '../images/image_3.png';
  import image_3 from '../images/image_4.png';
  import image_4 from '../images/image_5.png';
  import image_5 from '../images/image_6.png';
  import image_6 from '../images/image_7.png';

  const images = [image_1, image_2, image_3, image_4, image_5, image_6];
  let current = 0;

  // navigation buttons "next" and "previous"
    export function navigation_1(btn, direction, className) {
      const control = query(btn);

      control.addEventListener('click', function() {

        (direction === 'forward')
        ? current = (current + 1) % images.length
        : current = (current -1 + images.length) % images.length;

        query(className).src = images[current];
        stopSliders();
        display(direction);
      });
    };

  // navigation several buttons
    export function  navigation_2 (btn, className, value) {
      const control = query(btn);

      control.addEventListener('click', function() {
        query(className).style.transform = `translateX(${value}%)`;
      });
    };

  //  navigation with cloned buttons "next" and "previous"
    let currentCloned = 0;
    let currentClone = 1;

    export function  navigation_3(clone, btn, direction, className) {

      const control = clone.querySelector(btn);
      const slideImades = queryAll(trimString(className, 0, -2)).length;

      control.addEventListener('click', function() {

        if (direction === 'forward') {
          currentCloned = (currentCloned - 100);
          currentClone ++;

          clone.querySelector('input[name="previous"]')
            .parentElement.classList.remove('header__navigation--no-active');

        } else {
          currentCloned = (currentCloned + 100);
          currentClone -= 1;
        };

        query(className).style.transform = `translateX(${currentCloned}%)`;

        if(currentClone === slideImades) {
          control.parentElement.classList.add(`${trimString(className, 1 , -2)}--active`);
        };

        if (currentClone < slideImades) {
          clone.querySelector('input[name="next"]')
            .parentElement.classList.remove(`${trimString(className, 1 , -2)}--active`);

          clone.querySelector('input[name="previous"]')
            .parentElement.classList.remove(`${trimString(className, 1 , -2)}--active`);
        };

        if (currentClone === 1) {
          control.parentElement.classList.add(`${trimString(className, 1 , -2)}--active`);
        };

        displayClone(clone, '.header__display-nav--part', direction);

        currentDisplay('.about-product__display--current', '.about-product__display--total', slideImades);
      });
    };

  // stop navigation buttons
    function stopSliders() {
      (current >= 1)
      ? query('input[name="previous"]').parentElement.classList.remove('header__navigation--no-active')
      : query('input[name="previous"]').parentElement.classList.add('header__navigation--no-active');

      (current === images.length -1)
      ? query('input[name="next"]').parentElement.classList.add('header__navigation--no-active')
      : query('input[name="next"]').parentElement.classList.remove('header__navigation--no-active');
    };

  // display navigation
  function display(direction) {
    const displayLine = queryAll('.header__display-nav--part');

      if (direction === 'forward') {
        displayLine[current].classList.add('header__display-nav--active')
        displayLine[current-1].classList.remove('header__display-nav--active');

      } else if(direction === 'back') {
        displayLine[current].classList.add('header__display-nav--active');
        displayLine[current+1].classList.remove('header__display-nav--active');
      }
    };

  function displayClone(clone, nameClass, direction) {

    const displayLine = clone.querySelectorAll(nameClass);

      if (direction === 'forward') {
        displayLine[currentClone-1].classList.add('header__display-nav--active')
        displayLine[currentClone-2].classList.remove('header__display-nav--active');

      } else if(direction === 'back') {
        displayLine[currentClone-1].classList.add('header__display-nav--active');
        displayLine[currentClone].classList.remove('header__display-nav--active');
      }
    };

  function currentDisplay(current, total, imagesNum) {

    const currentElement = query(current);
    const totalElement = query(total);

    currentElement.textContent = currentClone;
    totalElement.textContent = imagesNum;
  };
// #endregion
