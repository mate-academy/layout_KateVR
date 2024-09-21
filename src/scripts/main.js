'use strict';
  // swiper for about block

  var imgSwiper = new Swiper('.slider-content',{
    slidesPerView: 1,
    spaceBetween: 0,
    grabCursor: true,
    slideToClickedSlide: true,
   // loop: true,
    //speed: 500,
    autoplay: {
      deplay: 1000,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // scrollbar: {el: '.swiper-scrollbar', draggable: true},
  });

// button

const buyNowLink = document.querySelector('.page__button');
const getInTouchSection = document.getElementById('contact-us');
const getInTouchTop = getInTouchSection.offsetTop;
const windowHeight = window.innerHeight;

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  if (scrollY > getInTouchTop - windowHeight) {
    buyNowLink.classList.add('page__button--hidden');
  } else {
    buyNowLink.classList.remove('page__button--hidden');
  }
});


// select language

  const dropdown = document.querySelectorAll('.select-top');
  const dropdownButton = document.querySelectorAll('.select-top__en');

  for (let i = 0; i < dropdownButton.length; i++) {
    dropdownButton[i].addEventListener('click', (event) => {
      event.preventDefault();
      dropdown[i].classList.toggle('select-top__active');
    });
  };

  //select buyNow

  const buyNow = document.querySelectorAll('.select-buynow');
  const buyNowButton = document.querySelectorAll('.select-buynow__one');

  for (let i = 0; i < buyNowButton.length; i++) {
    buyNowButton[i].addEventListener('click', (e) => {
      e.preventDefault();
      buyNow[i].classList.toggle('select-top__active');
    });
  }

  //select city

  const buyNowCity = document.querySelectorAll('.select-buynow__city');
  const buyNowCityButton = document.querySelectorAll('.select-buynow__first');

  for (let i = 0; i < buyNowCityButton.length; i++) {
    buyNowCityButton[i].addEventListener('click', (ev) => {
      ev.preventDefault();
      buyNowCity[i].classList.toggle('select-top__active');
    });
  }
