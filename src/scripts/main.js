/* eslint-disable max-len */
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#mobile-menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

window.addEventListener('load', () => {
  for (const element of document.getElementsByClassName('faq__question')) {
    element.addEventListener('click', (e) => {
      if (e.target.nextElementSibling.classList.contains('faq__open--is')) {
        e.target.nextElementSibling.classList.remove('faq__open--is');
      } else {
        e.target.nextElementSibling.classList.add('faq__open--is');
      }
    });
  }

  const slidesCountElement = document.getElementById('slidesCount');

  // eslint-disable-next-line no-new
  new Swiper('.image-slider', {
    modules: [Navigation, Pagination],
    spaceBetween: 10,
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    on: {
      init: function(sw) {
        slidesCountElement.innerText = `${sw.realIndex + 1} / ${sw.slides.length}`;
      },
      slideChange: function(sw) {
        slidesCountElement.innerText = `${sw.realIndex + 1} / ${sw.slides.length}`;
      },
    },
    breakpoints: {
      320: {
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          dynamicBullets: true,
        },
      },
      769: {
        pagination: {
          el: '.swiper-pagination',
          type: 'progressbar',
        },
      },
    },
  });

  tippy('#popupTop', {
    trigger: 'click',
    placement: 'bottom',
    arrow: false,
    theme: 'tech',
    content: `
      <h3>Sensor</h3>
      <p>Weight: 35g/1.23oz each</p>
      <p>Dimension: 50mm/1.97in 24mm/0.94in</p>
      <p>Light: LED lights</p>
    `,
    allowHTML: true,
  });

  tippy('#popupRight', {
    trigger: 'click',
    placement: 'bottom',
    arrow: false,
    theme: 'tech',
    content: `
      <h3>Connection</h3>
      <p>Wireless: Bluetooth 4.2</p>
      <p>Signal range: 5m</p>
      <p>Receiver: USB 2.0 and above</p>
    `,
    allowHTML: true,
  });

  tippy('#popupBottom', {
    trigger: 'click',
    placement: 'bottom',
    arrow: false,
    theme: 'tech',
    content: `
      <h3>Batteries</h3>
      <p>Type: Lthium-lon polymer batteries</p>
      <p>Capacity: 370mAh</p>
      <p>Battery life: 10h of continuous use 150 hours on stand by</p>
      <p>Charging: Fast charging - 1 hour</p>
      <p>Charging voltage and current: 5V = 0.5A</p>`,
    allowHTML: true,
  });

  document.getElementById('form').addEventListener('submit', (event) => {
    event.preventDefault();
    document.getElementById('form').reset();
  });
});
