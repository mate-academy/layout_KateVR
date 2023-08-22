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
        info.previousElementSibling.setAttribute('data-state', 'closed');
      });

      accordionInfo.style.display = 'block';
      button.setAttribute('data-state', 'open');
    } else {
      accordionInfo.style.display = 'none';
      button.setAttribute('data-state', 'closed');
    }
  });
});
