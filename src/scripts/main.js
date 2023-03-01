'use strict';

window.addEventListener('load', eventWindow => {
  const body = document.querySelector('.body');
  const select = document.querySelector('.select__text');
  const selectArrow = document.querySelector('.select__arrow');
  const selectItems = document.querySelectorAll('.select__item');
  const selectItemsWrapper = document.querySelector('.select__items');
  const selectUI = [select, selectArrow];
  const faqTabTitle = document.querySelectorAll('.popupfaq__tab-title');
  let innerSelectItem = ''; // selectItem inner text work when element hover

  selectUI.forEach(el => {
    el.addEventListener('click', e => { //  selectUI is click
      const innerTextSelect = select.innerHTML;

      selectItemsWrapper.style.display = 'flex'; // select list is show

      body.addEventListener('click', event => {
        // take value from list item and put to select
        // if terget not list item - close list
        if (event.target.classList.contains('select__item')) {
          selectItemsWrapper.style.display = 'none';
          event.target.innerHTML = innerTextSelect;
          select.innerHTML = innerSelectItem;
        } else {
          selectItemsWrapper.style.display = 'none';
          innerSelectItem = '';
        }
      }, true);
    });
  });

  selectItems.forEach(el => { // add hover item value to innerSelectItem
    el.addEventListener('mouseover', event => {
      innerSelectItem = event.target.innerHTML;
    });
  });

  // scroll disable
  window.addEventListener('hashchange', () => {
    if (window.location.hash === '#popup-lang'
      || window.location.hash === '#popup-menu'
      || window.location.hash === '#popup-help'
      || window.location.hash === '#popup-faq') {
      body.classList.add('body--with-menu');
    } else {
      body.classList.remove('body--with-menu');
    }
  });

  faqTabTitle.forEach(el => { //  show onckick FAQ text block
    el.addEventListener('click', e => {
      faqTabTitle.forEach(item => {
        if (e.target.nextElementSibling.classList.contains('show-text')) {
          return;
        }
        item.nextElementSibling.classList.remove('show-text');
        item.nextElementSibling.nextElementSibling.classList.remove('show-text');
        item.firstElementChild.classList.remove('arrow-active');
      });

      el.nextElementSibling.classList.toggle('show-text');
      el.nextElementSibling.nextElementSibling.classList.toggle('show-text');
      el.firstElementChild.classList.toggle('arrow-active');
    });
  });
});
// const swiperStartpage = new Swiper('.test', {
//   direction: 'horizontal',
//   loop: true,
//   speed: 200,
//   spaceBetween: 100,
//   slidesPerView: 1,

//   autoplay: {
//     delay: 1000,
//   },
//   navigation: {
//     nextEl: '.startpage__slider-next',
//     prevEl: '.startpage__slider-prev',
//   },
// }
// );
// renderFraction ('.startpage__current', '.startpage__total');
