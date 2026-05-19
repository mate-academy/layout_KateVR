export const animationTechSpecs = () => {
  const svg = document.getElementById('mySvg');

  const createLine = (pointers: Array<number[]>) => {
    const circle1 = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'circle',
    );
    const circle2 = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'circle',
    );
    const polyline = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'polyline',
    );

    polyline.setAttribute('class', 'draw draw1');
    polyline.setAttribute('points', pointers.toString());
    polyline.setAttribute('stroke', 'width="4"');
    polyline.setAttribute('stroke', '#05C2DF');
    polyline.setAttribute('pathLength', '100');
    polyline.setAttribute('fill', 'none');

    circle1.setAttribute('class', 'circle1');
    circle1.setAttribute('cx', '' + pointers[0][0]);
    circle1.setAttribute('cy', '' + pointers[0][1]);
    circle1.setAttribute('r', '0px');
    circle1.setAttribute('fill', '#05C2DF');

    circle2.setAttribute('class', 'circle2');
    circle2.setAttribute('cx', '' + pointers[pointers.length - 1][0]);
    circle2.setAttribute('cy', '' + pointers[pointers.length - 1][1]);
    circle2.setAttribute('r', '0px');
    circle2.setAttribute('fill', '#05C2DF');

    const setPoiner = (pointers) => {
      polyline.setAttribute('points', pointers.toString());
      circle1.setAttribute('cx', '' + pointers[0][0]);
      circle1.setAttribute('cy', '' + pointers[0][1]);
      circle2.setAttribute('cx', '' + pointers[pointers.length - 1][0]);
      circle2.setAttribute('cy', '' + pointers[pointers.length - 1][1]);
    };

    return {
      element: [polyline, circle1, circle2],
      setPoiner: (pointers) => {
        setPoiner(pointers);
      },
    };
  };

  // circle.setAttribute("stroke", "black");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          document
            .querySelector('.section-tech-specs__content-image-svg')
            .classList.add('animate');
          svg.classList.add('animate');
          (
            document.querySelectorAll(
              '.section-tech-specs__content-box',
            ) as NodeListOf<HTMLElement>
          ).forEach((item) => {
            item.classList.add('animate');
            item.style.setProperty('--rand', (Math.random() - 0.5) * 0.5 + 's');
          });
          observer.disconnect();
        }
      });
    },
    {
      threshold: 0.9,
    },
  );

  observer.observe(svg);

  function observeLayout(el, callback) {
    let last = getRelativeRect(el);

    function check() {
      const current = getRelativeRect(el);

      const changed =
        current.x !== last.x ||
        current.y !== last.y ||
        current.width !== last.width ||
        current.height !== last.height;

      if (changed) {
        callback(current, last);
        last = current;
      }

      requestAnimationFrame(check);
    }

    requestAnimationFrame(check);
  }

  function getRelativeRect(el) {
    const rect = el.getBoundingClientRect();

    const parentRect = document
      .querySelector('.section-tech-specs__svg-container')
      .getBoundingClientRect();

    return {
      x: rect.left - parentRect.left,
      y: rect.top - parentRect.top,
      width: rect.width,
      height: rect.height,
    };
  }

  const createLine1 = () => {
    const pointer1 = document.querySelector('#pointer-1');
    const pointer1_1 = document.querySelector('#pointer-1-1');

    let pos = getRelativeRect(pointer1);
    let pos2 = getRelativeRect(pointer1_1);

    const pose_line = () => [
      [pos2.x, pos2.y],
      [pos2.x, pos.y],
      [pos.x, pos.y],
    ];

    const line1 = createLine(pose_line());
    svg.append(...line1.element);

    observeLayout(pointer1, (current, previous) => {
      pos = current;
      line1.setPoiner(pose_line());
    });

    observeLayout(pointer1_1, (current, previous) => {
      pos2 = current;
      line1.setPoiner(pose_line());
    });
  };

  const createLine2 = () => {
    const pointer1 = document.querySelector('#pointer-2');
    const pointer1_1 = document.querySelector('#pointer-2-2');

    let pos = getRelativeRect(pointer1);
    let pos2 = getRelativeRect(pointer1_1);

    const pose_line = () => [
      [pos2.x, pos2.y],
      [pos.x, pos2.y],
      [pos.x, pos.y],
    ];

    const line1 = createLine(pose_line());
    svg.append(...line1.element);

    observeLayout(pointer1, (current, previous) => {
      pos = current;
      line1.setPoiner(pose_line());
    });

    observeLayout(pointer1_1, (current, previous) => {
      pos2 = current;
      line1.setPoiner(pose_line());
    });
  };

  const createLine3 = () => {
    const pointer1 = document.querySelector('#pointer-3');
    const pointer1_1 = document.querySelector('#pointer-3-3');

    let pos = getRelativeRect(pointer1);
    let pos2 = getRelativeRect(pointer1_1);

    const pose_line = () => [
      [pos2.x, pos2.y],
      [pos.x, pos2.y],
      [pos.x, pos.y],
    ];

    const line1 = createLine(pose_line());
    svg.append(...line1.element);

    observeLayout(pointer1, (current, previous) => {
      pos = current;
      line1.setPoiner(pose_line());
    });

    observeLayout(pointer1_1, (current, previous) => {
      pos2 = current;
      line1.setPoiner(pose_line());
    });
  };

  createLine1();
  createLine2();
  createLine3();
};
