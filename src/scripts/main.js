'use strict';

window.addEventListener('hashchange', () => {
  const hashArr = ['#menu-mobile', '#Languages', '#Help'];

  if (hashArr.includes(window.location.hash)) {
    window.scrollTo(0, 0);
    document.body.classList.add('body--scroll-off');
  } else {
    document.body.classList.remove('body--scroll-off');
  }
});
