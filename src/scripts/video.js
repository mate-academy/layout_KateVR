const closeButton = document.querySelector('.video__close');
const playButtons = document.querySelectorAll('.play-video__link');
const videoPage = document.querySelector('.page__video');
const iframe = document.querySelector('.video__iframe');

closeButton.addEventListener('click', () => {
  videoPage.style.display = 'none';
  iframe.src = iframe.src;
});

playButtons.forEach((playButton) => {
  playButton.addEventListener('click', () => {
    videoPage.style.display = 'block';
  });
});
