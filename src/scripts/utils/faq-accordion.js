export const faqAccordion = () => {
  const faqItems = document.querySelectorAll('.modal-faq__item');

  faqItems.forEach((item) => {
    const question = item.querySelector('.modal-faq__question');
    const answer = item.querySelector('.modal-faq__answer');
    const arrow = item.querySelector('.modal-faq__arrow');

    question.addEventListener('click', () => {
      const isOpen = answer.classList.contains('open');

      document
        .querySelectorAll('.modal-faq__answer')
        .forEach((a) => a.classList.remove('open'));
      document
        .querySelectorAll('.modal-faq__arrow')
        .forEach((a) => a.classList.remove('open'));

      if (!isOpen) {
        answer.classList.add('open');
        arrow.classList.add('open');
      }
    });
  });
};
