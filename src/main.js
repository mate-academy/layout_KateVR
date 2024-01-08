'use strict';

const accordionButtons = document.querySelectorAll('.faq__accordion');

accordionButtons.forEach(button => {
  button.addEventListener('click', () => {
    const accordionInfo = button.nextElementSibling;

    if (accordionInfo.style.display === 'none'
      || accordionInfo.style.display === '') {
      const allAccordionInfos = document.querySelectorAll('.faq__accordion-info'); // eslint-disable-line

      allAccordionInfos.forEach(info => {
        info.style.display = 'none';
        info.previousElementSibling.setAttribute('data-state', 'closed');
      });

      accordionInfo.style.display = 'block';
      button.setAttribute('data-state', 'open');
    } else {
      accordionInfo.style.display = 'none';
      button.setAttribute('data-state', 'closed');
    }
  });
});

const icons = document.querySelectorAll('.tech__more-icon');
const infoBlocks = document.querySelectorAll('.tech__more-info');

icons.forEach((icon, index) => {
  function toggleInfoBlock() {
    infoBlocks.forEach(block => {
      block.style.display = 'none';
    });

    if (infoBlocks[index].style.display === 'none') {
      infoBlocks[index].style.display = 'block';
      infoBlocks[index].style.opacity = '1';
    } else {
      infoBlocks[index].style.display = 'none';
      infoBlocks[index].style.opacity = '0';
    }
  }

  icon.addEventListener('mouseenter', toggleInfoBlock);
  icon.addEventListener('click', toggleInfoBlock);
});

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.2,
};

const callback = function(entries, obs) {
  entries.forEach(entry => {
    if (entry.isIntersecting && entry.boundingClientRect.y > 0) {
      switch (entry.target.getAttribute('data-target')) {
        case 'about': aboutAnim();
          break;
        case 'title': TitleAnim(entry.target);
          break;
      }
      obs.unobserve(entry.target);
    }
  });
};
// eslint-disable-next-line no-undef
const observer = new IntersectionObserver(callback, options);

const target = document.querySelectorAll('[data-target]');

target.forEach(el => {
  observer.observe(el);
});

function aboutAnim() {
  const featuresArticles = document.querySelectorAll('.features__article');

  featuresArticles.forEach(el => {
    el.style.transform = 'translateY(0)';
    el.style.opacity = '1';
  });
}

function TitleAnim(title) {
  title.style.transform = 'translateX(0)';
  title.style.opacity = '1';
}

const btnPrev = document.getElementById('btn1');
const btnNext = document.getElementById('btn2');
const video = document.getElementById('video');
const image = document.getElementById('image');
const videos = document.getElementById('source');
const btnPlay = document.getElementById('btnPlay');
const videoCounter = document.getElementById('videoCounter');

let currentVideoNumber = 1;

btnPrev.addEventListener('click', function() {
  currentVideoNumber = currentVideoNumber === '1.f06cb020'
    ? '2.04b1135e'
    : '1.f06cb020';
  video.pause();
  btnPlay.classList.remove('__pause__icon');
  btnPlay.classList.add('__play__icon');
  updateVideoSource();
});

btnNext.addEventListener('click', function() {
  currentVideoNumber = currentVideoNumber === '1.f06cb020'
    ? '2.04b1135e'
    : '1.f06cb020';
  video.pause();
  btnPlay.classList.remove('__pause__icon');
  btnPlay.classList.add('__play__icon');
  updateVideoSource();
});

function updateVideoSource() {
  videos.src = `video${currentVideoNumber}.mp4`;
  video.load();
  video.pause();

  videoCounter.textContent = parseInt(currentVideoNumber) + '/2';
}

function handlePlayClick() {
  if (video.paused) {
    video.style.display = 'block';
    video.play();
    btnPlay.classList.remove('__play__icon');
    btnPlay.classList.add('__pause__icon');
  } else {
    video.style.display = 'block';
    video.pause();
    btnPlay.classList.remove('__pause__icon');
    btnPlay.classList.add('__play__icon');
  }
}

btnPlay.click = handlePlayClick;

document.addEventListener('DOMContentLoaded', function() {
  videoCounter.textContent = currentVideoNumber + '/2';
  image.style.display = 'block';
  video.style.display = 'none';
});
