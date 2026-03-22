const locationData = {
  ukraine: ['Kyiv', 'Kharkiv', 'Odesa', 'Dnipro', 'Zaporizhzhia', 'Lviv', 'Kryvyi Rih', 'Mykolaiv', 'Vinnytsia'],
  uk: ['London', 'Birmingham', 'Manchester', 'Glasgow', 'Leeds', 'Liverpool', 'Newcastle upon Tyne', 'Sheffield', 'Bristol'],
  morocco: ['Casablanca', 'Rabat', 'Fes', 'Marrakesh', 'Tangier', 'Agadir', 'Meknes', 'Oujda', 'Kenitra'],
  china: ['Shanghai', 'Beijing', 'Chongqing', 'Tianjin', 'Guangzhou', 'Shenzhen', 'Chengdu', 'Nanjing', 'Wuhan'],
  france: ['Paris', 'Marseille', 'Lyon', 'Toulouse', 'Nice', 'Nantes', 'Strasbourg', 'Montpellier', 'Bordeaux'],
  germany: ['Berlin', 'Hamburg', 'Munich', 'Cologne', 'Frankfurt', 'Stuttgart', 'Düsseldorf', 'Leipzig', 'Dortmund'],
  italy: ['Rome', 'Milan', 'Naples', 'Turin', 'Palermo', 'Genoa', 'Bologna', 'Florence', 'Bari'],
  spain: ['Madrid', 'Barcelona', 'Valencia', 'Seville', 'Zaragoza', 'Malaga', 'Murcia', 'Palma', 'Las Palmas'],
  poland: ['Warsaw', 'Krakow', 'Lodz', 'Wroclaw', 'Poznan', 'Gdansk', 'Szczecin', 'Bydgoszcz', 'Lublin'],
};

export function initLocationSelects() {
  const countrySelect = document.querySelector('#country-select');
  const citySelect = document.querySelector('#city-select');

  if (!countrySelect || !citySelect) return;

  const countryItems = countrySelect.querySelectorAll('.select__item');
  const cityButton = citySelect.querySelector('.select__button');
  const cityList = citySelect.querySelector('.select__list');

  countryItems.forEach(item => {
    item.addEventListener('click', () => {
      const selectedCountry = item.getAttribute('data-value');

      cityList.innerHTML = '';

      if (locationData[selectedCountry]) {
        cityButton.textContent = locationData[selectedCountry][0];

        locationData[selectedCountry].forEach(cityName => {
          const li = document.createElement('li');
          li.className = 'form__item select__item';
          li.textContent = cityName;
          li.setAttribute('data-value', cityName.toLowerCase());

          li.addEventListener('click', (e) => {
            e.stopPropagation();

            cityButton.textContent = cityName;
            citySelect.classList.remove('is-open');
          });

          cityList.appendChild(li);
        });
      }
    });
  });
}
