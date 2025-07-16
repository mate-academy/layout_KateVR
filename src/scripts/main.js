'use strict';

// @import '../scripts/order';

const techItem = document.querySelectorAll('.tech__item');
const contactsList = document.querySelector('.contacts__list');
const footerContactsList = document.querySelector('.footer__contacts');
const contactsLinks = document.querySelectorAll('.contacts__item');
const menu = document.querySelector('.menu__content');
const topBarMenu = document.querySelector('.top-bar__menu');
const topBarNav = document.querySelector('.top-bar__nav');
const topBarBtn = document.querySelector('.top-bar__btn');
const headerBottom = document.querySelector('.header__bottom');
const faqBtn = document.querySelector('.header__faq-btn');
const helpBtn = document.querySelector('.header__help-btn');

techItem.forEach((item) => {
  item.querySelector('.tech__item-btn').addEventListener('click', () => {
    item.querySelector('.tech__item-btn').classList.toggle('tech__item-btn--active');
    item.querySelector('.tech__item-content').classList.toggle('tech__item-content--active');
  });
});

function moveBtn() {
  if (window.innerWidth < 768) {
    contactsLinks.forEach((link) => {
      footerContactsList.append(link);
    });

  } else {
    contactsLinks.forEach((link) => {
      contactsList.append(link);
    });
  };

  if (window.innerWidth < 1024) {
    menu.append(faqBtn);
    menu.append(helpBtn);
    menu.prepend(topBarNav);
  } else {
    headerBottom.prepend(helpBtn);
    headerBottom.prepend(faqBtn);
    topBarMenu.append(topBarNav);
  };
};

window.addEventListener('load', moveBtn);
window.addEventListener('resize', moveBtn);

document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {
  const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');
  const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
  const dropDownListItems = dropDownList.querySelectorAll('.dropdown__item');
  const dropDownInput = dropDownWrapper.querySelector('.dropdown__input');

  dropDownBtn.addEventListener('click', function () {
    dropDownList.classList.toggle('dropdown__list--active');
    this.classList.add('dropdown__button--active');
  });
  dropDownListItems.forEach(function (listItem) {
    listItem.addEventListener('click', function (e) {
      e.stopPropagation();
      dropDownBtn.innerText = this.innerText;
      dropDownBtn.focus();
      dropDownInput.value = this.dataset.value;
      dropDownList.classList.remove('dropdown__list--active');
    });
  });

  document.addEventListener('click', function (e) {
    if (e.target !== dropDownBtn) {
      dropDownBtn.classList.remove('dropdown__button--active');
      dropDownList.classList.remove('dropdown__list--active');
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Tab' || e.key == 'Escape') {
      dropDownBtn.classList.remove('dropdown__button--active');
      dropDownList.classList.remove('dropdown__list--active');
    }
  });
});

const modal = document.getElementById("my-modal");
const closeBtn = document.getElementById("close-modal-btn");
const iframe = document.getElementById("youtube-video");
const openButtons = document.querySelectorAll(".open-video-btn");

const videoURL = "https://www.youtube.com/embed/SvTbB19bvIw";

openButtons.forEach(button => {
  button.addEventListener("click", () => {
    iframe.src = videoURL + "?autoplay=1";
    modal.style.display = "block";
  });
});

closeBtn.onclick = function () {
  modal.style.display = "none";
  iframe.src = "";
}

window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
    iframe.src = "";
  }
};

const button = document.getElementById('top-bar__btn');
let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;

  const distanceFromBottom = documentHeight - (scrollTop + windowHeight);

  if (distanceFromBottom <= 100 && scrollTop > lastScrollTop) {
    button.classList.add('top-bar__btn--hidden');
  } else if (scrollTop < lastScrollTop) {
    button.classList.remove('top-bar__btn--hidden');
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

const faqCloseBtn = document.querySelector('.faq__close-btn');
const faq = document.querySelector('.page__faq');
const body = document.querySelector('.page__body');

faqBtn.addEventListener('click', () => {
  faq.classList.add('page__faq-open');
  body.classList.add('page__body-lock');
});
faqCloseBtn.addEventListener('click', () => {
  faq.classList.remove('page__faq-open');
  body.classList.remove('page__body-lock');
});

const helpCloseBtn = document.querySelector('.help__close-btn');
const help = document.querySelector('.page__help');

helpBtn.addEventListener('click', () => {
  help.classList.add('page__help-open');
  body.classList.add('page__body-lock');
});
helpCloseBtn.addEventListener('click', () => {
  help.classList.remove('page__help-open');
  body.classList.remove('page__body-lock');
});

const langCloseBtn = document.querySelector('.lang__close-btn');
const lang = document.querySelector('.page__lang');
const langBtn = document.querySelector('.menu__lang-btn');

langBtn.addEventListener('click', () => {
  lang.classList.add('page__lang-open');
  body.classList.add('page__body-lock');
});
langCloseBtn.addEventListener('click', (e) => {
  lang.classList.remove('page__lang-open');
  body.classList.remove('page__body-lock');
});

const headers = document.querySelectorAll('.faq__item-title');

headers.forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;
    const isOpen = content.classList.contains('open');

    document.querySelectorAll('.faq__item-content.open').forEach(openItem => {
      openItem.style.maxHeight = null;
      openItem.classList.remove('open');
    });

    headers.forEach(h => h.classList.remove('faq__item-title--active'));

    if (!isOpen) {
      content.classList.add('open');
      content.style.maxHeight = content.scrollHeight + "px";
      header.classList.add('faq__item-title--active');
    }
  });
});

let mySwiper = null;

function initHeaderSwiper() {
  const screenWidth = window.innerWidth;

  if (screenWidth > 1024 && !mySwiper) {
    mySwiper = new Swiper('.header-swiper', {
      navigation: {
        nextEl: ".header-swiper__next-btn",
        prevEl: ".header-swiper__previous-btn",
      },
      scrollbar: {
        el: ".header-swiper__scrollbar",
        draggable: true,
      }
    });
  } else if (screenWidth <= 1024 && mySwiper) {
    mySwiper.destroy(true, true);
    mySwiper = null;
  }
};

window.addEventListener('load', initHeaderSwiper);
window.addEventListener('resize', initHeaderSwiper);

let swiperInstance;

function initSwiper() {

  if (swiperInstance) swiperInstance.destroy(true, true);

  const isMobile = window.innerWidth <= 768;

  swiperInstance = new Swiper(".swiper", {
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      type: isMobile ? "bullets" : "fraction",
    },
    navigation: !isMobile
      ? {
        nextEl: ".swiper__button-next",
        prevEl: ".swiper__button-prev",
      }
      : false,
    scrollbar: !isMobile
      ? {
        el: ".swiper-scrollbar",
        draggable: true,
      }
      : false,
  });
  document.querySelector(".swiper__button-prev").style.display = isMobile ? "none" : "block";
  document.querySelector(".swiper__button-next").style.display = isMobile ? "none" : "block";
  document.querySelector(".swiper-scrollbar").style.display = isMobile ? "none" : "block";
}

window.addEventListener("load", initSwiper);
window.addEventListener("resize", () => {
  initSwiper();
});
