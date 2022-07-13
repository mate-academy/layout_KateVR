'use strict';

const button = document.getElementById('Mbtn');

button.addEventListener('click', () => {
  document.getElementById('more').classList.toggle('more--active');
});

// const dot =
// document.getElementsByClassName('about__container-video-nav-dot');

// dot.addEventListener('click', () => {
//   dot.classList.remove('about__container-video-nav-dot--active');
//   dot.this.document.classList.add('about__container-video-nav-dot--active');
// });
