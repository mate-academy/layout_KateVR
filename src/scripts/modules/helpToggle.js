export const setupHelpToggle = () => {
  const help = document.querySelector('.help');
  const helpContent = document.querySelector('.help__content');
  const firstHelpList = help.querySelector('.help__list--first');
  const helpServiceBtn = help.querySelectorAll('.help__service-btn');
  const closeHelpBtn = document.querySelector('.help__close');

  const openHelpBtns = document.querySelectorAll('.help-btn');

  const closeHelp = () => help?.classList.remove('page__aside--active');
  const openHelp = () => help?.classList.add('page__aside--active');

  openHelpBtns.forEach(btn => btn.addEventListener('click', openHelp));

  closeHelpBtn.addEventListener('click', closeHelp);

  firstHelpList.addEventListener('click', (e) => {
    if (e.target.closest('a')) {
      closeHelp();
    }
  });

  helpServiceBtn.forEach(btn => btn.addEventListener('click', closeHelp));

  document.addEventListener('click', (e) => {
    const eventOwner = e.target;

    if (help.classList.contains('page__aside--active')) {

      if (
        !helpContent.contains(eventOwner)
        && [...openHelpBtns].every(btn => !btn.contains(eventOwner))
      ) {
        closeHelp();
      }
    }
  })
}
