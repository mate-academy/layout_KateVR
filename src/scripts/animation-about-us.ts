import { myUtils } from './myUtils';

export const animationAboutUs = () => {
  const curve = [
    { pos: -0.1, value: 0 },
    { pos: 0, value: 100 },
    { pos: 0.3, value: 50 },
    { pos: 0.9, value: 0 },
    { pos: 1, value: 0 },
  ];

  const aboutUsText = document.querySelector(
    '.section-about-product__text-vertical-box',
  ) as HTMLElement;

  const firstEl = aboutUsText.children[0] as HTMLElement;

  const updateOpacity = (value: number) => {
    ([...aboutUsText.children] as HTMLElement[]).forEach((item) => {
      // console.log(item.offsetLeft, aboutUsText.offsetLeft);
      item.style.opacity =
        myUtils.getValueFromCurve(
          curve,
          myUtils.mapRange(
            item.offsetLeft,
            aboutUsText.offsetLeft,
            aboutUsText.offsetLeft + aboutUsText.parentElement.clientWidth,
            0,
            1,
            'linean',
          ),
        ) + '%';
    });
  };

  function animation(endAnimation: () => void) {
    let countEndAnim = 0;

    function _animation(currentValue = 0) {
      if (getComputedStyle(aboutUsText.parentElement).display === 'none') {
        setTimeout(() => _animation(0), 3);
        return;
      }
      myUtils.tween(
        currentValue,
        currentValue + -firstEl.clientWidth,
        1000,
        (value: number) => {
          firstEl.style.marginLeft = Math.round(value) + 'px';
          updateOpacity(value);
        },
        (value) => {
          countEndAnim++;
          if (countEndAnim === 2) {
            countEndAnim = 0;
            setTimeout(() => _animation(0), 1000);
            return;
          }
          setTimeout(() => _animation(value), 1000);
        },
      );
    }
    _animation();
  }

  animation(() => {
    firstEl.style.marginLeft = 0 + 'px';
  });
};
