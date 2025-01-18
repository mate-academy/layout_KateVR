const questions = document.querySelectorAll('.faq__question');
const iconClose = document.querySelector('.faq__icon');

export function openQuestion() {
  questions.forEach((question) => {
    question.addEventListener('click', () => {
      const wrapper = question.querySelector('.faq__info');

      if (wrapper.classList.contains('faq__info--active')) {
        wrapper.classList.remove('faq__info--active');
      } else {
        closeActiveQuestion();

        wrapper.classList.add('faq__info--active');
      }
    });
  });

  iconClose.addEventListener('click', closeActiveQuestion);
}

function closeActiveQuestion() {
  const activeQuestion = document.querySelector('.faq__info--active');
  if (activeQuestion) {
    activeQuestion.classList.remove('faq__info--active');
  }
}
