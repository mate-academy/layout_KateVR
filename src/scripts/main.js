'use strict';

window.addEventListener('load', () => {
  for (const element of document.getElementsByClassName('faq__question')) {
    element.addEventListener('click', (e) => {
      if (e.target.nextElementSibling.classList.contains('faq__open--is')) {
        e.target.nextElementSibling.classList.remove('faq__open--is');
      } else {
        e.target.nextElementSibling.classList.add('faq__open--is');
      }
    });
  }
});
