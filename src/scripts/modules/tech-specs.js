export const techSpecs = () => {
  const tabs = document.querySelectorAll('.tech-item__plus');
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const content = tab.nextElementSibling;
      if (content) {
        if (content.classList.contains('tech-item__content--open')) {
          content.classList.remove('tech-item__content--open');
          tab.classList.remove('tech-item__plus--active');
        } else {
          tabs.forEach((otherTab) => {
            const otherContent = otherTab.nextElementSibling;
            if (otherContent && otherContent !== content) {
              otherContent.classList.remove('tech-item__content--open');
              otherTab.classList.remove('tech-item__plus--active');
            }
          });
          content.classList.add('tech-item__content--open');
          tab.classList.add('tech-item__plus--active');
        }
      }
    });
  });
};
