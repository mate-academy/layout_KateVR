const aboutFraction = document.querySelector('.about__fraction');
const aboutSlides = document.querySelectorAll('.about-slider__slide');
const aboutSpan = document.createElement('span');

const bulletsContainer = document.querySelector('.about__bullets');

function showBullets() {
  aboutSlides.forEach((item) => {
    const bullet = document.createElement('span');
    bullet.classList.add('about__bullet');

    bulletsContainer.append(bullet);
  })
};

function updateBullets() {
  const currentBullet = updateFraction().slice(0, 1);
  const bullets = document.querySelectorAll('.about__bullet');
  const index = +currentBullet - 1;

  bullets.forEach(item => {
    if (item.classList.contains('_cur')) {
      item.classList.remove('_cur');
    }
  })

  bullets[index].classList.add('_cur');
}

function updateFraction() {
  const activeSlide = document
    .querySelector('.about-slider__slide.swiper-slide-active')
    .getAttribute('aria-label');

    const normalizedFraction = activeSlide.replaceAll(' ', '');
    aboutFraction.textContent = `${normalizedFraction}`;

    return normalizedFraction;
}

new Swiper('.hero-slider', {
  navigation: {
    nextEl: '.hero__next',
    prevEl: '.hero__prev',
  },

  effect: 'fade',

  pagination: {
    el: '.hero__progressbar',
    type: 'progressbar',
  }
});

new Swiper('.about-slider', {
  navigation: {
    nextEl: '.about__next',
    prevEl: '.about__prev',
  },

  effect: 'fade',

  autoplay: {
    delay: 2000,
  },

  pagination: {
    el: '.about__progressbar',
    type: 'progressbar',
  },

  on: {
    slideChangeTransitionStart: updateFraction,
    slideChangeTransitionStart: updateBullets,
  }
});

showBullets();
updateBullets();
updateFraction();
