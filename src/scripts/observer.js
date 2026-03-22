export function initScrollObserver() {
  const footer = document.querySelector('.footer');
  const fixedButton = document.querySelector('.header__button');

  if (!footer || !fixedButton) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        fixedButton.style.opacity = '0';
        fixedButton.style.pointerEvents = 'none';
        fixedButton.style.transform = 'translateY(20px)';
      } else {
        fixedButton.style.opacity = '1';
        fixedButton.style.pointerEvents = 'auto';
        fixedButton.style.transform = 'translateY(0)';
      }
    });
  }, { rootMargin: '0px 0px 20px 0px' });

  observer.observe(footer);
}
