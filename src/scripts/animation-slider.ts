import { myUtils } from "./myUtils";

export const animationSlider = () => {
  const slider = (exSwiper: HTMLElement, exPagination: HTMLElement) => {
    const wrappers = exSwiper.querySelectorAll(
      '.ex-wrapper',
    ) as NodeListOf<HTMLElement>;

    const effect = exSwiper.querySelector('.ex-effect') as HTMLElement;

    const maxFrame = wrappers.length;

    const curve = [
      { pos: 0, value: 0 },
      { pos: 0.2, value: 0.8 },
      { pos: 0.5, value: 1 },
      { pos: 0.8, value: 0.8 },
      { pos: 1, value: 0 },
    ];
    const mod = (n, m) => ((n % m) + m) % m;

    let widthSwiper = exSwiper.clientWidth;
    let currentIndex = 0;

    let nextIndex = mod(currentIndex + 1, maxFrame);
    let prevIndex = mod(currentIndex - 1, maxFrame);

    const setCurrentIndex = (index) => {
      exPagination.style.setProperty('--max-frame', maxFrame.toString());
      exPagination.style.setProperty('--current-frame', index.toString());
      currentIndex = index;

      nextIndex = mod(currentIndex + 1, maxFrame);
      prevIndex = mod(currentIndex - 1, maxFrame);
    };

    let animValue = 0;
    let stop: Function | null = null;

    const setAnimValue = (value: number) => {
      if (value < 0) {
        const absValue = Math.abs(value);

        effect.style.setProperty(
          '--width',
          String(myUtils.getValueFromCurve(curve, absValue)),
        );
        effect.style.setProperty('--left', String(absValue));

        wrappers[nextIndex].style.setProperty('--right', '100%');
        wrappers[nextIndex].style.setProperty('--left', '100%');

        wrappers[currentIndex].style.setProperty('--right', '0%');
        wrappers[currentIndex].style.setProperty('--left', absValue * 100 + '%');
        wrappers[prevIndex].style.setProperty(
          '--right',
          (1 - absValue) * 100 + '%',
        );
        wrappers[prevIndex].style.setProperty('--left', '0%');
      } else {
        effect.style.setProperty(
          '--width',
          String(myUtils.getValueFromCurve(curve, value)),
        );
        effect.style.setProperty('--left', String(1 - value));

        wrappers[prevIndex].style.setProperty('--right', '100%');
        wrappers[prevIndex].style.setProperty('--left', '100%');

        wrappers[currentIndex].style.setProperty('--left', '0%');
        wrappers[currentIndex].style.setProperty('--right', value * 100 + '%');
        wrappers[nextIndex].style.setProperty('--left', (1 - value) * 100 + '%');
        wrappers[nextIndex].style.setProperty('--right', '0%');
      }

      animValue = value;
    };

    type AnimEndType = 'auto' | 'next' | 'prev';

    const animTween = (
      endValue: number,
      duration: number,
      animEndType: AnimEndType = 'auto',
    ) => {
      stop = myUtils.tween(
        animValue,
        endValue,
        duration,
        (value) => {
          setAnimValue(value);
        },
        (value) => {
          stop = null;
          animEnd(value, 200, animEndType);
        },
      );
    };

    const animEnd = (
      value: number,
      duration: number,
      animEndType: AnimEndType = 'auto',
    ) => {
      if (animEndType === 'auto') {
        if (value === -1) {
          wrappers[nextIndex].style.setProperty('--right', '100%');
          wrappers[nextIndex].style.setProperty('--left', '100%');

          wrappers[currentIndex].style.setProperty('--right', '100%');
          wrappers[currentIndex].style.setProperty('--left', '100%');
          wrappers[prevIndex].style.setProperty('--left', '0%');
          wrappers[prevIndex].style.setProperty('--right', '0%');

          setCurrentIndex(prevIndex);

          animValue = 0;

          return;
        }

        if (value === 1) {
          wrappers[prevIndex].style.setProperty('--right', '100%');
          wrappers[prevIndex].style.setProperty('--left', '100%');

          wrappers[currentIndex].style.setProperty('--right', '100%');
          wrappers[currentIndex].style.setProperty('--left', '100%');
          wrappers[nextIndex].style.setProperty('--left', '0%');
          wrappers[nextIndex].style.setProperty('--right', '0%');

          setCurrentIndex(nextIndex);

          animValue = 0;

          return;
        }

        if (value === 0) {
          wrappers[prevIndex].style.setProperty('--right', '100%');
          wrappers[prevIndex].style.setProperty('--left', '100%');

          wrappers[nextIndex].style.setProperty('--right', '100%');
          wrappers[nextIndex].style.setProperty('--left', '100%');
          wrappers[currentIndex].style.setProperty('--left', '0%');
          wrappers[currentIndex].style.setProperty('--right', '0%');

          animValue = 0;

          return;
        }
        const currentDuration = duration - value / duration;

        if (value > 0.5) {
          animTween(1, currentDuration);
          return;
        }

        if (value < -0.5) {
          animTween(-1, currentDuration);
          return;
        }
        animTween(0, currentDuration);
      }

      const currentDuration = duration - value / duration;

      if (animEndType === 'next') {
        animTween(1, currentDuration);
      }

      if (animEndType === 'prev') {
        animTween(-1, currentDuration);
      }
    };

    const increaseIndex = (duration = 1600) => {
      if (stop) {
        return;
      }

      animTween(1, duration);
    };

    const decreaseIndex = (duration = 1600) => {
      if (stop) {
        return;
      }

      animTween(-1, duration);
    };

    wrappers.forEach((wrapper, index) => {
      if (index === currentIndex) {
        wrapper.style.setProperty('--right', '0%');
        wrapper.style.setProperty('--left', '0%');
      } else {
        wrapper.style.setProperty('--right', '100%');
        wrapper.style.setProperty('--left', '100%');
      }
    });

    const autoAnim = () => {
      let animId = -1;

      const anim = () => {
        animId = setTimeout(() => {
          increaseIndex();
          anim();
        }, 3000);
      };

      anim();

      return () => {
        clearTimeout(animId);
      };
    };

    let stopAutoAnim = autoAnim();

    let timerId = 0;

    const startTimerAutoAnim = () => {
      if (timerId) {
        clearTimeout(timerId);
      }

      timerId = setTimeout(() => {
        stopAutoAnim = autoAnim();
      }, 4000);
    };

    const next = () => {
      increaseIndex(600);
      stopAutoAnim();
      startTimerAutoAnim();
    };

    const prev = () => {
      decreaseIndex(600);
      stopAutoAnim();
      startTimerAutoAnim();
    };

    let stopAnim = () => {
      stopAutoAnim();
      if (stop) {
        stop();
        stop = null;
      }
    };

    return {
      stop: () => {
        stopAnim();
      },

      startAutoAnim: () => {
        stopAutoAnim();
        startTimerAutoAnim();
      },

      getAnimValue: () => {
        return animValue;
      },

      setAnimValue: (value) => {
        setAnimValue(value);
      },

      next: () => {
        next();
      },

      animEnd: (value: number, duration: number) => {
        animEnd(value, duration);
      },

      prev: () => {
        prev();
      },

      getWidthSwiper: () => {
        return widthSwiper;
      },
    };
  };

  const movePointer = (
    objSwiper,
    swiper: HTMLElement,
    next: HTMLElement,
    prev: HTMLElement,
  ) => {
    prev.addEventListener('click', () => {
      objSwiper.prev();
    });

    next.addEventListener('click', () => {
      objSwiper.next();
    });

    let startCursorX: number | null = null;
    let offsetValue: number | null = null;

    const pointerMove = (event: PointerEvent) => {
      const target = event.target as HTMLElement;
      if (!target.hasPointerCapture(event.pointerId)) return;
      if (!startCursorX) {
        return;
      }
      const ofsetX = (startCursorX - event.pageX) * 2.5;

      const value = offsetValue + ofsetX / objSwiper.getWidthSwiper();

      const clampValue = Math.max(Math.min(value, 1), -1);

      objSwiper.setAnimValue(clampValue);
    };

    swiper.addEventListener('pointerdown', (event) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.ex-wrapper')) {
        return;
      }
      objSwiper.stop();

      target.setPointerCapture(event.pointerId);

      startCursorX = event.pageX;
      offsetValue = objSwiper.getAnimValue();

      swiper.addEventListener('pointermove', pointerMove);
    });

    swiper.addEventListener('pointerup', (event: PointerEvent) => {
      const target = event.target as HTMLElement;

      if (target.hasPointerCapture(event.pointerId)) {
        target.releasePointerCapture(event.pointerId);
      }
      if (!target.closest('.ex-wrapper')) {
        return;
      }
      swiper.removeEventListener('pointermove', pointerMove);

      objSwiper.startAutoAnim();
      objSwiper.animEnd(objSwiper.getAnimValue(), 100);
      startCursorX = null;
      offsetValue = null;
    });
  };

  const exSwiper1 = document.querySelector('#ex-swiper-1') as HTMLElement;
  const exPagination1 = document.querySelector(
    '#swiper-pagination-1',
  ) as HTMLElement;
  const exNext1 = document.querySelector('#ex-button-next-1') as HTMLElement;
  const exPrev1 = document.querySelector('#ex-button-prev-1') as HTMLElement;
  const objSwiper1 = slider(exSwiper1, exPagination1);

  movePointer(objSwiper1, exSwiper1, exNext1, exPrev1);

  const exSwiper2 = document.querySelector('#ex-swiper-2') as HTMLElement;
  const exPagination2 = document.querySelector(
    '#swiper-pagination-2',
  ) as HTMLElement;
  const exNext2 = document.querySelector('#ex-button-next-2') as HTMLElement;
  const exPrev2 = document.querySelector('#ex-button-prev-2') as HTMLElement;
  const objSwiper2 = slider(exSwiper2, exPagination2);

  movePointer(objSwiper2, exSwiper2, exNext2, exPrev2);
}
