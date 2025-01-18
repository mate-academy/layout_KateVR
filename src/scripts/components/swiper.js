import Swiper from 'swiper';
import { Navigation, Pagination, Scrollbar, Autoplay, Controller } from 'swiper/modules';
import 'swiper/swiper.min.css';
import 'swiper/modules/pagination.min.css';
import 'swiper/modules/navigation.min.css';
import 'swiper/modules/scrollbar.min.css';
import 'swiper/modules/autoplay.min.css';

export const headerSlider = new Swiper('.header__slider', {
  modules: [Navigation, Scrollbar, Autoplay],
  autoHeight: true,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next-header",
    prevEl: ".swiper-button-prev-header",
  },
  scrollbar: {
    el: ".swiper-scrollbar-header",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

export const slider = new Swiper('.slider', {
  modules: [Navigation, Pagination, Scrollbar, Controller],
  autoHeight: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next-out",
    prevEl: ".swiper-button-prev-out",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

export const sliderFraction = new Swiper('.slider', {
  modules: [Pagination],
  pagination: {
    el: ".swiper-pagination--fraction",
    type: "fraction",
  },
});

slider.controller.control = sliderFraction;
