'use strict';

document.addEventListener("DOMContentLoaded", function () {

  const switches = document.querySelectorAll(".header__bottom__switch");

  switches.forEach((switchBlock) => {
    const slides = switchBlock.querySelectorAll(
      ".header__bottom__switch-progress-1, .header__bottom__switch-progress-2, .header__bottom__switch-progress-3"
    );

    const btnLeft = switchBlock.querySelector(".header__bottom__switch-btn-left");
    const btnRight = switchBlock.querySelector(".header__bottom__switch-btn-right");

    let currentIndex = 0;
    const totalSlides = slides.length;

    function showSlide(index) {
      slides.forEach((slide) => {
        slide.classList.remove("active");
      });

      slides[index].classList.add("active");

      btnLeft.disabled = index === 0;
      btnRight.disabled = index === totalSlides - 1;
    }

    btnRight.addEventListener("click", function (e) {
      e.preventDefault();

      if (currentIndex < totalSlides - 1) {
        currentIndex++;
        showSlide(currentIndex);
      }
    });

    btnLeft.addEventListener("click", function (e) {
      e.preventDefault();

      if (currentIndex > 0) {
        currentIndex--;
        showSlide(currentIndex);
      }
    });

    showSlide(currentIndex);
  });


  const questions = document.querySelectorAll(".faq__question");

  questions.forEach((question) => {
    question.addEventListener("click", () => {
      question.classList.toggle("active");

      const icon = question.querySelector(".faq__question__title__icon");
      icon.classList.toggle("active");
    });
  });

});
