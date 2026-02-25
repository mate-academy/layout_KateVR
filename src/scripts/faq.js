export function initFaq() {
  const faqList = document.querySelector('.faq__list');

  faqList.addEventListener('click', (event) => {
    const trigger = event.target.closest('.faq__question');

    if (!trigger) {
      return;
    }

    const item = trigger.closest('.faq__item');

    item.classList.toggle('faq__item--active');
  });
}
