'use strict';

// const pageBody = document.querySelector('.page__body');
// // const menuOpen = document.querySelector('.header__menu');
// const menuCloser = document.querySelector('.menuByList--item');
// const lenguageOpen = document.querySelector('.goto-language');
// const lenguageCloser = document.querySelector('.menuLanguage');
// const menuOrder = document.querySelector('.menuOrder__closer');

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

// find page body
const pageBody = document.querySelector('.page__body');
// find order menu
// const orderMenu = document.querySelector('.grid__menuOrder--order');
// find order form
const orderForm = document.querySelector('.grid__menuOrder--order');
// find pay form
// const payForm = document.querySelector('.menuOrder__userPay');
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

// close order menu
const closeIconClick = document.querySelector('.menuOrder__closer');

turnOnScroll(closeIconClick, pageBody); // turn on scroll on body
removeDisplayNone(closeIconClick, orderForm);
// removeDisplayBlock(closeIconClick, completeOrder);

// click to purchase button
const clickOrderButton = document.querySelector('.menuOrder__button');

addDisplayNone(clickOrderButton, orderForm); // close order form
addDisplayBlock(clickOrderButton, completePage); // open complete message

// click to complete button

/* */

// const completeOrder = document.querySelector('.menuOrder__button');
// const orderForm = document.querySelector('.grid__menuOrder--order');
// const completeOrderOn = document.querySelector('.menuOrder__complete');
// const closeIconClick = document.querySelector('.menuOrder__closer');

// addDisplayBlock(closeIconClick, orderForm);

// completeOrder.addEventListener('click', function() {
//   completeOrderOn.classList.add('hiddenOn');
// });

// completeOrder.addEventListener('click', function() {
//   orderForm.classList.add('hiddenOff');
// });

// const findPage = document.querySelector('.menuOrder__quantity-icon');
// const pageAction = document.querySelector('.menuOrder__quantityMenu');
// const dropNum = document.querySelector('.menuOrder__quantity-number');

// visibleOn(findPage, pageAction);
// visibleOff(findPage, pageAction);

// findPage.addEventListener('click', function() {
//   pageAction.classList.add('hiddenOn');
// });

// dropNum.addEventListener('click', function() {
//   pageAction.classList.remove('hiddenOn');
// });

// menuCloser.addEventListener('click', function() {
//   pageBody.classList.remove('hidden-blocks');
// });

// lenguageOpen.addEventListener('click', function() {
//   pageBody.classList.add('hidden-blocks');
// });

// lenguageCloser.addEventListener('click', function() {
//   pageBody.classList.remove('hidden-blocks');
// });

// menuOrder.addEventListener('click', function() {
//   pageBody.classList.remove('hidden-blocks');
// });
