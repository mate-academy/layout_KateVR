'use strict'

const tech = document.querySelector('.tech');
const techButtons = tech.querySelectorAll('.hotspot__button');

export function configureTechButtons() {
  techButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.stopPropagation();

      button.classList.toggle('hotspot__button--active');

      const popover = button.closest('.hotspot');

      popover.classList.toggle('hotspot--active');
    })
  });
}