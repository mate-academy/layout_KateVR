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

const tooltipTech = document.querySelector('.tech__more-icon--1');
const detailsTech = document.querySelector('.tech__more-info');
const tooltipDelay = 200;
let hideTooltipTimeout;

tooltipTech.addEventListener('mouseover', () => {
  clearTimeout(hideTooltipTimeout);
  detailsTech.classList.add('show');
});

document.addEventListener('mouseover', (event) => {
  if (!detailsTech.contains(event.target) && event.target !== tooltipTech) {
    hideTooltipTimeout = setTimeout(() => {
      detailsTech.classList.remove('show');
    }, tooltipDelay);
  }
});
