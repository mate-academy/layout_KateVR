'use strict';

const $ = window.$;

$(document).ready(function() {
  // work with main menu
  const menuBtn = $('.header__menu-btn');
  const menu = $('.menu');
  const menuBtnWrapper = $('.header__button-wrap');
  const menuToggler = 'menu--switch';
  const animateBurger = 'header__menu-btn--animateBurger';
  const animateCross = 'header__menu-btn--animateCross';
  const animateWrapper = 'header__button-wrap--rotate';

  const logo = $('.header__logo-link');
  const logoHide = 'header__logo-link--hide';

  const toggleMenu = () => {
    menu.toggleClass(menuToggler);
    menuBtn.toggleClass(animateBurger);
    menuBtn.toggleClass(animateCross);
    menuBtnWrapper.toggleClass(animateWrapper);
    logo.toggleClass(logoHide);
  };

  menuBtn.click(toggleMenu);

  // buttons in the specifications section
  const specMain = $('.specifications__main');
  const senBtn = $('#sen');
  const batBtn = $('#bat');
  const conBtn = $('#con');

  const openSenClass = 'specifications__main--sen';
  const openBatClass = 'specifications__main--bat';
  const openConClass = 'specifications__main--con';
  const buttonChange = 'specifications__button--open';

  const specSwitcher = (openClass, button) => {
    specMain.toggleClass(openClass);
    button.toggleClass(buttonChange);
  };

  senBtn.click(function() {
    specSwitcher(openSenClass, senBtn);
  });

  batBtn.click(function() {
    specSwitcher(openBatClass, batBtn);
  });

  conBtn.click(function() {
    specSwitcher(openConClass, conBtn);
  });

  // change language block

  const langChoosedIcon = $('.lang__icon');
  const langList = $('.lang__slide');
  const openList = 'lang__slide--tog';
  const electClass = 'lang__elect';

  const languageButton = {
    ua: $('#item_ua'),
    en: $('#item_en'),
    pl: $('#item_pl'),
    ru: $('#item_ru'),
  };

  const icon = {
    ua: 'lang__icon--ua',
    en: 'lang__icon--en',
    pl: 'lang__icon--pl',
    ru: 'lang__icon--ru',
  };

  const langListToggler = () => {
    langList.toggleClass(openList);
  };

  langChoosedIcon.click(langListToggler);

  const removeElect = () => {
    for (const key of Object.keys(languageButton)) {
      if (languageButton[key].hasClass(electClass)) {
        languageButton[key].removeClass(electClass);
      }
    }
  };

  const changeIcon = valueOfClass => {
    const langIconClasses = langChoosedIcon.attr('class').split(' ');

    langIconClasses.forEach(iconClass => {
      if (Object.values(icon).includes(iconClass)) {
        langChoosedIcon.removeClass(iconClass);
      }
    });

    langChoosedIcon.addClass(valueOfClass);
  };

  const langSelect = langFlag => {
    removeElect();
    languageButton[langFlag].addClass(electClass);
    changeIcon(icon[langFlag]);
  };

  languageButton.ru.click(function() {
    langSelect('ru');
  });

  languageButton.ua.click(function() {
    langSelect('ua');
  });

  languageButton.en.click(function() {
    langSelect('en');
  });

  languageButton.pl.click(function() {
    langSelect('pl');
  });
});

// main buyButton of the mobile version

const mainBuyButton = $('#mainMobileButton');

mainBuyButton.style.background = 'red';
