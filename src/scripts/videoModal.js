export function initVideoModal() {
  const TABLET_WIDTH = 1280;
  const videoButtons = document.querySelectorAll('.video-button');
  const modal = document.querySelector('.video-modal');
  const video = modal.querySelector('.video-modal__video');
  const YOUTUBE_VIDEO_URL =
    'https://www.youtube.com/embed/SvTbB19bvIw?si=LXBeo7zUC5gdkYcK&autoplay=1';

  videoButtons.forEach((videoButton) => {
    videoButton.addEventListener('click', (e) => modalOpen(e));
  });

  modal.addEventListener('click', (e) => modalClose(e));

  function modalOpen(e) {
    if (window.innerWidth < TABLET_WIDTH) {
      return;
    }

    e.preventDefault();
    video.src = YOUTUBE_VIDEO_URL;
    modal.showModal();
    document.documentElement.style.overflow = 'hidden';
  }

  function modalClose(e) {
    const close = modal.querySelector('.video-modal__close');

    if (e.target === close || e.target === modal) {
      modal.close();
      video.src = '';
      document.documentElement.style.overflow = '';
    }
  }
}
