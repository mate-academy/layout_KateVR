export const videoPlayer = () => {
  const videoButtons = document.querySelectorAll('.video__btn');
  const videoModal = document.querySelector('.video-modal');
  const videoClose = document.querySelector('.video-modal__close');
  const videoPlayer = document.getElementById('video-player');

  videoButtons.forEach((videoButton) => {
    videoButton.addEventListener('click', (event) => {
      event.preventDefault();
      openModal();
    });
  });

  videoClose.addEventListener('click', () => {
    closeModal();
  });

  videoModal.addEventListener('click', (event) => {
    if (event.target === videoModal) {
      closeModal();
    }
  });

  function openModal() {
    const videoSrc = 'https://www.youtube.com/embed/9xzD-XzLLQw?autoplay=1';
    videoPlayer.src = videoSrc;
    videoModal.classList.add('show');
  }

  function closeModal() {
    videoModal.classList.remove('show');
    stopVideo();
  }

  function stopVideo() {
    videoPlayer.src = '';
  }
};
