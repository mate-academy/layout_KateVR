'use strict';

const form = document.querySelector('form');
const inputs = document.querySelectorAll('.contact__fild');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  inputs.forEach(function(elem) {
    elem.value = '';
  });
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu-drop') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '.item') {
    document.body.classList.add('page__body--with-item');
  } else {
    document.body.classList.remove('page__body--with-item');
  }
});
// function newSlider(slider) {
//   const btnPrev = slider.querySelector('.button--prev');
//   const btnNext = slider.querySelector('.button--next');
//   const list = slider.querySelector('.list');
//   const counter = slider.querySelector('.counter');

//   const slideCount = list.childElementCount;

//   let currentPosition = 0;

//   function moveTo(targetPosition) {
//     if (targetPosition < 0) {
//       currentPosition = slideCount - 1;
//     } else if (targetPosition > slideCount - 1) {
//       currentPosition = 0;
//     } else {
//       currentPosition = targetPosition;
//     }

//     counter.textContent = currentPosition + 1;

//     list.style.transform = `translateX(${-currentPosition * 100}%)`;
//   }

//   btnNext.addEventListener('click', () => {
//     moveTo(currentPosition + 1);
//   });

//   btnPrev.addEventListener('click', () => {
//     moveTo(currentPosition - 1);
//   });

//   moveTo(0);
// }

// const slider1 = document.getElementById('slider1');

// newSlider(slider1, true);

const myVideo = document.getElementById('video1');
const myPlay = document.getElementById('play');

myPlay.addEventListener('click', () => {
  if (myVideo.paused) {
    myVideo.play();
  } else {
    myVideo.pause();
  }
});

document.querySelectorAll('.tech__button').forEach(function(techBtn) {
  techBtn.addEventListener('click', function(event) {
    document.querySelectorAll('.tech__descripton-card')
      .forEach(function(techContent) {
        techContent.classList.remove('is-active');
      });

    document.querySelector('#button-one').addEventListener('click', function() {
      document.querySelector('#card-one').classList.toggle('is-active');
    });

    document.querySelector('#button-two').addEventListener('click', function() {
      document.querySelector('#card-two').classList.toggle('is-active');
    });

    // eslint-disable-next-line max-len
    document.querySelector('#button-three').addEventListener('click', function() {
      document.querySelector('#card-three').classList.toggle('is-active');
    });
  });
});
