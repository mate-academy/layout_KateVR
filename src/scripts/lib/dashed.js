export const createDashes = function() {
  const dashedTops = document.querySelectorAll('.dashed-top');
  const dashedBottoms = document.querySelectorAll('.dashed-bottom');

  const originalDash = document.createElement('span');
  originalDash.classList.add('dashed');
  originalDash.style.height = '2px';
  originalDash.style.backgroundColor = '#058498';
  originalDash.style.display = 'inline-block';

  const maxOpacity = 1;
  const minOpacity = 0.1;
  const opacityStep = (maxOpacity - minOpacity) / 10;

  const totalElements = 25;
  const last10PercentIndex = Math.ceil(totalElements * 0.9);

  const buttons = document.querySelectorAll('.video-btn');

  buttons.forEach(button => {
    let originalOpacities = [];

    for (let i = 0; i < totalElements; i++) {
      const clonedDash = originalDash.cloneNode(true);

      if (i === 0) {
        clonedDash.style.width = '30px';
      } else {
        clonedDash.style.width = '2px';
      }

      let gap;
      if (i < last10PercentIndex) {
        gap = Math.floor(i / 3) + 1;
      } else {
        gap = Math.floor(i / 3) + 1 + 2;
      }
      clonedDash.style.marginRight = gap + 'px';

      const opacity = Math.max(minOpacity, maxOpacity - (Math.floor(i / 3) * opacityStep));
      clonedDash.style.opacity = opacity;

      originalOpacities.push(opacity);

      button.querySelector('.dashed-top').appendChild(clonedDash.cloneNode(true));
      button.querySelector('.dashed-bottom').appendChild(clonedDash.cloneNode(true));
    }

    button.addEventListener('mouseenter', () => {
      const dashedTops = button.querySelectorAll('.dashed-top .dashed');
      const dashedBottoms = button.querySelectorAll('.dashed-bottom .dashed');

      dashedTops.forEach((span, index) => {
        setTimeout(() => {
          span.style.opacity = '1';
          span.style.boxShadow = '0 0 10px #058498';
        }, index * 20);
      });

      dashedBottoms.forEach((span, index) => {
        setTimeout(() => {
          span.style.opacity = '1';
          span.style.boxShadow = '0 0 10px #058498';
        }, index * 20);
      });
    });

    button.addEventListener('mouseleave', () => {
      const dashedTops = button.querySelectorAll('.dashed-top .dashed');
      const dashedBottoms = button.querySelectorAll('.dashed-bottom .dashed');

      dashedTops.forEach((span, index) => {
        setTimeout(() => {
          span.style.opacity = originalOpacities[index];
          span.style.boxShadow = 'none';
        }, index * 30);
      });

      dashedBottoms.forEach((span, index) => {
        setTimeout(() => {
          span.style.opacity = originalOpacities[index];
          span.style.boxShadow = 'none';
        }, index * 30);
      });
    });
  });
}

createDashes();
