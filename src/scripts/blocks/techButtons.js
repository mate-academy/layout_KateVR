'use strict';

const btn = document.querySelectorAll('.tech__button');

const btnFirst = document.querySelector('.tech__button--1');
const btnFirstMsg = document.querySelector('.tech__button-message--1');

const btnSecond = document.querySelector('.tech__button--2');
const btnSecondMsg = document.querySelector('.tech__button-message--2');

const btnThird = document.querySelector('.tech__button--3');
const btnThirdMsg = document.querySelector('.tech__button-message--3');

btn.forEach(function(button) {
  button.addEventListener('click', function() {
    if (button.innerText === '-') {
      button.innerText = '+';
      button.classList.remove('tech__button--pressed');
    } else {
      button.innerText = '-';
      button.classList.add('tech__button--pressed');
    }
  });
});

btnFirst.addEventListener('click', () => {
  btnFirstMsg.classList.toggle('tech__button-message--visible');

  btnSecond.classList.remove('tech__button--pressed');
  btnSecondMsg.classList.remove('tech__button-message--visible');
  btnSecond.innerText = '+';

  btnThird.classList.remove('tech__button--pressed');
  btnThirdMsg.classList.remove('tech__button-message--visible');
  btnThird.innerText = '+';
});

btnSecond.addEventListener('click', () => {
  btnSecondMsg.classList.toggle('tech__button-message--visible');

  btnFirst.classList.remove('tech__button--pressed');
  btnFirstMsg.classList.remove('tech__button-message--visible');
  btnFirst.innerText = '+';

  btnThird.classList.remove('tech__button--pressed');
  btnThirdMsg.classList.remove('tech__button-message--visible');
  btnThird.innerText = '+';
});

btnThird.addEventListener('click', () => {
  btnThirdMsg.classList.toggle('tech__button-message--visible');

  btnFirst.classList.remove('tech__button--pressed');
  btnFirstMsg.classList.remove('tech__button-message--visible');
  btnFirst.innerText = '+';

  btnSecond.classList.remove('tech__button--pressed');
  btnSecondMsg.classList.remove('tech__button-message--visible');
  btnSecond.innerText = '+';
});
