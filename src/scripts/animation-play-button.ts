export const animationPlayButton = () => {
  const lines = document.querySelectorAll(
    '.button-play__dots-line',
  ) as NodeListOf<HTMLElement>;

  lines.forEach((line) => {
    const elements: HTMLElement[] = [];

    const createLine = (h: number, w: number) => {
      const line = document.createElement('div');
      line.style.height = h + 'px';
      line.style.width = w + 'px';
      line.classList.add('button-play__line');

      return line;
    };

    const firstLine = createLine(2, 30);

    elements.push(firstLine);

    const start = 1;
    const end = 9;
    const n = 26;

    const step = (end - start) / (n - 1);

    Array.from({ length: 26 }).forEach((item, index) => {
      const l = 1 / 25;

      const line = createLine(2 - l * index, 2 - l * index);

      line.style.marginLeft = Math.floor(start + step * index) + 'px';

      elements.push(line);
    });

    line.append(...elements);
  });

  const buttonPlay = document.querySelectorAll(
    '.button-play',
  ) as NodeListOf<HTMLLinkElement>;

  let animationId;
  let offsetAnimation = 0;

  let startAnimation = false;

  function animate(lines) {
    function anim(time) {
      if (!startAnimation) {
        offsetAnimation = time;

        lines.forEach((item) => {
          item.classList.remove('button-play__dots-line--hover');
        });
      }

      animationId = requestAnimationFrame(anim);

      let indexLine = 0;

      for (const line of lines) {
        [...line.children].forEach((item, index) => {
          const el = item as HTMLElement;
          const left = (el.offsetLeft - line.offsetLeft) / 34;

          const power = (index / 26) * 5;

          let transform =
            (Math.sin(left + -(time - offsetAnimation) / 150) - 1) * power;

          transform = transform * Math.min((time - offsetAnimation) / 520, 1);

          transform = indexLine % 2 === 1 ? -transform : transform;

          el.style.transform = `translateY(${transform}px)`;
        });

        indexLine += 1;
      }

      startAnimation = true;
    }

    requestAnimationFrame(anim);
  }

  buttonPlay.forEach((button) => {
    button.addEventListener('pointerenter', () => {
      const linesButton = button.querySelectorAll(
        '.button-play__dots-line',
      ) as NodeListOf<HTMLElement>;

      animationId = animate(linesButton);
    });
  });
  buttonPlay.forEach((button) => {
    button.addEventListener('pointerleave', () => {
      const linesButton = button.querySelectorAll(
        '.button-play__dots-line',
      ) as NodeListOf<HTMLElement>;

      cancelAnimationFrame(animationId);
      startAnimation = false;
      linesButton.forEach((item) => {
        item.classList.add('button-play__dots-line--hover');
      });

      for (const line of linesButton) {
        [...line.children].forEach((item, index) => {
          const el = item as HTMLElement;

          el.style.transform = `translateY(0px)`;
        });
      }
    });
  });
};
