'use strict';

const countryInput = document.querySelector('.dropdown__input--country');
const dropdownButtonCity = document.querySelector('.dropdown__button--city');

// eslint-disable-next-line max-len
const dropdownListItemsCountry = document.querySelectorAll('.dropdown__list-item--country');
// eslint-disable-next-line max-len
const dropdownListItemsCity = document.querySelectorAll('.dropdown__list-item--city');

// eslint-disable-next-line max-len
// const countries = ['USA', 'Ukraine', 'Estonia', 'France', 'Spain', 'China', 'Italy', 'Turkey'];
// eslint-disable-next-line max-len
const countries = ['USA', 'Ukraine', 'Estonia'];
const countriesSorted = countries.sort();

for (let ctrs = 0; ctrs < dropdownListItemsCountry.length; ctrs++) {
  for (let c = 0; c < countriesSorted.length; c++) {
    dropdownListItemsCountry[ctrs].innerHTML = countriesSorted[ctrs];
  }
}

for (let i = 0; i < dropdownListItemsCity.length; i++) {
  // eslint-disable-next-line max-len
  const ukraineCities = ['Lviv', 'Kyiv', 'Zaporizhia', 'Kharkiv', 'Odessa', 'Dnipro', 'Donetsk', 'Mykolaiv', 'Rovno', 'Sevastopol', 'Belgorod', 'Rostov-on-Don', 'Krasnodar'];
  const ukraineCitiesSorted = ukraineCities.sort();
  // eslint-disable-next-line max-len
  const usaCities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose', 'Austin', 'Jacksonville', 'Fort Worth'];
  const usaCitiesSorted = usaCities.sort();
  // eslint-disable-next-line max-len
  const estoniaCities = ['Tallinn', 'Tartu', 'Narva', 'Pärnu', 'Kohtla-Järve', 'Viljandi', 'Rakvere', 'Maardu', 'Sillamäe', 'Kuressaare', 'Valga', 'Võru', 'Jõhvi'];
  const estoniaCitiesSorted = estoniaCities.sort();
  // eslint-disable-next-line max-len
  const franceCities = ['Paris', 'Marseille', 'Lyon', 'Toulouse', 'Nice', 'Nantes', 'Strasbourg', 'Montpellier', 'Bordeaux', 'Lille', 'Rennes', 'Reims', 'Le Havre'];
  const franceCitiesSorted = franceCities.sort();
  // eslint-disable-next-line max-len
  const spainCities = ['Madrid', 'Barcelona', 'Valencia', 'Seville', 'Zaragoza', 'Málaga', 'Murcia', 'Palma de Mallorca', 'Las Palmas de Gran Canaria', 'Bilbao', 'Alicante', 'Córdoba', 'Valladolid'];
  const spainCitiesSorted = spainCities.sort();
  // eslint-disable-next-line max-len
  const chinaCities = ['Shanghai', 'Beijing', 'Chongqing', 'Guangzhou', 'Shenzhen', 'Tianjin', 'Wuhan', 'Dongguan', 'Chengdu', 'Foshan', 'Nanjing', 'Shenyang', 'Hangzhou'];
  const chinaCitiesSorted = chinaCities.sort();
  // eslint-disable-next-line max-len
  const italyCities = ['Rome', 'Milan', 'Naples', 'Turin', 'Palermo', 'Genoa', 'Bologna', 'Florence', 'Bari', 'Catania', 'Venice', 'Verona', 'Messina'];
  const italyCitiesSorted = italyCities.sort();
  // eslint-disable-next-line max-len
  const turkeyCities = ['Istanbul', 'Ankara', 'İzmir', 'Bursa', 'Adana', 'Gaziantep', 'Konya', 'Antalya', 'Şanlıurfa', 'Mersin', 'Diyarbakır', 'Kayseri', 'Samsun'];
  const turkeyCitiesSorted = turkeyCities.sort();

  if (countryInput.value === '') {
    dropdownButtonCity.setAttribute('disabled', '');
    dropdownButtonCity.style.cursor = 'not-allowed';
  }

  if (countryInput.value === 'Estonia') {
    for (let e = 0; e < estoniaCitiesSorted.length; e++) {
      dropdownListItemsCity[i].innerHTML = estoniaCitiesSorted[i];
      // eslint-disable-next-line max-len
      dropdownListItemsCity[i].setAttribute('data-value', estoniaCitiesSorted[i]);
    }
  }

  if (countryInput.value === 'USA') {
    for (let u = 0; u < usaCitiesSorted.length; u++) {
      dropdownListItemsCity[i].innerHTML = usaCitiesSorted[i];
      // eslint-disable-next-line max-len
      dropdownListItemsCity[i].setAttribute('data-value', usaCitiesSorted[i]);
    }
  }

  if (countryInput.value === 'Ukraine') {
    for (let uk = 0; uk < ukraineCitiesSorted.length; uk++) {
      dropdownListItemsCity[i].innerHTML = ukraineCitiesSorted[i];
      // eslint-disable-next-line max-len
      dropdownListItemsCity[i].setAttribute('data-value', ukraineCitiesSorted[i]);
    }
  }

  if (countryInput.value === 'France') {
    for (let f = 0; f < franceCitiesSorted.length; f++) {
      dropdownListItemsCity[i].innerHTML = franceCitiesSorted[i];
      // eslint-disable-next-line max-len, max-len
      dropdownListItemsCity[i].setAttribute('data-value', franceCitiesSorted[i]);
    }
  }

  if (countryInput.value === 'Spain') {
    for (let s = 0; s < spainCitiesSorted.length; s++) {
      dropdownListItemsCity[i].innerHTML = spainCitiesSorted[i];
      // eslint-disable-next-line max-len, max-len
      dropdownListItemsCity[i].setAttribute('data-value', spainCitiesSorted[i]);
    }
  }

  if (countryInput.value === 'China') {
    for (let ch = 0; ch < chinaCitiesSorted.length; ch++) {
      dropdownListItemsCity[i].innerHTML = chinaCitiesSorted[i];
      // eslint-disable-next-line max-len, max-len
      dropdownListItemsCity[i].setAttribute('data-value', chinaCitiesSorted[i]);
    }
  }

  if (countryInput.value === 'Italy') {
    for (let it = 0; it < italyCitiesSorted.length; it++) {
      dropdownListItemsCity[i].innerHTML = italyCitiesSorted[i];
      // eslint-disable-next-line max-len, max-len
      dropdownListItemsCity[i].setAttribute('data-value', italyCitiesSorted[i]);
    }
  }

  if (countryInput.value === 'Turkey') {
    for (let t = 0; t < turkeyCitiesSorted.length; t++) {
      dropdownListItemsCity[i].innerHTML = turkeyCitiesSorted[i];
      // eslint-disable-next-line max-len, max-len
      dropdownListItemsCity[i].setAttribute('data-value', turkeyCitiesSorted[i]);
    }
  }
}
