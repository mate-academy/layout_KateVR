export const setupFaqMenu = () => {
  const accordions = document.querySelectorAll('.faq__question');

  accordions.forEach((accordion) => {
    accordion.addEventListener('click', () => {
      accordion.classList.toggle('accordion--open');
    });
  });
}
