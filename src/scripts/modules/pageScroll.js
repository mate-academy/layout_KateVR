export const setupPageScroll = () => {
  const moreBtn = document.querySelectorAll('.more-btn');
  const sectionMoreThanGaming = document.getElementById('gaming');

  moreBtn.forEach(btn => btn.addEventListener('click', () => {
    sectionMoreThanGaming.scrollIntoView();
  }));

  const upBtn = document.querySelector('.contact__up');
  const logos = document.querySelectorAll('.logo');

  function scrollToPageTop() {
    document.documentElement.scrollTo(0, 0);
  }

  [...logos].forEach((logo) => logo.addEventListener('click', () => {
    scrollToPageTop();
  }));

  upBtn.addEventListener('click', () => {
    scrollToPageTop();
  })
}
