export function initSlider() {
  const sliders = document.querySelectorAll('[data-slider]');
  const value = document.querySelector('.product__value');

  if (!sliders.length) return;

  sliders.forEach(sliderElement => {
    const sliderId = sliderElement.dataset.slider;
    const controls = document.querySelector(`[data-slider-controls="${sliderId}"]`);

    if (!controls) return;

    const images = sliderElement.querySelectorAll('.slider__image');
    const leftButton = controls.querySelector('.slider__button--left');
    const rightButton = controls.querySelector('.slider__button--right');
    const progressLine = controls.querySelector('.slider__line');
    const pagination = controls.querySelector('.slider__pagination');
    const dots = pagination?.querySelectorAll('.slider__dot');

    if (!leftButton || !rightButton || !images.length) return;

    let currentStep = 1;
    const totalSteps = images.length;

    const updateSlider = () => {
      images.forEach((img, index) => {
        img.classList.toggle('slider__image--active', index === currentStep - 1);

        if (sliderId === 'product') {
          value.textContent = currentStep;
        }
      });

      leftButton.classList.toggle('slider__button--disabled', currentStep === 1);
      leftButton.classList.toggle('slider__button--active', currentStep !== 1);

      rightButton.classList.toggle('slider__button--disabled', currentStep === totalSteps);
      rightButton.classList.toggle('slider__button--active', currentStep !== totalSteps);

      if (progressLine) {
        progressLine.style.transform = `translateX(${(currentStep - 1) * 100}%)`;
      }

      if (dots && dots.length) {
        dots.forEach((dot, index) => {
          dot.classList.toggle('slider__dot--active', index === currentStep - 1);
        });
      }
    };

    rightButton.addEventListener('click', () => {
      if (currentStep < totalSteps) {
        currentStep++;
        updateSlider();
      }
    });

    leftButton.addEventListener('click', () => {
      if (currentStep > 1) {
        currentStep--;
        updateSlider();
      }
    });

    if (dots && dots.length) {
      dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
          currentStep = index + 1;
          updateSlider();
        });
      });
    }

    let touchStartX = 0;
    let touchEndX = 0;

    sliderElement.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    sliderElement.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });

    const handleSwipe = () => {
      const swipeThreshold = 50;
      const diff = touchStartX - touchEndX;

      if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0 && currentStep < totalSteps) {
          currentStep++;
          updateSlider();
        } else if (diff < 0 && currentStep > 1) {
          currentStep--;
          updateSlider();
        }
      }
    };

    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft' && currentStep > 1) {
        currentStep--;
        updateSlider();
      } else if (e.key === 'ArrowRight' && currentStep < totalSteps) {
        currentStep++;
        updateSlider();
      }
    });

    updateSlider();
  });
}
