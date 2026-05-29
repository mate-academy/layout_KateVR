const questions = document.querySelectorAll('.faq__question');

questions.forEach((q) => {
  const answer = q.querySelector('.faq__answer-container');

  q.addEventListener('click', () => {
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
    } else {
      answer.style.maxHeight = `${answer.scrollHeight}px`;
    }
  });
});
