export function initSliderHeader() {
  const BUTTON_PREV = 'prev';
  const BUTTON_NEXT = 'next';

  const headerElem = document.querySelector('.header');
  const slider = headerElem.querySelector('.slider');
  const images = headerElem.querySelectorAll('.slider__image');
  const lines = headerElem.querySelectorAll('.header__slider-line');
  const controlButtonsElem = headerElem.querySelector(
    '.header__slider-buttons',
  );
  const buttons = controlButtonsElem.querySelectorAll('button');

  images[0].classList.add('slider__image--active');
  lines[0].classList.add('header__slider-line--active');
  setDisabled();

  controlButtonsElem.addEventListener('click', (e) => {
    const button = e.target.closest('.header__button');

    if (!button) return;

    const currentActiveSlide = slider.querySelector('.slider__image--active');
    const buttonData = button.dataset.sliderControl;
    let nextSlide;

    if (buttonData === BUTTON_PREV) {
      nextSlide = currentActiveSlide.previousElementSibling;
    }

    if (buttonData === BUTTON_NEXT) {
      nextSlide = currentActiveSlide.nextElementSibling;
    }

    if (!nextSlide) return;

    const index = [...images].findIndex(image => image === nextSlide);

    setActiveSlide(index);
    setDisabled();
  });

  function setActiveSlide(index) {
    images.forEach((image, i) => {
      image.classList.toggle('slider__image--active', index === i);
    });
    lines.forEach((line, i) => {
      line.classList.toggle('header__slider-line--active', index === i);
    });
  }

  function setDisabled() {
    const [prev, next] = buttons;
    const isFirstSlideActive = images[0].classList.contains(
      'slider__image--active',
    );
    const isLastSlideActive = images[images.length - 1].classList.contains(
      'slider__image--active',
    );

    prev.disabled = isFirstSlideActive;
    next.disabled = isLastSlideActive;
  }
}
