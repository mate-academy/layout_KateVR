export function initTechSpecs() {
  const triggers = document.querySelectorAll('.tech__trigger');
  const blocks = document.querySelectorAll('.tech__info-block');

  triggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.stopPropagation();

      const targetId = trigger.getAttribute('data-target');
      const targetBlock = document.getElementById(targetId);
      const isActive = targetBlock.classList.contains('is-visible');

      blocks.forEach(block => block.classList.remove('is-visible'));
      triggers.forEach(t => t.classList.remove('is-active'));

      if (!isActive) {
        targetBlock.classList.add('is-visible');
        trigger.classList.add('is-active');
      }
    });
  });

  document.addEventListener('click', () => {
    blocks.forEach(block => block.classList.remove('is-visible'));
    triggers.forEach(t => t.classList.remove('is-active'));
  });

  blocks.forEach(block => {
    block.addEventListener('click', (e) => e.stopPropagation());
  });
}
