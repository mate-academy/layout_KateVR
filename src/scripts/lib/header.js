const header = document.querySelector('.header');

window.addEventListener('scroll', (e) => {
  if (pageYOffset > 0) {
    header.classList.add('_bg');
  } else {
    header.classList.remove('_bg');
  }
})
