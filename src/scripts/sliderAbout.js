export function initSliderAbout() {
  const aboutElem = document.querySelector('.about');
  const slider = aboutElem.querySelector('.slider');
  const images = slider.querySelectorAll('.slider__image');
  const dots = slider.querySelectorAll('.slider__dot');
  const lines = slider.querySelectorAll('.slider__line');
  const buttons = slider.querySelectorAll('.slider__button');
  const counterCurrent = slider.querySelector('.slider__counter-current');

  slider.addEventListener('click', (e) => {
    const dot = e.target.closest('.slider__dot');
    const button = e.target.closest('.slider__button');

    if (dot) {
      setActive(+dot.dataset.index);
    }

    if (button) {
      const currentActiveSlide = slider.querySelector('.slider__image--active');
      const buttonData = button.dataset.sliderControl;
      let nextSlide;

      if (buttonData === 'prev') {
        nextSlide = currentActiveSlide.previousElementSibling;
      }

      if (buttonData === 'next') {
        nextSlide = currentActiveSlide.nextElementSibling;
      }

      if (!nextSlide) return;

      const index = [...images].findIndex(image => image === nextSlide);

      setActive(index);
      setCounter(index);
      setDisabled();
    }
  });

  function setActive(index = 0) {
    images.forEach((image, i) => {
      image.classList.toggle('slider__image--active', i === index);
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle('slider__dot--active', i === index);
    });

    lines.forEach((line, i) => {
      line.classList.toggle('slider__line--active', i === index);
    });
  }

  setActive();

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

  setDisabled();

  function setCounter(index) {
    counterCurrent.textContent = index + 1;
  }
}
