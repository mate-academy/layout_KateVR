'use strict';

const $ = window.$;

$(document).ready(function() {
  const menuBtn = $('.header__menu-btn');
  const menu = $('.menu');
  const menuToggler = 'menu--switch';
  const menuBtnToggler = 'header__menu-btn--showed';

  const toggleMenu = () => {
    menu.toggleClass(menuToggler);
    menuBtn.toggleClass(menuBtnToggler);
  };

  menuBtn.click(toggleMenu);

  const specMain = $('.specifications__main');
  const senBtn = $('#sen');
  const batBtn = $('#bat');
  const conBtn = $('#con');

  const openSenClass = 'specifications__main--sen';
  const openBatClass = 'specifications__main--bat';
  const openConClass = 'specifications__main--con';
  const buttonChange = 'specifications__button--open';

  const senSwitcher = () => {
    specMain.toggleClass(openSenClass);
    senBtn.toggleClass(buttonChange);
  };

  const batSwitcher = () => {
    specMain.toggleClass(openBatClass);
    batBtn.toggleClass(buttonChange);
  };

  const conSwitcher = () => {
    specMain.toggleClass(openConClass);
    conBtn.toggleClass(buttonChange);
  };

  senBtn.click(senSwitcher);
  batBtn.click(batSwitcher);
  conBtn.click(conSwitcher);
});
