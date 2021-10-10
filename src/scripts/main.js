'use strict';

// find page body
const pageBody = document.querySelector('.page__body');

function addDisplayNone(find, page) {
  find.addEventListener('click', function() {
    page.classList.add('displayNone');
  });
}

function removeDisplayNone(find, page) {
  find.addEventListener('click', function() {
    page.classList.remove('displayNone');
  });
}

function addDisplayBlock(find, page) {
  find.addEventListener('click', function() {
    page.classList.add('displayBlock');
  });
}

function removeDisplayBlock(find, page) {
  find.addEventListener('click', function() {
    page.classList.remove('displayBlock');
  });
}

function turnOffScroll(find, page) {
  find.addEventListener('click', function() {
    page.classList.add('hiddenScroll');
  });
}

function turnOnScroll(find, page) {
  find.addEventListener('click', function() {
    page.classList.remove('hiddenScroll');
  });
}

function addOrderActive(find, page) {
  find.addEventListener('click', function() {
    page.classList.add('menuOrder__link--active');
  });
}

function removeOrderActive(find, page) {
  find.addEventListener('click', function() {
    page.classList.remove('menuOrder__link--active');
  });
}

function addDisplayFlex(find, page) {
  find.addEventListener('click', function() {
    page.classList.add('displayFlex');
  });
}

function removeDisplayFlex(find, page) {
  find.addEventListener('click', function() {
    page.classList.remove('displayFlex');
  });
}

/** Work with Main Menu */

// find menu opener
const menuOpener = document.querySelector('.header__menu--opener');
const faqOpener = document.querySelector('.headerFAQ--opener');
const helpOpener = document.querySelector('.headerHelp--opener');

// disable scroll on body  menuByList--closer
turnOffScroll(menuOpener, pageBody);
turnOffScroll(faqOpener, pageBody);
turnOffScroll(helpOpener, pageBody);

// find menu: list, language, help and FAQ closer
const menuListCloser = document.querySelector('.menuByList--closer');
const menuLanguageCloser = document.querySelector('.menuLanguage--closer');
const menuFAQCloser = document.querySelector('.helpFAQ--closer');
const menuHelpCloser = document.querySelector('.helpFAQ--closer1');
const menuHelpToContacts = document.querySelector('.helpFAQ__link--contacts');

// turn on scroll on body
turnOnScroll(menuListCloser, pageBody);
turnOnScroll(menuLanguageCloser, pageBody);
turnOnScroll(menuFAQCloser, pageBody);
turnOnScroll(menuHelpCloser, pageBody);
turnOnScroll(menuHelpToContacts, pageBody);

/** End Work with Main Menu */

/** Work with Tech Info */

// find focus bottom
const sensorBottom = document.querySelector('.main__tech--specs-sensor');
const batteryBottom = document.querySelector('.main__tech--specs-battery');
const connectBotom = document.querySelector('.main__tech--specs-connection');

// find tech info
const sensorInfo = document.querySelector('.main__tech-info--sensor');
const batteryInfo = document.querySelector('.main__tech-info--battery');
const connectInfo = document.querySelector('.main__tech-info--connection');

addDisplayBlock(sensorBottom, sensorInfo);
addDisplayBlock(batteryBottom, batteryInfo);
addDisplayBlock(connectBotom, connectInfo);

// find tech info closure
const sensorClosure = document.querySelector('.menuOrder__closure--sensor');
const batteryClosure = document.querySelector('.menuOrder__closure--battery');
const connectClosure = document.querySelector('.menuOrder__closure--connect');

removeDisplayBlock(sensorClosure, sensorInfo);
removeDisplayBlock(batteryClosure, batteryInfo);
removeDisplayBlock(connectClosure, connectInfo);
/** End Work with Tech Info */

/** Work with Order menu */

// find order / pay page
const pageOrderPay = document.querySelector('.grid__menuOrder--order');
// find order form
const orderForm = document.querySelector('.orderForm');
// find pay form
const payForm = document.querySelector('.payForm');
// find complete page
const completePage = document.querySelector('.menuOrder__complete');

// click to buy buttons
const clickBuyButton = document.querySelector('.buyButtonClick');
const clickBuyButton1 = document.querySelector('.buyButtonClick1');
const clickBuyButton2 = document.querySelector('.buyButtonClick2');

// disable scroll on body
turnOffScroll(clickBuyButton, pageBody);
turnOffScroll(clickBuyButton1, pageBody);
turnOffScroll(clickBuyButton2, pageBody);

// find nav items in order / pay / complete menu
const navOrder = document.querySelector('.menuOrder__linkOrder');
const navPay = document.querySelector('.menuOrder__linkPay');
const navComplete = document.querySelector('.menuOrder__linkComplete');

// click to purchase button in orderform
const clickOrderButton = document.querySelector('.orderClick');

removeOrderActive(clickOrderButton, navOrder); // disactivate pay nav
addDisplayNone(clickOrderButton, orderForm); // close order form
addOrderActive(clickOrderButton, navPay); // activate pay nav
addDisplayFlex(clickOrderButton, payForm); // open pay form

// click to pay nav
removeOrderActive(navPay, navOrder); // disactivate pay nav
addDisplayNone(navPay, orderForm); // close order form
addOrderActive(navPay, navPay); // activate pay nav
addDisplayFlex(navPay, payForm); // open pay form

// click to order nav
addOrderActive(navOrder, navOrder); // activate pay nav
removeDisplayNone(navOrder, orderForm); // open order form
removeOrderActive(navOrder, navPay); // disactivate pay nav
removeDisplayFlex(navOrder, payForm); // close pay form

// click to purchase button in pay form
const clickPayButton = document.querySelector('.payClick');

removeDisplayFlex(clickPayButton, payForm); // close pay form
removeOrderActive(clickPayButton, navPay); // disactivate pay nav
addDisplayNone(clickPayButton, pageOrderPay); // close order/pay form
addDisplayBlock(clickPayButton, completePage); // open complete message
addOrderActive(clickPayButton, navComplete); // activate complete nav

// close order menu
const orderCloser = document.querySelector('.menuOrder__closer');

turnOnScroll(orderCloser, pageBody); // turn on scroll on body
removeDisplayNone(orderCloser, pageOrderPay);
removeDisplayBlock(orderCloser, completePage);
removeDisplayNone(orderCloser, orderForm); // visible order form
removeDisplayFlex(orderCloser, payForm); // close pay form
removeOrderActive(orderCloser, navPay); // disactivate pay nav
removeOrderActive(orderCloser, navComplete); // disactivate complete nav
addOrderActive(orderCloser, navOrder); // activate order nav

/* */
