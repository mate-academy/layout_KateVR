// tech open-bar

document.addEventListener('DOMContentLoaded', () => {
  const barTops = document.querySelectorAll('.open-bar__top');

  barTops.forEach((barTop) => {
    barTop.addEventListener('click', () => {
      const parentBar = barTop.closest('.open-bar');

      parentBar.classList.toggle('open-bar--active');
    });
  });
});


// videoModal

window.openVideoPlayer = function() {
  document.getElementById('videoModal').style.display = 'flex';
}

window.closeVideoPlayer = function() {
  document.getElementById('videoModal').style.display = 'none';
}

document.addEventListener("DOMContentLoaded", () => {
  const closeButton = document.getElementById('closeButton');
  const videoButtons = document.querySelectorAll('.video-button');

  closeButton.addEventListener('click', closeVideoPlayer);
  videoButtons.forEach(item => {
    item.addEventListener('click', openVideoPlayer);
  })
});

// dropdown

document.addEventListener('DOMContentLoaded', () => {
  const dropdownTitle = document.querySelector('.dropdown__title');
  const dropdownContent = document.querySelector('.dropdown__content');

dropdownTitle.addEventListener('click', () => {
  dropdownContent.classList.toggle('dropdown__content--active');
});

  const dropdownTitleText = document.querySelector('.dropdown__title--text');
  const dropdownItems = document.querySelectorAll('.dropdown__item');

  dropdownItems.forEach((item) => {
    item.addEventListener('click', () => {
      const languageCode = item.textContent.trim().substring(0, 2);

      dropdownTitleText.textContent = languageCode;

      dropdownContent.classList.remove('dropdown__content--active');
      dropdownItems.forEach((el) => el.classList.remove('dropdown__item--active'));
      item.classList.add('dropdown__item--active');
    });
  });
});

// faq

document.addEventListener('DOMContentLoaded', () => {
  const accordions = document.querySelectorAll('.accordion');
  const faqAside = document.querySelector('.faq');
  const faqButtons = document.querySelectorAll('.description__faq');
  const faqCloseButton = document.querySelector('.faq__close');

  function closeAccordions() {
    accordions.forEach(item => {
      item.classList.remove('accordion--open');
    })
  }

  accordions.forEach((item) => item.addEventListener('click', () => {
    item.classList.toggle('accordion--open');
  }))

  faqButtons.forEach(button => {
    button.addEventListener('click', () => {
      faqAside.classList.add('page__aside--active');
      document.body.classList.add('page__no-scroll');
    })
  })

  faqCloseButton.addEventListener('click', () => {
    faqAside.classList.remove('page__aside--active');
    document.body.classList.remove('page__no-scroll');
    closeAccordions();
  })
});

// help

document.addEventListener('DOMContentLoaded', () => {
  const helpAside = document.querySelector('.help');
  const helpButtons = document.querySelectorAll('.description__help');
  const helpCloseButton = document.querySelector('.help__close');

  helpButtons.forEach(button => {
    button.addEventListener('click', () => {
      helpAside.classList.add('page__aside--active');
      document.body.classList.add('page__no-scroll');
    })
  })

  helpCloseButton.addEventListener('click', () => {
    helpAside.classList.remove('page__aside--active');
    document.body.classList.remove('page__no-scroll');
  })
});

// buy-button

document.addEventListener('DOMContentLoaded', () => {
  const bucketAside = document.querySelector('.bucket');
  const buyButtons = document.querySelectorAll('.buy-button');
  const bucketCloseButton = document.querySelector('.bucket__close');

  buyButtons.forEach(button => {
    button.addEventListener('click', () => {
      bucketAside.classList.add('page__aside--active');
      document.body.classList.add('page__no-scroll');
    })
  })

  bucketCloseButton.addEventListener('click', () => {
    bucketAside.classList.remove('page__aside--active');
    document.body.classList.remove('page__no-scroll');
  })
});

// menu aside

document.addEventListener('DOMContentLoaded', () => {
  const menuAside = document.querySelector('.menu');
  const menuButtons = document.querySelectorAll('.icon--menu');
  const menuCloseButton = document.querySelector('.menu__close');
  const linkButtons = document.querySelectorAll('.nav__link');

  menuButtons.forEach(button => {
    button.addEventListener('click', () => {
      menuAside.classList.add('page__aside--active');
      document.body.classList.add('page__no-scroll');
    })
  })

  menuCloseButton.addEventListener('click', () => {
    menuAside.classList.remove('page__aside--active');
    document.body.classList.remove('page__no-scroll');
  })

  linkButtons.forEach(button => {
    button.addEventListener('click', () => {
      menuAside.classList.remove('page__aside--active');
    })
  })
});

// slider

import deviceImage from "../images/device-photo-main-large.png";
import playerImage from "../images/kat-player.png";
import jeansImage from "../images/jeans-vr.svg";

document.addEventListener("DOMContentLoaded", () => {
  const images = [
    deviceImage,
    playerImage,
    jeansImage,
  ];

  let currentIndex = 0;

  const imgElement = document.querySelector(".description__img");
  const nextButton = document.querySelector(".slider__right--top");
  const prevButton = document.querySelector(".slider__left--top");
  const slider = document.querySelector(".description__slider");

  function updateImage(index) {
    imgElement.src = images[index];
  }

  function checkButtonColor() {
    if (currentIndex === images.length - 1) {
      nextButton.style.color = "#929292";
    }

    if (currentIndex !== images.length - 1) {
      nextButton.style.color = "#fff";
    }

    if (currentIndex !== 0) {
      prevButton.style.color = "#fff";
    }

    if (currentIndex === 0) {
      prevButton.style.color = "#929292";
    }
  }

  function updateUnderline() {
    if (currentIndex === 0) {
      slider.style.setProperty("--slider-left", `0`);
    }
    if (currentIndex === 1) {
      slider.style.setProperty("--slider-left", `33.3%`);
    }
    if (currentIndex === 2) {
      slider.style.setProperty("--slider-left", `66.6%`);
    }
  }

  updateImage(currentIndex);

  nextButton.addEventListener("click", () => {
    if (currentIndex < images.length - 1) {
      currentIndex += 1;
      updateImage(currentIndex);
      updateUnderline();
    }

    checkButtonColor();
  });

  prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex -= 1;
      updateImage(currentIndex);
      updateUnderline();
    }

    checkButtonColor();
  });
});

// second slider

document.addEventListener("DOMContentLoaded", () => {
  const images = [
    jeansImage,
    playerImage,
    deviceImage,
  ];

  let currentIndex = 0;

  const imgElement = document.querySelector(".about__img");
  const nextButton = document.querySelector(".slider__right--bot");
  const prevButton = document.querySelector(".slider__left--bot");
  const slider = document.querySelector(".about__slider");
  const counter = document.querySelector(".about__counter");

  function updateImage(index) {
    imgElement.src = images[index];
  }

  function checkButtonColor() {
    if (currentIndex === images.length - 1) {
      nextButton.style.color = "#929292";
    }

    if (currentIndex !== images.length - 1) {
      nextButton.style.color = "#fff";
    }

    if (currentIndex !== 0) {
      prevButton.style.color = "#fff";
    }

    if (currentIndex === 0) {
      prevButton.style.color = "#929292";
    }
  }

  function updateUnderline() {
    if (currentIndex === 0) {
      slider.style.setProperty("--slider-left", `0`);
    }
    if (currentIndex === 1) {
      slider.style.setProperty("--slider-left", `33.3%`);
    }
    if (currentIndex === 2) {
      slider.style.setProperty("--slider-left", `66.6%`);
    }
  }

  updateImage(currentIndex);

  nextButton.addEventListener("click", () => {
    if (currentIndex < images.length - 1) {
      currentIndex += 1;
      updateImage(currentIndex);
      updateUnderline();
    }
    counter.textContent = `${currentIndex + 1}/3`;
    checkButtonColor();
  });

  prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex -= 1;
      updateImage(currentIndex);
      updateUnderline();
    }
    counter.textContent = `${currentIndex + 1}/3`;
    checkButtonColor();
  });
});

// form

const forms = document.querySelectorAll(".form");
const bucketAside = document.querySelector('.bucket');

forms.forEach(form => {
  form.addEventListener('submit', event => {
    event.preventDefault();
    bucketAside.classList.add('page__aside--active');
  });
});
