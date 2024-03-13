'use strict';

// language menu
const htmlLang = document.querySelector('.html');
const dropdownButton = document.querySelector('.dropdown__button');
const dropdownList = document.querySelectorAll('.dropdown__list');
const menuList = document.querySelectorAll('.menu__lang-link');

let langHref = 'en';
let langName = 'En';

const dropdown = () => {
  const dropdownMenu = document.querySelector('.dropdown__menu');

  dropdownButton.addEventListener('click', (event) => {
    event.preventDefault();

    dropdownMenu.classList.toggle('dropdown__menu--active');
    dropdownButton.classList.toggle('dropdown__button--active');
  });

  document.addEventListener('click', (event) => {
    if (!event.target.classList.contains('dropdown__button')) {
      dropdownMenu.classList.remove('dropdown__menu--active');
      dropdownButton.classList.remove('dropdown__button--active');
    }
  });
};

const updateDropdown = () => {
  for (let i = 0; i < dropdownList.length; i++) {
    if (langHref === dropdownList[i].children[0].href.match(/#(.*)/)[1]) {
      dropdownButton.textContent = langName;
      dropdownList[i].classList.add('dropdown__list--active');
    } else {
      dropdownList[i].classList.remove('dropdown__list--active');
    }
  }
};

const updateMenu = () => {
  for (let i = 0; i < menuList.length; i++) {
    if (langHref === menuList[i].href.match(/#(.*)/)[1]) {
      menuList[i].classList.add('menu__lang-link--active');
    } else {
      menuList[i].classList.remove('menu__lang-link--active');
    }
  }
};

const selectLangInDropdown = () => {
  for (let i = 0; i < dropdownList.length; i++) {
    dropdownList[i].addEventListener('click', (event) => {
      langHref = dropdownList[i].children[0].href.match(/#(.*)/)[1];
      langName = dropdownList[i].children[0].textContent;

      htmlLang.lang = langHref;

      updateDropdown();
      updateMenu();
    });
  }
};

const selectLangInMenu = () => {
  for (let i = 0; i < menuList.length; i++) {
    menuList[i].addEventListener('click', (event) => {
      langHref = menuList[i].href.match(/#(.*)/)[1];
      langName = menuList[i].name;

      htmlLang.lang = langHref;

      updateDropdown();
      updateMenu();
    });
  }
};
// end language menu

// header navigation
const navigation = () => {
  const link = document.querySelectorAll('.header__right-link');

  for (let i = 0; i < link.length; i++) {
    link[i].addEventListener('click', (event) => {
      event.preventDefault();

      for (let j = 0; j < link.length; j++) {
        link[j].classList.remove('header__right-link--active');
      }
      link[i].classList.add('header__right-link--active');
    });
  }
};

dropdown();
selectLangInDropdown();
selectLangInMenu();
navigation();
