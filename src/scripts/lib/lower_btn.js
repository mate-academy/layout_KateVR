function showLowerButton() {
  let lastScrollTop = 0;
  let isScrollingUp = false;

  const lowerButton = document.querySelector('.lower-button');
  const scrollToTopButton = document.querySelector('.scroll-to-top');

  const pageHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  );

  const buttonToUp = lowerButton.getBoundingClientRect();
  const stopLine = (pageHeight / 100 * 10);

  window.addEventListener('scroll', () => {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const stopShowButton = buttonToUp.y + currentScrollTop + stopLine;

    if (currentScrollTop === 0) {
      scrollToTopButton.classList.remove('_lw-btn');
    }

    if (currentScrollTop > lastScrollTop) {
      lowerButton.classList.add('_lw-btn');
      scrollToTopButton.classList.remove('_lw-btn');

      isScrollingUp = false;
    } else if (currentScrollTop < lastScrollTop && !isScrollingUp) {
      scrollToTopButton.classList.add('_lw-btn');
      lowerButton.classList.remove('_lw-btn');

      isScrollingUp = true;
    }

    if (stopShowButton > pageHeight) {
      lowerButton.classList.remove('_lw-btn');
    }

    lastScrollTop = currentScrollTop;
  });
}

showLowerButton();
