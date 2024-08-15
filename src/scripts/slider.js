'use script';

import { query, queryAll } from "./utils.js";

// #region slider
  import image_1 from '../images/image_1.png';
  import image_2 from '../images/image_3.png';
  import image_3 from '../images/image_4.png';
  import image_4 from '../images/image_5.png';
  import image_5 from '../images/image_6.png';
  import image_6 from '../images/image_7.png';

  const images = [image_1, image_2, image_3, image_4, image_5, image_6];
  let current = 0;

  // navigation buttons
    export function navigation(btn, direction) {

      btn.addEventListener('click', function() {

        (direction === 'forward')
        ? current = (current + 1) % images.length
        : current = (current -1 + images.length) % images.length;

        query('.header__images--image').src = images[current];
        stopSliders();
        display(direction);
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
    const displayLine = queryAll('.header__display-nav--part');

    function display(direction) {

      if (direction === 'forward') {
        displayLine[current].classList.add('header__display-nav--active')
        displayLine[current-1].classList.remove('header__display-nav--active');
        
      } else if(direction === 'back') {
        displayLine[current].classList.add('header__display-nav--active');
        displayLine[current+1].classList.remove('header__display-nav--active');
      }
    };
// #endregion
