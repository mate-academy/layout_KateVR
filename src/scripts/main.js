/* eslint-disable no-unused-lets */
/* eslint-disable no-undef */
'use strict';

const button = document.getElementById('Mbtn');
const button2 = document.getElementById('Mbtn2');

button.addEventListener('click', () => {
  document.getElementById('more').classList.toggle('more--active');
});

button2.addEventListener('click', () => {
  document.getElementById('more').classList.toggle('more--active');
});

window.addEventListener('DOMContentLoaded', (event) => {
  const leftB = document.getElementById('left-button');
  const rightB = document.getElementById('right-button');

  leftB.addEventListener('click', function() {
    plusDivsVideo(-1);
  });

  rightB.addEventListener('click', function() {
    plusDivsVideo(1);
  });
});

const now = document.getElementById('now');

let slideIndexVideo = 1;

showDivsVideo(slideIndexVideo);

function plusDivsVideo(n) {
  showDivsVideo(slideIndexVideo += n);
}

function showDivsVideo(n) {
  let i;
  const x = document.getElementsByClassName('video-player__frame');

  if (n > x.length) {
    slideIndexVideo = 1;
  };

  if (n < 1) {
    slideIndexVideo = x.length;
  };

  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
  };

  x[slideIndexVideo - 1].style.display = 'block';
  now.textContent = slideIndexVideo;
}

const dot1 = document.getElementById('r1');
const dot2 = document.getElementById('r2');
const dot3 = document.getElementById('r3');
const dot4 = document.getElementById('r4');
const dot5 = document.getElementById('r5');

dot1.addEventListener('click', () => {
  document.getElementById('vframe2-mob').style.display = 'none';
  document.getElementById('vframe3-mob').style.display = 'none';
  document.getElementById('vframe4-mob').style.display = 'none';
  document.getElementById('vframe5-mob').style.display = 'none';
  document.getElementById('vframe1-mob').style.display = 'block';
});

dot2.addEventListener('click', () => {
  document.getElementById('vframe1-mob').style.display = 'none';
  document.getElementById('vframe3-mob').style.display = 'none';
  document.getElementById('vframe4-mob').style.display = 'none';
  document.getElementById('vframe5-mob').style.display = 'none';
  document.getElementById('vframe2-mob').style.display = 'block';
});

dot3.addEventListener('click', () => {
  document.getElementById('vframe1-mob').style.display = 'none';
  document.getElementById('vframe2-mob').style.display = 'none';
  document.getElementById('vframe4-mob').style.display = 'none';
  document.getElementById('vframe5-mob').style.display = 'none';
  document.getElementById('vframe3-mob').style.display = 'block';
});

dot4.addEventListener('click', () => {
  document.getElementById('vframe1-mob').style.display = 'none';
  document.getElementById('vframe2-mob').style.display = 'none';
  document.getElementById('vframe3-mob').style.display = 'none';
  document.getElementById('vframe5-mob').style.display = 'none';
  document.getElementById('vframe4-mob').style.display = 'block';
});

dot5.addEventListener('click', () => {
  document.getElementById('vframe1-mob').style.display = 'none';
  document.getElementById('vframe2-mob').style.display = 'none';
  document.getElementById('vframe3-mob').style.display = 'none';
  document.getElementById('vframe4-mob').style.display = 'none';
  document.getElementById('vframe5-mob').style.display = 'block';
});

document.querySelector('div.tech__buttons')
  .addEventListener('click', function(ev) {
    const cl = ev.target.classList;

    if (cl.contains('tech__button')) {
      cl.toggle('tech__button--active');
    }
  });
;

// document.querySelector('div.menu__faq-questions')
//   .addEventListener('click', function(ev) {
//     const cl = ev.target.classList;

//     if (cl.contains('menu__faq-question')) {
//       cl.toggle('menu__faq-question--active');
//     }
//   });
// ;

window.addEventListener('DOMContentLoaded', (event) => {
  const lbtn = document.getElementById('ba-left');
  const rbtn = document.getElementById('ba-right');

  lbtn.addEventListener('click', function() {
    plusDivsCont(-1);
  });

  rbtn.addEventListener('click', function() {
    plusDivsCont(1);
  });
});

let slideIndexCont = 1;

showDivsCont(slideIndexCont);

function plusDivsCont(n) {
  showDivsCont(slideIndexCont += n);
}

function showDivsCont(n) {
  let a;
  const x = document.getElementsByClassName('header__content');

  if (n > x.length) {
    slideIndexCont = 1;
  };

  if (n < 1) {
    slideIndexCont = x.length;
  };

  for (a = 0; a < x.length; a++) {
    x[a].style.display = 'none';
  };

  x[slideIndexCont - 1].style.display = 'flex';
};

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.getElementById('form');

form.onsubmit = function() {
  document.getElementById('form').reset();

  return false;
};

const langMain = document.getElementById('langMain');

const langEn = document.getElementById('langEn');
const langUa = document.getElementById('langUa');
const langPl = document.getElementById('langPl');
const langFr = document.getElementById('langFr');
const langIt = document.getElementById('langIt');
const langSp = document.getElementById('langSp');
const langDe = document.getElementById('langDe');
const langRo = document.getElementById('langRo');
const langCh = document.getElementById('langCh');

let index = 0;

const visible = ['flex', 'none'];

langMain.addEventListener('click', function onClick() {
  document.getElementById('langMenu').style.display = visible[index];

  index = index >= visible.length - 1 ? 0 : index + 1;
});

langEn.addEventListener('click', () => {
  document.getElementById('langMain').textContent = 'En';
  document.getElementById('langMenu').style.display = 'none';
  event.preventDefault();
});

langUa.addEventListener('click', () => {
  document.getElementById('langMain').textContent = 'Ua';
  document.getElementById('langMenu').style.display = 'none';
  event.preventDefault();
});

langPl.addEventListener('click', () => {
  document.getElementById('langMain').textContent = 'Pl';
  document.getElementById('langMenu').style.display = 'none';
  event.preventDefault();
});

langFr.addEventListener('click', () => {
  document.getElementById('langMain').textContent = 'Fr';
  document.getElementById('langMenu').style.display = 'none';
  event.preventDefault();
});

langIt.addEventListener('click', () => {
  document.getElementById('langMain').textContent = 'It';
  document.getElementById('langMenu').style.display = 'none';
  event.preventDefault();
});

langSp.addEventListener('click', () => {
  document.getElementById('langMain').textContent = 'Sp';
  document.getElementById('langMenu').style.display = 'none';
  event.preventDefault();
});

langDe.addEventListener('click', () => {
  document.getElementById('langMain').textContent = 'De';
  document.getElementById('langMenu').style.display = 'none';
  event.preventDefault();
});

langRo.addEventListener('click', () => {
  document.getElementById('langMain').textContent = 'Ro';
  document.getElementById('langMenu').style.display = 'none';
  event.preventDefault();
});

langCh.addEventListener('click', () => {
  document.getElementById('langMain').textContent = 'Ch';
  document.getElementById('langMenu').style.display = 'none';
  event.preventDefault();
});

const language = document.getElementById('language-go');
const menuBack = document.getElementById('menu-back');

const mFaq = document.getElementById('faq-go');

mFaq.addEventListener('click', () => {
  document.getElementById('menuContent').style.display = 'none';
  document.getElementById('menuFAQ').style.display = 'flex';
  event.preventDefault();
});

language.addEventListener('click', () => {
  document.getElementById('menuContent').style.display = 'none';
  document.getElementById('languageContent').style.display = 'flex';
  event.preventDefault();
});

menuBack.addEventListener('click', () => {
  document.getElementById('languageContent').style.display = 'none';
  document.getElementById('menuContent').style.display = 'flex';
  event.preventDefault();
});

const FaqBack = document.getElementById('faqBack');

FaqBack.addEventListener('click', () => {
  document.getElementById('menuFAQ').style.display = 'none';
  document.getElementById('menuContent').style.display = 'flex';
  event.preventDefault();
});

const helpBack = document.getElementById('helpBack');

helpBack.addEventListener('click', () => {
  document.getElementById('menuHelp').style.display = 'none';
  document.getElementById('menuContent').style.display = 'flex';
  event.preventDefault();
});

const helpgo = document.getElementById('help-go');

helpgo.addEventListener('click', () => {
  document.getElementById('menuContent').style.display = 'none';
  document.getElementById('menuHelp').style.display = 'flex';
  event.preventDefault();
});

const helpToFaq = document.getElementById('helpToFaq');

helpToFaq.addEventListener('click', () => {
  document.getElementById('menuHelp').style.display = 'none';
  document.getElementById('menuContent').style.display = 'none';
  document.getElementById('menuFAQ').style.display = 'flex';
  event.preventDefault();
});

const langEnM = document.getElementById('menuEn');

langEnM.addEventListener('click', () => {
  document.getElementById('langMain').textContent = 'En';
});

const langArM = document.getElementById('menuAr');

langArM.addEventListener('click', () => {
  document.getElementById('langMain').textContent = 'Ar';
});

const langChM = document.getElementById('menuAr');

langChM.addEventListener('click', () => {
  document.getElementById('langMain').textContent = 'Ch';
});

const langChTM = document.getElementById('menuAr');

langChTM.addEventListener('click', () => {
  document.getElementById('langMain').textContent = 'Cht';
});

const langFrM = document.getElementById('menuAr');

langFrM.addEventListener('click', () => {
  document.getElementById('langMain').textContent = 'Fr';
});

const langDeM = document.getElementById('menuAr');

langDeM.addEventListener('click', () => {
  document.getElementById('langMain').textContent = 'De';
});

const langItM = document.getElementById('menuAr');

langItM.addEventListener('click', () => {
  document.getElementById('langMain').textContent = 'It';
});

const langPlM = document.getElementById('menuAr');

langPlM.addEventListener('click', () => {
  document.getElementById('langMain').textContent = 'Pl';
});

const langUaM = document.getElementById('menuAr');

langUaM.addEventListener('click', () => {
  document.getElementById('langMain').textContent = 'Ua';
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#faq') {
    document.body.classList.add('page__body--with-faq');
  } else {
    document.body.classList.remove('page__body--with-faq');
  }
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#videoFull') {
    document.body.classList.add('page__body--with-video');
  } else {
    document.body.classList.remove('page__body--with-video');
  }
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#help') {
    document.body.classList.add('page__body--with-help');
  } else {
    document.body.classList.remove('page__body--with-help');
  }
});

const priceM = document.getElementById('priceM');
const price1 = document.getElementById('price1');
const price2 = document.getElementById('price2');
const price3 = document.getElementById('price3');
const price4 = document.getElementById('price4');
const price5 = document.getElementById('price5');

let index1 = 0;

const visible1 = ['flex', 'none'];

priceM.addEventListener('click', function onClick() {
  document.getElementById('priceAll').style.display = visible1[index1];

  index1 = index1 >= visible.length - 1 ? 0 : index1 + 1;
});

price1.addEventListener('click', () => {
  document.getElementById('priceM').textContent = '1';
  document.getElementById('priceAmount').textContent = '1200$';
  document.getElementById('priceAll').style.display = 'none';
  event.preventDefault();
});

price2.addEventListener('click', () => {
  document.getElementById('priceM').textContent = '2';
  document.getElementById('priceAmount').textContent = '2400$';
  document.getElementById('priceAll').style.display = 'none';
  event.preventDefault();
});

price3.addEventListener('click', () => {
  document.getElementById('priceM').textContent = '3';
  document.getElementById('priceAmount').textContent = '3600$';
  document.getElementById('priceAll').style.display = 'none';
  event.preventDefault();
});

price4.addEventListener('click', () => {
  document.getElementById('priceM').textContent = '4';
  document.getElementById('priceAmount').textContent = '4800$';
  document.getElementById('priceAll').style.display = 'none';
  event.preventDefault();
});

price5.addEventListener('click', () => {
  document.getElementById('priceM').textContent = '5';
  document.getElementById('priceAmount').textContent = '6000$';
  document.getElementById('priceAll').style.display = 'none';
  event.preventDefault();
});

let index2 = 0;

const visible2 = ['flex', 'none'];
const counryMain = document.getElementById('counryMain');
const countryUa = document.getElementById('countryUa');
const countryEn = document.getElementById('countryEn');
const countryFr = document.getElementById('countryFr');
const countryUs = document.getElementById('countryUs');
const countryDe = document.getElementById('countryDe');
const countryIt = document.getElementById('countryIt');
const countryPl = document.getElementById('countryPl');
const countrySp = document.getElementById('countrySp');

counryMain.addEventListener('click', function onClick() {
  document.getElementById('countryOpener').style.display = visible2[index2];

  index2 = index2 >= visible.length - 1 ? 0 : index2 + 1;
});

countryUa.addEventListener('click', () => {
  document.getElementById('counryMain').textContent = 'Ukraine';
  document.getElementById('countryOpener').style.display = 'none';
  event.preventDefault();
});

countryUa.addEventListener('click', () => {
  document.getElementById('counryMain').textContent = 'Ukraine';
  document.getElementById('countryOpener').style.display = 'none';
  cityMain.textContent = 'Kyiv';
  city1.textContent = 'Kyiv';
  city2.textContent = 'Lviv';
  city3.textContent = 'Odesa';
  city4.textContent = 'Dnipro';
  city5.textContent = 'Kharkiv';
  event.preventDefault();
});

countryEn.addEventListener('click', () => {
  document.getElementById('counryMain').textContent = 'England';
  document.getElementById('countryOpener').style.display = 'none';
  cityMain.textContent = 'London';
  city1.textContent = 'London';
  city2.textContent = 'Liverpool';
  city3.textContent = 'Manchester';
  city4.textContent = 'Newcastle';
  city5.textContent = 'Cambridge';
  event.preventDefault();
});

countryUs.addEventListener('click', () => {
  document.getElementById('counryMain').textContent = 'United States';
  document.getElementById('countryOpener').style.display = 'none';
  cityMain.textContent = 'Washington';
  city1.textContent = 'Washington';
  city2.textContent = 'Miami';
  city3.textContent = 'San Francisco';
  city4.textContent = 'New York';
  city5.textContent = 'Dallas';
  event.preventDefault();
});

countryFr.addEventListener('click', () => {
  document.getElementById('counryMain').textContent = 'France';
  document.getElementById('countryOpener').style.display = 'none';
  cityMain.textContent = 'Paris';
  city1.textContent = 'Paris';
  city2.textContent = 'Marseille';
  city3.textContent = 'Lyon';
  city4.textContent = 'Nice';
  city5.textContent = 'Toulouse';
  event.preventDefault();
});

countryDe.addEventListener('click', () => {
  document.getElementById('counryMain').textContent = 'Deuchland';
  document.getElementById('countryOpener').style.display = 'none';
  cityMain.textContent = 'Berlin';
  city1.textContent = 'Berlin';
  city2.textContent = 'Munich';
  city3.textContent = 'Dusseldorf';
  city4.textContent = 'Hamburg';
  city5.textContent = 'Frankfurt';
  event.preventDefault();
});

countryIt.addEventListener('click', () => {
  document.getElementById('counryMain').textContent = 'Italy';
  document.getElementById('countryOpener').style.display = 'none';
  cityMain.textContent = 'Rome';
  city1.textContent = 'Rome';
  city2.textContent = 'Milan';
  city3.textContent = 'Naples';
  city4.textContent = 'Turin';
  city5.textContent = 'Palermo';
  event.preventDefault();
});

countryPl.addEventListener('click', () => {
  document.getElementById('counryMain').textContent = 'Poland';
  document.getElementById('countryOpener').style.display = 'none';
  cityMain.textContent = 'Warsaw';
  city1.textContent = 'Warsaw';
  city2.textContent = 'Katowice';
  city3.textContent = 'Krakiv';
  city4.textContent = 'Wroclav';
  city5.textContent = 'Poznan';
  event.preventDefault();
});

countrySp.addEventListener('click', () => {
  document.getElementById('counryMain').textContent = 'Spain';
  document.getElementById('countryOpener').style.display = 'none';
  cityMain.textContent = 'Barcelona';
  city1.textContent = 'Barcelona';
  city2.textContent = 'Madrid';
  city3.textContent = 'Mallorka';
  city4.textContent = 'Seville';
  city5.textContent = 'Valencia';
  event.preventDefault();
});

let index3 = 0;

const visible3 = ['flex', 'none'];
const cityMain = document.getElementById('cityMain');
const city1 = document.getElementById('city1');
const city2 = document.getElementById('city2');
const city3 = document.getElementById('city3');
const city4 = document.getElementById('city4');
const city5 = document.getElementById('city5');

cityMain.addEventListener('click', function onClick() {
  document.getElementById('cityOpener').style.display = visible3[index3];

  index3 = index3 >= visible3.length - 1 ? 0 : index3 + 1;
});

city1.addEventListener('click', () => {
  document.getElementById('cityMain').textContent = city1.textContent;
  document.getElementById('cityOpener').style.display = 'none';
  event.preventDefault();
});

city2.addEventListener('click', () => {
  document.getElementById('cityMain').textContent = city2.textContent;
  document.getElementById('cityOpener').style.display = 'none';
  event.preventDefault();
});

city3.addEventListener('click', () => {
  document.getElementById('cityMain').textContent = city3.textContent;
  document.getElementById('cityOpener').style.display = 'none';
  event.preventDefault();
});

city4.addEventListener('click', () => {
  document.getElementById('cityMain').textContent = city4.textContent;
  document.getElementById('cityOpener').style.display = 'none';
  event.preventDefault();
});

city5.addEventListener('click', () => {
  document.getElementById('cityMain').textContent = city5.textContent;
  document.getElementById('cityOpener').style.display = 'none';
  event.preventDefault();
});

const toPay = document.getElementById('toPay');
const toComplete = document.getElementById('toComplete');
const form2 = document.getElementById('form2');
const form3 = document.getElementById('form3');
const status1 = document.getElementById('status1');
const status2 = document.getElementById('status2');
const status3 = document.getElementById('status3');

toPay.addEventListener('click', () => {
  form2.style.display = 'none';
  form3.style.display = 'flex';
  status1.classList.remove('cart__content-top-process-status--active');
  status1.classList.add('cart__content-top-process-status--unactive');
  status2.classList.add('cart__content-top-process-status--active');
  event.preventDefault();

  document.getElementById(
    'price'
  ).classList.add('cart__content-main-pricing--active');

  document.getElementById(
    'pay'
  ).classList.add('cart__content-main-container-form--active');
  event.preventDefault();
});

toComplete.addEventListener('click', () => {
  document.getElementById('cartPricing').style.display = 'none';
  document.getElementById('pay').style.display = 'none';
  status1.classList.remove('cart__content-top-process-status--unactive');
  status2.classList.remove('cart__content-top-process-status--active');
  status3.classList.add('cart__content-top-process-status--active');
  document.getElementById('finish').style.display = 'flex';
  event.preventDefault();
});

const otp = document.querySelector('#otp-screen');

for (const pin of otp.children) {
  pin.onkeyup = function() {
    if (this.value.length === parseInt(this.attributes['maxlength'].value)) {
      pin.nextElementSibling.focus();
    }
  };
};

document.getElementById('toPay').disabled = true;

const checking1 = document.getElementById('form2');

checking1.addEventListener('change', () => {
  document.getElementById('toPay').disabled = !checking1.checkValidity();
});

document.getElementById('toComplete').disabled = true;

const checking2 = document.getElementById('form3');

checking2.addEventListener('change', () => {
  document.getElementById('toComplete').disabled = !checking2.checkValidity();
});

const fq1 = document.getElementById('fq1');
const fq2 = document.getElementById('fq2');
const fq3 = document.getElementById('fq3');
const fq4 = document.getElementById('fq4');
const mfq1 = document.getElementById('mfq1');
const mfq2 = document.getElementById('mfq2');
const mfq3 = document.getElementById('mfq3');
const mfq4 = document.getElementById('mfq4');

fq1.addEventListener('click', () => {
  document.getElementById('fqt1').classList.toggle(
    'faq__question-text--active-1');
});

fq2.addEventListener('click', () => {
  document.getElementById('fqt2').classList.toggle(
    'faq__question-text--active-2');
});

fq3.addEventListener('click', () => {
  document.getElementById('fqt3').classList.toggle(
    'faq__question-text--active-3');
});

fq4.addEventListener('click', () => {
  document.getElementById('fqt4').classList.toggle(
    'faq__question-text--active-4');
});

mfq1.addEventListener('click', () => {
  document.getElementById('mfqt1').classList.toggle(
    'faq__question-text--active-1');
});

mfq2.addEventListener('click', () => {
  document.getElementById('mfqt2').classList.toggle(
    'faq__question-text--active-2');
});

mfq3.addEventListener('click', () => {
  document.getElementById('mfqt3').classList.toggle(
    'faq__question-text--active-3');
});

mfq4.addEventListener('click', () => {
  document.getElementById('mfqt4').classList.toggle(
    'faq__question-text--active-4');
});
