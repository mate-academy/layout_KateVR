const path1 = [
  { x: 5, y: 5 },
  { x: 395, y: 5 },
  { x: 395, y: 65 },
];

const path2 = [
  { x: 5, y: 102 },
  { x: 40, y: 102 },
  { x: 40, y: 102 },
  { x: 40, y: 5 },
  { x: 122, y: 5 },
];

const path3 = [
  { x: 185, y: 5 },
  { x: 185, y: 240 },
  { x: 5, y: 240 },
];

function createLine(id, pathway) {
  const canvas = document.getElementById(id);
  const ctx = canvas.getContext('2d');

  const path = pathway;

  let progress = 0;
  const speed = 0.010;

  function distance(point1, point2) {
    return Math.sqrt((point2.x - point1.x) ** 2 + (point2.y - point1.y) ** 2);
  }

  function lerp(start, end, t) {
    return start + (end - start) * t;
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let totalLength = 0;
    let segmentLengths = [];

    for (let i = 0; i < path.length - 1; i++) {
      const length = distance(path[i], path[i + 1]);
      segmentLengths.push(length);
      totalLength += length;
    }

    let lengthTravelled = progress * totalLength;
    let segmentIndex = 0;

    while (segmentIndex < segmentLengths.length && lengthTravelled > segmentLengths[segmentIndex]) {
      lengthTravelled -= segmentLengths[segmentIndex];
      segmentIndex++;
    }

    if (segmentIndex < segmentLengths.length) {
      let segmentStart = path[segmentIndex];
      let segmentEnd = path[segmentIndex + 1];
      let segmentLength = segmentLengths[segmentIndex];

      let segmentProgress = lengthTravelled / segmentLength;
      let x = lerp(segmentStart.x, segmentEnd.x, segmentProgress);
      let y = lerp(segmentStart.y, segmentEnd.y, segmentProgress);

      ctx.beginPath();
      ctx.moveTo(path[0].x, path[0].y);

      for (let i = 1; i <= segmentIndex; i++) {
        ctx.lineTo(path[i].x, path[i].y);
      }
      ctx.lineTo(x, y);

      ctx.strokeStyle = '#05C2DF';
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(x, y, 3, 0, 2 * Math.PI);
      ctx.fillStyle = '#05C2DF';
      ctx.fill();
    }

    progress += speed;

    if (progress < 1) {
      requestAnimationFrame(draw);
    }
  }

  draw();
}

function createCircleAnimation(id, centerX, centerY, radius) {
  const canvas = document.getElementById(id);
  const ctx = canvas.getContext('2d');

  canvas.width = centerX * 2;
  canvas.height = centerY * 2;

  let progress = 0;
  const speed = 0.02;

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const startAngle = (3 / 4) * Math.PI;
    const endAngle = (5 / 4) * Math.PI;

    const angle = startAngle + (endAngle - startAngle) * progress;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);

    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, startAngle, angle);
    ctx.strokeStyle = '#05C2DF';
    ctx.lineWidth = 1;
    ctx.stroke();

    progress += speed;

    if (progress <= 1) {
      requestAnimationFrame(draw);
    }
  }

  draw();
}

function initIntersectionObserver() {
  const techSpecs = document.querySelector('.tech-specs');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.intersectionRatio >= 0.85) {
        createLine('line-1', path1);

        setTimeout(() => {
          createLine('line-2', path2)
        }, 300);

        setTimeout(() => {
          createLine('line-3', path3);
        }, 600);

        setTimeout(() => {
          createCircleAnimation('circle', 300, 300, 150);
        }, 1200)

        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.85,
  });

  observer.observe(techSpecs);
}

initIntersectionObserver();
