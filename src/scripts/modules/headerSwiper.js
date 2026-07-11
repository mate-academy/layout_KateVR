export const setupHeaderSwiper = () => {
  const TABLET_MIN_WIDTH = 1280;
  let swiper;

  const initSwiper = () => {
    swiper = new Swiper('.header__swiper', {
      loop: false,
      grabCursor: true,
      scrollbar: {
        el: '.header__scrollbar',
        draggable: true,
      },
      autoplay: {
        delay: 5000,
      },
      speed: 600,
    });

    const prevBtn = document.querySelector('.header__prev-btn');
    const nextBtn = document.querySelector('.header__next-btn');

    const updateHeaderButtons = () => {
      prevBtn.disabled = swiper.isBeginning;
      nextBtn.disabled = swiper.isEnd;
    };

    nextBtn.addEventListener('click', () => {
      swiper.slideNext();
    });

    prevBtn.addEventListener('click', () => {
      swiper.slidePrev();
    });

    swiper.on('slideChange', updateHeaderButtons);
    swiper.on('scrollbarDragEnd', updateHeaderButtons);
    swiper.on('scrollbarDragMove', updateHeaderButtons);
    updateHeaderButtons();
  }

  const destroySwiper = () => {
    if (swiper) {
      swiper.destroy(true, true);
      swiper = null;
    }
  };

  const updateSwiperOnResize = () => {
    const isSmallScreen = window.innerWidth < TABLET_MIN_WIDTH;

    if (isSmallScreen) {
      destroySwiper();
    } else {
      if (!swiper) {
        initSwiper();
      }
    }
  };

  updateSwiperOnResize();

  window.addEventListener('resize', () => {
    updateSwiperOnResize();
  });
}
