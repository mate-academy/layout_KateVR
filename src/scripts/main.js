'use strict';

document.querySelectorAll('.buy-button');

document.body.addEventListener('click', function(event) {
  if (event.target.classList.contains('buy-button')) {
    redirectToOtherPage();
  }
});

function redirectToOtherPage() {
  window.location.href = '#place-order';
}

document.getElementById('header__button-conteiner');

document.body.addEventListener('click', function(event) {
  if (event.target.classList.contains('buyVideo')) {
    redirectToOtherPageVideo();
  }
});

function redirectToOtherPageVideo() {
  window.location.href = '#video';
}

document.getElementById('complete-id');

document.body.addEventListener('click', function(event) {
  if (event.target.classList.contains('complete-id')) {
    redirectToOtherPageHome();
  }
});

function redirectToOtherPageHome() {
  window.location.href = '#';
}

document.querySelectorAll('.complete__button');

document.body.addEventListener('click', function(event) {
  if (event.target.classList.contains('complete__button')) {
    redirectToOtherHome();
  }
});

function redirectToOtherHome() {
  window.location.href = '#';
}

document.body.addEventListener('click', function(event) {
  if (event.target.classList.contains('place-order__button')) {
    const form = document.querySelector('.place-order__forms');

    if (form.checkValidity()) {
      redirectToOtherPay();
    } else {
    }
  }
});

function redirectToOtherPay() {
  window.location.href = '#pay';
}

document.body.addEventListener('click', function(event) {
  if (event.target.classList.contains('pay__button')) {
    const form = document.querySelector('.pay__forms');

    if (form.checkValidity()) {
      redirectToOtherComplete();
    } else {
    }
  }
});

function redirectToOtherComplete() {
  window.location.href = '#complete';
}
