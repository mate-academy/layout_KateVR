'use strict';

document.addEventListener("DOMContentLoaded", function () {

  // #region YouTube video
  const hdrButton = document.getElementById("header__button");
  const hdrCloseButton = document.getElementById("header__close-button");
  const hdrContainer = document.getElementById("header__video-container");
  const hdrIframe = document.getElementById("header__video-frame");

  const abtButton = document.getElementById("about__button");
  const abtCloseButton = document.getElementById("about__close-button");
  const abtContainer = document.getElementById("about__video-container");
  const abtIframe = document.getElementById("about__video-frame");


  hdrButton.addEventListener('click', function () {
    hdrContainer.classList.remove('hidden');
    hdrIframe.setAttribute('src', hdrButton.dataset.video);
  });

  hdrCloseButton.addEventListener('click', function () {
    hdrContainer.classList.add('hidden');
    hdrIframe.setAttribute('src', "");
  });

  abtButton.addEventListener('click', function () {
    abtContainer.classList.remove('hidden');
    abtIframe.setAttribute('src', abtButton.dataset.video);
  });

  abtCloseButton.addEventListener('click', function () {
    abtContainer.classList.add('hidden');
    abtIframe.setAttribute('src', "");
  });

  // #endregion

  // #region About slider
const aboutSlides = document.querySelectorAll(".about__slider .slider__slide");
const aboutPrevBtn = document.getElementById("about-prev");
const aboutNextBtn = document.getElementById("about-next");
const aboutProgressBar = document.getElementById("about-progress-bar");
const aboutProgressLine = document.getElementById("about-progress-line");
const aboutPaginationCount = document.querySelector(".about__slider .slider__pagination-count");
const aboutTotalSlides = aboutSlides.length;
const aboutPaginationDots = document.querySelectorAll(".about__slider .dot");

let aboutCurrent = 0;
let aboutInterval = null;

 function showAboutSlide(index) {
  aboutSlides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
    slide.style.opacity = i === index ? "1" : "0";
    slide.style.visibility = i === index ? "visible" : "hidden";
  });

   if (aboutPaginationCount) {
    aboutPaginationCount.textContent = `${index + 1}/${aboutTotalSlides}`;
  }

  if (aboutPaginationDots.length) {
    aboutPaginationDots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  }

  if (aboutProgressBar && aboutProgressLine) {
    const lineWidth = aboutProgressLine.offsetWidth;
    const barWidth = aboutProgressBar.offsetWidth;
    const maxTranslate = lineWidth - barWidth;
    const step = aboutTotalSlides > 1 ? maxTranslate / (aboutTotalSlides - 1) : 0;
    aboutProgressBar.style.transform = `translateX(${index * step}px)`;
  }
}

function nextAboutSlide() {
  aboutCurrent = (aboutCurrent + 1) % aboutSlides.length;
  showAboutSlide(aboutCurrent);
}

function prevAboutSlide() {
  aboutCurrent = (aboutCurrent - 1 + aboutSlides.length) % aboutSlides.length;
  showAboutSlide(aboutCurrent);
}

function startAboutAuto() {
  if (aboutInterval) clearInterval(aboutInterval);
  aboutInterval = setInterval(nextAboutSlide, 3000);
}

if (aboutSlides.length > 0) {
  showAboutSlide(aboutCurrent);
  startAboutAuto();

  if (aboutNextBtn) {
    aboutNextBtn.addEventListener("click", () => {
      nextAboutSlide();
      startAboutAuto();
    });
  }
  if (aboutPrevBtn) {
    aboutPrevBtn.addEventListener("click", () => {
      prevAboutSlide();
      startAboutAuto();
    });
  }
}
// #endregion

  // #region tech-specs plusses
  const plusFirst = document.getElementById("plus-detail-first");
  const plusSecond = document.getElementById("plus-detail-second");
  const plusThird = document.getElementById("plus-detail-third");

  const infoFirst = document.querySelector(".tech-specs__info--first");
  const infoSecond = document.querySelector(".tech-specs__info--second");
  const infoThird = document.querySelector(".tech-specs__info--third");

  if (plusFirst && infoFirst) {
    plusFirst.addEventListener('click', function () {
      plusFirst.classList.toggle('plus-active');
      infoFirst.classList.toggle('tech-specs__info-active');
    });
  }
  if (plusSecond && infoSecond) {
    plusSecond.addEventListener('click', function () {
      plusSecond.classList.toggle('plus-active');
      infoSecond.classList.toggle('tech-specs__info-active');
    });
  }
  if (plusThird && infoThird) {
    plusThird.addEventListener('click', function () {
      plusThird.classList.toggle('plus-active');
      infoThird.classList.toggle('tech-specs__info-active');
    });
  }
// #endregion

  // #region Header slider
  const slides = document.querySelectorAll(".header__slider .slider__slide");
  const prevBtn = document.getElementById("button-prev");
  const nextBtn = document.getElementById("button-next");
  const headerProgressBar = document.getElementById("header-progress-bar");
  const headerProgressLine = document.getElementById("header-progress-line");

  const headerTotalSlides = slides.length;
  let current = 0;
  let interval = null;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
      slide.style.opacity = i === index ? "1" : "0";
      slide.style.visibility = i === index ? "visible" : "hidden";
    });
    aboutPaginationCount.textContent = `${index + 1}/${aboutTotalSlides}`;

    if (headerProgressBar && headerProgressLine) {
      const lineWidth = headerProgressLine.offsetWidth;
      const barWidth = headerProgressBar.offsetWidth;
      const maxTranslate = lineWidth - barWidth;
      const step = headerTotalSlides > 1 ? maxTranslate / (headerTotalSlides - 1) : 0;
      headerProgressBar.style.transform = `translateX(${index * step}px)`;
    }
  }

  function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
  }

  function prevSlide() {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  }

  function startAuto() {
    if (interval) clearInterval(interval);
    interval = setInterval(nextSlide, 3000);
  }

  if (slides.length > 0) {
    showSlide(current);
    startAuto();

    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        nextSlide();
        startAuto();
      });
    }
    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        prevSlide();
        startAuto();
      });
    }
  }
// #endregion

  // #region error in the form input
const inputFields = document.querySelectorAll("input");
const errorMessages = {
  name: "Please, fill your name*",
  phone: "Please, fill your phone*",
  email: "Please, fill your email*"
};

inputFields.forEach((input) => {
  const label = input.closest(".form__field").querySelector(".form__field-name");
  const formFieldPlace = input;

  input.addEventListener("input", () => {
    if (!input.checkValidity()) {
      label.textContent = errorMessages[input.name];
      label.classList.add("error");
      formFieldPlace.classList.add("error-field");
    } else {
      label.textContent = label.getAttribute("data-default-text");
      label.classList.remove("error");
      formFieldPlace.classList.remove("error-field");
    }
  });
});

// #endregion

});


