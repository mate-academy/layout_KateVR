'use strict';

const pageBody = document.querySelector('.page__body');
// const menuOpen = document.querySelector('.header__menu');
const menuCloser = document.querySelector('.menuByList--item');
const lenguageOpen = document.querySelector('.goto-language');
const lenguageCloser = document.querySelector('.menuLanguage');
const menuOrder = document.querySelector('.menuOrder__closer');

function visibleOff(find, page) {
  find.addEventListener('click', function() {
    page.classList.add('hiddenOn');
  });
}

function visibleOn(find, page) {
  find.addEventListener('click', function() {
    page.classList.remove('hiddenOn');
  });
}

const completeOrder = document.querySelector('.menuOrder__button');
const orderForm = document.querySelector('.grid__menuOrder--order');
const completeOrderOn = document.querySelector('.menuOrder__complete');

completeOrder.addEventListener('click', function() {
  completeOrderOn.classList.add('hiddenOn');
});

completeOrder.addEventListener('click', function() {
  orderForm.classList.add('hiddenOff');
});

const findPage = document.querySelector('.menuOrder__quantity-icon');
const pageAction = document.querySelector('.menuOrder__quantityMenu');
const dropNum = document.querySelector('.menuOrder__quantity-number');

visibleOn(findPage, pageAction);
visibleOff(findPage, pageAction);

findPage.addEventListener('click', function() {
  pageAction.classList.add('hiddenOn');
});

dropNum.addEventListener('click', function() {
  pageAction.classList.remove('hiddenOn');
});

menuCloser.addEventListener('click', function() {
  pageBody.classList.remove('hidden-blocks');
});

lenguageOpen.addEventListener('click', function() {
  pageBody.classList.add('hidden-blocks');
});

lenguageCloser.addEventListener('click', function() {
  pageBody.classList.remove('hidden-blocks');
});

menuOrder.addEventListener('click', function() {
  pageBody.classList.remove('hidden-blocks');
});
