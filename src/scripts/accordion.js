'use strict';

const faqQuestion = document.querySelectorAll('.faq__question');
const faqAnswer = document.querySelectorAll('.faq__answer');
const faqUpdate = document.querySelectorAll('.faq__update');

faqQuestion.forEach((question, index) => {
  question.addEventListener('click', () => {
    faqAnswer[index].classList.toggle('faq__answer--show');
    faqUpdate[index].classList.toggle('faq__update--show');
  });
});
