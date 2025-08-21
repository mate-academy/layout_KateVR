export const setupAboutSwiper = () => {
  const TABLET_MIN_WIDTH = 1280;
  let aboutSwiper;

  const initSwiper = () => {
    aboutSwiper = new Swiper('.about__swiper', {
      loop: false,
      grabCursor: true,
      pagination: {
        el: window.innerWidth < TABLET_MIN_WIDTH ? '.about__bullets' : '.about__fraction',
        type: window.innerWidth < TABLET_MIN_WIDTH ? 'bullets' : 'fraction',
        clickable: true,
      },
      scrollbar: {
        el: '.about__scrollbar',
        draggable: true,
      },
      spaceBetween: 10,
    });

    const prevBtn = document.querySelector('.about__prev-btn');
    const nextBtn = document.querySelector('.about__next-btn');

    const updateAboutButtons = () => {
      prevBtn.disabled = aboutSwiper.isBeginning;
      nextBtn.disabled = aboutSwiper.isEnd;
    };

    prevBtn.addEventListener('click', () => {
      aboutSwiper.slidePrev();
    });

    nextBtn.addEventListener('click', () => {
      aboutSwiper.slideNext();
    });

    aboutSwiper.on('slideChange', updateAboutButtons);
    aboutSwiper.on('scrollbarDragEnd', updateAboutButtons);
    aboutSwiper.on('scrollbarDragMove', updateAboutButtons);
    updateAboutButtons();
  };

  const updateSwiperOnResize = () => {
    const isSmallScreen = window.innerWidth < TABLET_MIN_WIDTH;

    if (isSmallScreen && !aboutSwiper.pagination.bullets.length) {
      aboutSwiper.destroy();
      initSwiper();
    } else if (!isSmallScreen && aboutSwiper.pagination.bullets.length) {
      aboutSwiper.destroy();
      initSwiper();
    }
  };

  initSwiper();

  window.addEventListener('resize', () => {
    updateSwiperOnResize();
  });
}
