export function initVideoModal() {
  const videoModal = document.getElementById('video-modal');
  const closeBtn = document.getElementById('close-video');
  const playerContainer = document.getElementById('video-iframe-container');
  const videoButtons = document.querySelectorAll('.header__video-button, .product__video-button');
  const youtubeId = "SvTbB19bvIw";
  const videoSrc = `https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&wmode=opaque`;

  const openModal = (e) => {
    e.preventDefault();

    playerContainer.innerHTML = `
      <iframe
        src="${videoSrc}"
        allow="autoplay; encrypted-media"
        allowfullscreen>
      </iframe>`;

    videoModal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    videoModal.classList.remove('is-open');
    playerContainer.innerHTML = '';
    document.body.style.overflow = '';
  };

  videoButtons.forEach(btn => btn.addEventListener('click', openModal));
  closeBtn?.addEventListener('click', closeModal);

  videoModal?.addEventListener('click', (e) => {
    if (e.target === videoModal) closeModal();
  });
}
