'use strict';

const accordionContent = document.querySelectorAll('.faq__accordion-content');

accordionContent.forEach((item, index) => {
  const header = item.querySelector('.faq__accordion-header');

  header.addEventListener('click', () => {
    item.classList.toggle('faq__accordion-content--active');

    const description = item.querySelector('.faq__accordion-description');

    if (item.classList.contains('faq__accordion-content--active')) {
      description.style.height = `${description.scrollHeight}px`;
      // eslint-disable-next-line max-len
      item.querySelector('.faq__accordion-svg').classList.add('faq__accordion-svg--active');
    } else {
      description.style.height = '0px';
      // eslint-disable-next-line max-len
      item.querySelector('.faq__accordion-svg').classList.remove('faq__accordion-svg--active');
    }

    removeOpen(index);
  });
});

function removeOpen(ind) {
  accordionContent.forEach((it, i) => {
    if (ind !== i) {
      it.classList.remove('faq__accordion-content--active');

      const desc = it.querySelector('.faq__accordion-description');

      desc.style.height = '0px';
      // eslint-disable-next-line max-len
      it.querySelector('.faq__accordion-svg').classList.remove('faq__accordion-svg--active');
    }
  });
}
