export function scrollUp() {
  const scrollUpButton = document.querySelector('.scroll-up');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      scrollUpButton.classList.add('scroll-up--active');
    } else {
      scrollUpButton.classList.remove('scroll-up--active');
    }
  });
}
