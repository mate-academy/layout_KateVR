'use strict';
const buttonTop = document.getElementById('button-top');
const sensor = document.getElementById('sensor');

buttonTop.addEventListener('click', () => {
  sensor.classList.toggle('visible');

});

const buttonLeft = document.getElementById('button-left');
const connection = document.getElementById('connection');

buttonLeft.addEventListener('click', () => {
  connection.classList.toggle('visible');
});

const buttonRight = document.getElementById('button-right');
const batteries = document.getElementById('batteries');

buttonRight.addEventListener('click', () => {
  batteries.classList.toggle('visible');
});

const techButtons = document.querySelectorAll('.tech__plus');

techButtons.forEach((techButton) => {
  techButton.addEventListener('click', () => {
    techButton.classList.toggle('active'); // Перемикаємо клас active при кліку
  });
});

// Функція для обчислення висоти menu__bottom для кожного меню
function setMenuBottomHeight(menuSelector) {
  const menuTop = document.querySelector(`${menuSelector} .menu__top`);
  const menuBottom = document.querySelector(`${menuSelector} .menu__bottom`);

  // Перевіряємо ширину екрана перед виконанням
  if (window.innerWidth < 768) {
    return; // Виходимо з функції, якщо ширина екрана менше або дорівнює 768px
  }

  if (menuTop && menuBottom) {
    // Отримуємо висоту верхньої частини
    const heightMenuTop = menuTop.offsetHeight;

    // Обчислюємо висоту нижньої частини як залишок від екрану
    const heightMenuBottom = window.innerHeight - heightMenuTop;

    // Встановлюємо висоту нижньої частини меню
    menuBottom.style.height = `${heightMenuBottom}px`;
  }
}

// Викликаємо функцію для кожного меню
setMenuBottomHeight('#menu');
setMenuBottomHeight('#language');
setMenuBottomHeight('#help');

// Якщо потрібно, можна додати слухачі подій для зміни висоти при зміні розміру вікна
window.addEventListener('resize', () => {
  setMenuBottomHeight('#menu');
  setMenuBottomHeight('#language');
  setMenuBottomHeight('#help');
});


const headerButtons = document.querySelectorAll('.btn-toggle__button');

headerButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Видаляємо клас active з усіх елементів
    document.querySelector('.btn-toggle__button.active')?.classList.remove('active');

    // Додаємо клас active до натиснутого елемента
    button.classList.add('active');
  });
});

const fixed = document.getElementById('fixed');

const scrollThreshold = 300;

// Додаємо обробник події скролу
window.addEventListener('scroll', () => {
  // Визначаємо кількість прокручених пікселів
  const scrolled = window.scrollY || document.documentElement.scrollTop;

  // Перевіряємо, чи прокручено достатньо
  if (scrolled > scrollThreshold) {
    fixed.classList.remove('fixed--hidden');
  } else {
    fixed.classList.add('fixed--hidden');
  }
});


