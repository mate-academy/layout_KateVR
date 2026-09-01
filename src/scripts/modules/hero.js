'use strict';

/**
 * Hero Section Module
 * Handles the "More" button smooth scroll to the next section.
 */
export const initHero = () => {
  const moreBtn = document.querySelector('.hero__more-btn');
  const nextSection = document.querySelector('#about');

  // Early exit if elements are missing
  if (!moreBtn || !nextSection) return;

  moreBtn.addEventListener('click', event => {
    event.preventDefault();
    nextSection.scrollIntoView({ behavior: 'smooth' });
  });
};
