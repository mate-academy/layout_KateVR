'use strict';

const accordionButtons = document.querySelectorAll('.faq__accordion');

accordionButtons.forEach(button => {
  button.addEventListener('click', () => {
    const accordionInfo = button.nextElementSibling;

    if (accordionInfo.style.display === 'none'
      || accordionInfo.style.display === '') {
      const allAccordionInfos = document.querySelectorAll('.faq__accordion-info'); // eslint-disable-line

      allAccordionInfos.forEach(info => {
        info.style.display = 'none';
      });

      accordionInfo.style.display = 'block';
    } else {
      accordionInfo.style.display = 'none';
    }
  });
});
