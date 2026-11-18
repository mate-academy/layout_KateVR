export const buttonPlayVideo = () => {
  const openBtn = document.querySelector('.video-open') as HTMLElement;
  const openBtn2 = document.querySelector('.video-open2') as HTMLElement;
  const modal = document.querySelector('#videoModal') as HTMLElement;
  const iframe = modal.querySelector(
    '.video-modal__iframe',
  ) as HTMLIFrameElement;
  const closeBtn = modal.querySelector('.video-modal__close') as HTMLElement;
  const overlay = modal.querySelector('.video-modal__overlay') as HTMLElement;

  function openModal(videoUrl) {
    const separator = videoUrl.includes('?') ? '&' : '?';

    modal.classList.add('is-active');

    iframe.src = `${videoUrl}${separator}autoplay=1&mute=0`;

    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('is-active');
    iframe.src = ''; // стоп видео
    document.body.style.overflow = '';
  }

  openBtn.addEventListener('click', () => {
    openModal(openBtn.dataset.video);
  });

  openBtn2.addEventListener('click', () => {
    openModal(openBtn.dataset.video);
  });

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  });
};
