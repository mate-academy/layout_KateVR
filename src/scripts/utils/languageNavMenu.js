export const languageNavMenu = () => {
  const languageLink = document.getElementById('language-link');
  const languageMenu = document.getElementById('language-menu');
  const mainMenu = document.getElementById('main-menu');
  const backToMain = document.getElementById('back-to-main');
  const backIcon = document.querySelector('.icon--back');
  const closeIcon = document.querySelector('.icon--close');
  const sideBar = document.querySelector('.side-bar');

  backIcon.classList.add('hidden');
  closeIcon.classList.remove('hidden');

  languageLink.addEventListener('click', (event) => {
    event.preventDefault();
    mainMenu.classList.add('hidden');
    languageMenu.classList.remove('hidden');

    closeIcon.classList.add('hidden');
    backIcon.classList.remove('hidden');

    sideBar.classList.add('language-open');
  });

  backToMain.addEventListener('click', (event) => {
    event.preventDefault();
    languageMenu.classList.add('hidden');
    mainMenu.classList.remove('hidden');

    closeIcon.classList.remove('hidden');
    backIcon.classList.add('hidden');

    sideBar.classList.remove('language-open');
  });
};
