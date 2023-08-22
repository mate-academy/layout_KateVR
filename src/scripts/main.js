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

const icons = document.querySelectorAll('.tech__more-icon');
const infoBlocks = document.querySelectorAll('.tech__more-info');

icons.forEach((icon, index) => {
  function toggleInfoBlock() {
    infoBlocks.forEach(block => {
      block.style.display = 'none';
    });

    if (infoBlocks[index].style.display === 'none') {
      infoBlocks[index].style.display = 'block';
      infoBlocks[index].style.opacity = '1';
    } else {
      infoBlocks[index].style.display = 'none';
      infoBlocks[index].style.opacity = '0';
    }
  }

  icon.addEventListener('mouseenter', toggleInfoBlock);
  icon.addEventListener('click', toggleInfoBlock);
});
