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

const buyOrder = document.getElementById('place-order__button-id');

buyOrder.addEventListener('click', function() {
  redirectToOtherPageOrder();
});

function redirectToOtherPageOrder() {
  window.location.href = '#pay';
}

const buyPay = document.getElementById('pay-id');

buyPay.addEventListener('click', function() {
  redirectToOtherPagePay();
});

function redirectToOtherPagePay() {
  window.location.href = '#complete';
}

const buyComplete = document.getElementById('complete-id');

buyComplete.addEventListener('click', function() {
  redirectToOtherPageComplete();
});

function redirectToOtherPageComplete() {
  window.location.href = '#';
}

document.addEventListener('DOMContentLoaded', function() {
  // Отримуємо посилання на елементи
  const showButton = document.getElementById('icon-id');
  const hiddenElement = document.getElementById('tech_window');

  // Додаємо обробник події для кліку на кнопці
  showButton.addEventListener('click', function() {
    // Перевіряємо, чи елемент прихований
    if (hiddenElement.style.display === 'none') {
      // Якщо так, робимо його видимим
      hiddenElement.style.display = 'block';
    } else {
      // Якщо ні, приховуємо його
      hiddenElement.style.display = 'none';
    }
  });
});
