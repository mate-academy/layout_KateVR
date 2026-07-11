export const setupTechDetailToggle = () => {
  const openBars = document.querySelectorAll('.open-bar');
  const openBtns = document.querySelectorAll('.open-bar__circle');

  openBtns.forEach(openBtn => {
    openBtn.addEventListener('click', (e) => {
      e.target.closest('.open-bar').classList.toggle('open-bar--active');
    });
  });


  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1280) {
      openBars.forEach(openEl => {
        openEl.classList.remove('open-bar--active');
      });
    }
  });
}
