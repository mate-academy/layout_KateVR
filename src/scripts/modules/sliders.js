export const sliders = () => {
  let heroSwiper = new Swiper('.hero__swiper', {
    effect: 'fade',
    pagination: {
      el: '.hero-bottom__line',
      type: 'progressbar',
    },
    navigation: {
      nextEl: '.hero-bottom__next',
      prevEl: '.hero-bottom__prev',
    },
  });
  const fraction = document.getElementById('fraction');
  const slides = document.querySelectorAll(
    '.about-slider__swiper--desktop .swiper-slide',
  );
  const slideCount = slides.length;
  fraction.textContent = `1 / ${slideCount}`;
  const aboutSwiperDesktop = new Swiper('.about-slider__swiper--desktop', {
    effect: 'fade',
    navigation: {
      nextEl: '.about-slider__navigation--next',
      prevEl: '.about-slider__navigation--prev',
    },
    pagination: {
      el: '.about-slider__progressbar',
      type: 'progressbar',
    },
    on: {
      slideChange: () => {
        fraction.textContent = `${aboutSwiperDesktop.realIndex + 1} / ${slideCount}`;
      },
    },
  });
  const aboutSwiperMobile = new Swiper('.about-slider__swiper--mobile', {
    effect: 'fade',
    pagination: {
      el: '.about-slider__pagination',
    },
  });
};
