import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: false,
  navigation: {
    nextEl: '.swiper__button-next',
    prevEl: '.swiper__button-prev',
  },
  pagination: {
    el: '.swiper__pagination',
  },
  autoplay: {
    delay: 3000,
  },
});
