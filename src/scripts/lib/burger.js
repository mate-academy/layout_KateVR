export function burger() {
  const overlay = document.querySelector('.overlay');
  document.addEventListener('click', documentClick);

  function closeBurger() {
    document.documentElement.classList.toggle('menu-open');
    document.documentElement.classList.toggle('stop-scroll');
    overlay.classList.toggle('_show-ov');
  }

  function documentClick(e) {
      const targetItem = e.target;
      const containesMenu = document.documentElement.classList.contains('menu-open');

      if (targetItem.closest('.item-close') && containesMenu) {
        closeBurger();
      }

      if (targetItem.closest('.icon-menu')) {
        closeBurger();
      }
  }
};

burger();
