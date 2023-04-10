'use strict';

window.addEventListener('hashchange', () => {
  // eslint-disable-next-line no-mixed-operators,, max-len, no-multi-spaces
  if (window.location.hash === '#menu' && window.innerWidth < 1280  || window.location.hash === '#buy') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
