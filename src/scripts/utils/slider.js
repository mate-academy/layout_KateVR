export const slider = (sliderConfig) => {
  const {
    slidesSelector,
    progressLineSelector,
    prevBtnSelector,
    nextBtnSelector,
    counterElementSelector,
    dotsSelector,
  } = sliderConfig;

  const slides = document.querySelectorAll(slidesSelector);
  const progressLine = document.querySelector(progressLineSelector);
  const prevBtn = document.querySelector(prevBtnSelector);
  const nextBtn = document.querySelector(nextBtnSelector);
  const counterElement = counterElementSelector
    ? document.querySelector(counterElementSelector)
    : null;
  const dotsContainer = dotsSelector
    ? document.querySelector(dotsSelector)
    : null;

  let counter = 0;
  const totalSlides = slides.length;

  slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
  });

  function createDots() {
    if (!dotsContainer) {
      console.warn('Dots container not found');
      return;
    }

    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      dot.addEventListener('click', () => goToSlide(i));
      dotsContainer.appendChild(dot);
    }
  }
  function updateSlider() {
    slides.forEach((slide) => {
      slide.style.transform = `translateX(-${counter * 100}%)`;
    });

    if (progressLine) {
      progressLine.style.width = `${((counter + 1) / totalSlides) * 100}%`;
    }

    if (counterElement) {
      counterElement.textContent = `${counter + 1}/${totalSlides}`;
    }

    if (dotsContainer) {
      const dots = dotsContainer.querySelectorAll('.dot');
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === counter);
      });
    }

    prevBtn.disabled = counter === 0;
    nextBtn.disabled = counter === totalSlides - 1;
  }

  function goToSlide(index) {
    counter = index;
    updateSlider();
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (counter > 0) {
        counter--;
        updateSlider();
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (counter < totalSlides - 1) {
        counter++;
        updateSlider();
      }
    });
  }

  setInterval(() => {
    if (counter < totalSlides - 1) {
      counter++;
    } else {
      counter = 0;
    }
    updateSlider();
  }, 5000);

  createDots();
  updateSlider();
};

export const headerSliderConfig = {
  slidesSelector: '.header__hero-slider-image',
  progressLineSelector: '.slider__progress-line',
  prevBtnSelector: '#Prev',
  nextBtnSelector: '#Next',
};

export const aboutUsSliderConfig = {
  slidesSelector: '.about-us__slider-slide',
  progressLineSelector: '.about-us__slider-progress-line',
  prevBtnSelector: '#goBack',
  nextBtnSelector: '#goNext',
  counterElementSelector: '.about-us__slider-counter',
  dotsSelector: '.about-us__slider-dots',
};
