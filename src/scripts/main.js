'use strict';

// dropdown menu
const dropdown = () => {
  const dropdownButton = document.querySelector('.dropdown__button');
  const dropdownMenu = document.querySelector('.dropdown__menu');

  const selectLang = () => {
    const htmlLang = document.querySelector('.html');
    const elementLang = document.querySelectorAll('.dropdown__list');

    for (let i = 0; i < elementLang.length; i++) {
      const langHref = elementLang[i].children[0].href.match(/#(.*)/)[1];
      const langName = elementLang[i].children[0].textContent;

      if (langHref !== htmlLang.lang) {
        elementLang[i].classList.remove('dropdown__list--active');
      }

      elementLang[i].addEventListener('click', (event) => {
        htmlLang.lang = langHref;
        dropdownButton.textContent = langName;
        elementLang[i].classList.add('dropdown__list--active');
      });
    }
  };

  dropdownButton.addEventListener('click', (event) => {
    event.preventDefault();

    dropdownMenu.classList.toggle('dropdown__menu--active');
    dropdownButton.classList.toggle('dropdown__button--active');

    selectLang();
  });

  document.addEventListener('click', (event) => {
    if (!event.target.classList.contains('dropdown__button')) {
      dropdownMenu.classList.remove('dropdown__menu--active');
      dropdownButton.classList.remove('dropdown__button--active');
    }
  });
};

dropdown();

// disable scrolling when the menu is open
// window.onhashchange = (e) => {
//   const menu = e.newURL.includes('#menu')
//     ? document.body.classList.add('page--overflow')
//     : document.body.classList.remove('page--overflow');

//   return menu;
// };
