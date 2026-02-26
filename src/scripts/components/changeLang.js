export function changeLang() {
  const langItems = document.querySelectorAll('.lang__item');
  const languageItems = document.querySelectorAll('.language__item');
  const langButton = document.querySelector('.lang__button');

  // Додамо лог, щоб побачити, чи знаходить JS елементи
  console.log('Lang items found:', langItems.length, languageItems.length);

  const allNodes = [...langItems, ...languageItems];

  allNodes.forEach((node) => {
    node.addEventListener('click', (e) => {
      // Якщо це посилання <a> всередині <li>, зупиняємо перехід
      if (e.target.tagName === 'A') e.preventDefault();

      const selectedLang = node.dataset.lang;
      console.log('Selected:', selectedLang);

      if (langButton) langButton.textContent = selectedLang;

      // Оновлюємо класи для ВСІХ знайдених елементів
      allNodes.forEach(item => {
        const isActive = item.dataset.lang === selectedLang;
        // Визначаємо правильний префікс класу (lang або language)
        const baseClass = item.classList.contains('lang__item') ? 'lang__item' : 'language__item';

        item.classList.toggle(`${baseClass}--active`, isActive);

        // Оновлюємо посилання всередині, якщо воно є
        const link = item.querySelector('a');
        if (link) {
          link.classList.toggle('language__link--active', isActive);
        }
      });
    });
  });
}
