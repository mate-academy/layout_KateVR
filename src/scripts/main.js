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

  const dropdown = document.querySelector('.select-top');
  const dropdownButton = dropdown.querySelector('.select-top__en');

  dropdownButton.addEventListener('click', (event) => {
    event.preventDefault();

    dropdown.classList.toggle('select-top--active');
  });

  //select buyNow

  const buyNow = document.querySelector('.select-buynow');
  const buyNowButton = buyNow.querySelector('.select-buynow__one');

  buyNowButton.addEventListener('click', (event) => {
    event.preventDefault();

    buyNow.classList.toggle('select-top--active');
  });

/*   for (let i = 0; i < buyNowButton.length; i++) {
    buyNowButton[i].addEventListener('click', (e) => {
      e.preventDefault();
      buyNow[i].classList.toggle('select-top--active');
    });
  } */

  //select city

  const country = document.querySelector('.select-country');
  const countryButton = country.querySelector('.select-country__first');

  countryButton.addEventListener('click', (event) => {
    event.preventDefault();

    country.classList.toggle('select-country--active');
  });
/*
  for (let i = 0; i < buyNowCityButton.length; i++) {
    buyNowCityButton[i].addEventListener('click', (ev) => {
      ev.preventDefault();
      buyNowCity[i].classList.toggle('select-top--active');
    }); */


  const city = document.querySelector('.select-city');
  const cityButton = city.querySelector('.select-city__one');

  cityButton.addEventListener('click', (event) => {
    event.preventDefault();

    city.classList.toggle('select-city--active');
  });
