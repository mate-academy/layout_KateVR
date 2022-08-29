'use strict';

// Change language

(function() {
  const style = document.createElement('style');

  style.innerHTML = '.unselect-language{display: none;}';
  document.getElementsByTagName('head')[0].appendChild(style);

  function setLanguage(currentLanguage) {
    const notCurrentTagNames = document.querySelectorAll('[data-lang]');

    notCurrentTagNames.forEach(function(tag) {
      if (!tag.classList.contains('unselect-language')) {
        tag.classList.add('unselect-language');
      }
    });

    const currentTagNames
    = document.querySelectorAll(`[data-lang="${currentLanguage}"]`);

    currentTagNames.forEach(function(tag) {
      if (tag.classList.contains('unselect-language')) {
        tag.classList.remove('unselect-language');
      }
    });

    const selectLanguage = document.getElementById('change-language');

    selectLanguage.value = currentLanguage;
  }

  function changeLanguage() {
    const selectLanguage = document.getElementById('change-language');
    const selectLang
    = selectLanguage.options[selectLanguage.selectedIndex].value;

    setLanguage(selectLang);
  }

  function getLanguage() {
    const language = window.navigator.userLanguage || window.navigator.language;
    let lang = language.substr(0, 2).toLowerCase();
    const localLang = null;

    if (localLang !== null) {
      lang = localLang;
    }

    const isExist = document.querySelectorAll(`[data-lang="${lang}"]`);

    if (isExist.length === 0) {
      lang = 'en';
    }

    return lang;
  }

  document.getElementById('change-language')
    .addEventListener('change', function(e) {
      changeLanguage();
    });

  try {
    setLanguage(getLanguage());
  } catch (e) {}
})();

// Line under image

const tabs = {

  class: {
    bar: 'tabs',
    tab: 'tabs--tab',
    line: 'tabs--line',
    active: '-active',
  },

  colorAttribute: 'data-tab-color',

  select: function(_tab) {
    const first = _tab.parentElement;
    const selected = first.querySelector('.' + tabs.class.active);
    const line = first.querySelector('.' + tabs.class.line);
    const tabColor = _tab.getAttribute(tabs.colorAttribute);

    if (tabColor) {
      line.style.backgroundColor = tabColor;
    } else {
      line.style.backgroundColor = null;
    }

    if (selected) {
      selected.classList.remove(tabs.class.active);
    }

    line.style.left = _tab.offsetLeft + 'px';
    line.style.width = _tab.offsetWidth + 'px';

    _tab.classList.add(tabs.class.active);
  },

  setUp: function(_tabBar) {
    const allTabs = _tabBar.querySelectorAll('.' + tabs.class.tab);

    for (let i = 0, ii = allTabs.length; i < ii; i++) {
      allTabs[i].addEventListener('click', function() {
        tabs.select(this);
      }, false);
    }

    tabs.select(allTabs[0]);
  },

  init: function() {
    const tabBars = document.querySelectorAll('.' + tabs.class.bar);

    for (let i = 0, ii = tabBars.length; i < ii; i++) {
      tabs.setUp(tabBars[i]);
    }
  },
};

tabs.init();

// Swap image
const sliderImages = document.querySelectorAll('.slide');
const arrowLeft = document.querySelector('#arrow-left');
const arrowRight = document.querySelector('#arrow-right');
let current = 0;

// Clear all images
function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = 'none';
  }
}

// Init slider
function startSlide() {
  reset();
  sliderImages[0].style.display = 'block';
}

// Show prev
function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = 'block';
  current--;
}

// Show next
function slideRight() {
  reset();
  sliderImages[current + 1].style.display = 'block';
  current++;
}

// Left arrow click
arrowLeft.addEventListener('click', function() {
  if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
});

// Right arrow click
arrowRight.addEventListener('click', function() {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideRight();
});

startSlide();

// Scroll
window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#language') {
    document.body.classList.add('page__body--with-language');
  } else {
    document.body.classList.remove('page__body--with-language');
  }
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#video') {
    document.body.classList.add('page__body--with-video');
  } else {
    document.body.classList.remove('page__body--with-video');
  }
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#buy') {
    document.body.classList.add('page__body--with-buy');
  } else {
    document.body.classList.remove('page__body--with-buy');
  }
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#buy2') {
    document.body.classList.add('page__body--with-buy2');
  } else {
    document.body.classList.remove('page__body--with-buy2');
  }
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#buy3') {
    document.body.classList.add('page__body--with-buy3');
  } else {
    document.body.classList.remove('page__body--with-buy3');
  }
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#faq') {
    document.body.classList.add('page__body--with-faq');
  } else {
    document.body.classList.remove('page__body--with-faq');
  }
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#help') {
    document.body.classList.add('page__body--with-help');
  } else {
    document.body.classList.remove('page__body--with-help');
  }
});

// Select region
const selectElem = document.getElementById('select');
const pElem = document.getElementById('pro');

selectElem.addEventListener('change', function() {
  const index = selectElem.selectedIndex;

  pElem.innerHTML = ((index * 1200) + 1200) + '$';
});

const countryStateInfo = {
  'Ukraine': {
    'Vinnytsia': {},
    'Dnipro': {},
    'Zhytomyr': {},
    'Zaporizhzhia': {},
    'Ivano-Frankivsk': {},
    'Kyiv': {},
    'Kropyvnytskyi': {},
    'Lutsk': {},
    'Lviv': {},
    'Mykolaiv': {},
    'Odesa': {},
    'Poltava': {},
    'Rivne': {},
    'Sumy': {},
    'Ternopil': {},
    'Uzhhorod': {},
    'Kharkiv': {},
    'Kherson': {},
    'Khmelnytskyi': {},
    'Cherkasy': {},
    'Chernivtsi': {},
    'Chernihiv': {},
  },
  'United Kingdom': {
    'London': {},
    'Birmingham': {},
    'Glasgow': {},
    'Liverpool': {},
    'Bristol': {},
    'Manchester': {},
    'Sheffield': {},
    'Leeds': {},
    'Edinburgh': {},
    'Leicester': {},
    'Coventry': {},
    'Bradford': {},
    'Cardiff': {},
    'Belfast': {},
    'Nottingham': {},
    'Hull': {},
    'Newcastle': {},
    'Stoke': {},
    'Southampton': {},
    'Derby': {},
    'Portsmouth': {},
    'Brighton': {},
    'Plymouth': {},
    'Northampton': {},
    'Reading': {},
  },
  'USA': {
    'Alabama': {},
    'Cheyenne': {},
    'Birmingham': {},
    'Municipality of Anchorage': {},
    'Phoenix': {},
    'Little Rock': {},
    'Los Angeles': {},
    'Denver': {},
    'Bridgeport': {},
    'Wilmington': {},
    'Jacksonville': {},
    'Atlanta': {},
    'Honolulu': {},
    'Boise': {},
    'Chicago': {},
    'Indianapolis': {},
    'Des Moines': {},
    'Wichita': {},
    'Louisville': {},
    'New Orleans': {},
    'Portland': {},
    'Boston': {},
    'Detroit': {},
    'Minneapolis': {},
    'Jackson': {},
    'Kansas City': {},
    'Billings': {},
    'Omaha': {},
    'Las Vegas': {},
    'Manchester': {},
    'Newark': {},
    'New York City': {},
    'Fargo': {},
    'Columbus': {},
    'Oklahoma City': {},
    'Philadelphia': {},
    'Providence': {},
    'Charleston': {},
    'Sioux Falls': {},
    'Nashville': {},
    'Houston': {},
    'Salt Lake City': {},
    'Virginia Beach': {},
    'Seattle': {},
    'Milwaukee': {},
  },
  'Poland': {
    'Warszawa': {},
    'Wrocław': {},
    'Bydgoszcz': {},
    'Toruń': {},
    'Lublin': {},
    'Gorzów Wielkopolski': {},
    'Zielona Góra': {},
    'Łódź': {},
    'Kraków': {},
    'Opole': {},
    'Rzeszów': {},
    'Białystok': {},
    'Gdańsk': {},
    'Kielce': {},
    'Katowice': {},
    'Poznań': {},
    'Olsztyn': {},
    'Szczecin': {},
  },
};

window.onload = function() {
  // Get html elements
  const countySel = document.getElementById('countySel');
  const stateSel = document.getElementById('stateSel');

  // Load countries
  for (const country in countryStateInfo) {
    countySel.options[countySel.options.length]
      = new global.Option(country, country);
  }

  // County Changed
  countySel.onchange = function() {
    stateSel.length = 1; // remove all options bar first

    if (this.selectedIndex < 1) {
      return;
    } // done

    for (const state in countryStateInfo[this.value]) {
      stateSel.options[stateSel.options.length]
        = new global.Option(state, state);
    }
  };

  // State Changed
  stateSel.onchange = function() {
    if (this.selectedIndex < 1) {} // done
  };
};

// Send form

const formClass = document.querySelector('.form-class');

function submitForm(event) {
  event.preventDefault();
  formClass.reset();
  window.open('#buy2', '_self');
}

formClass.addEventListener('submit', submitForm);

const formClass2 = document.querySelector('.form-class2');

function submitForm2(event) {
  event.preventDefault();
  formClass2.reset();
  window.open('#buy3', '_self');
}

formClass2.addEventListener('submit', submitForm2);

const formClass3 = document.querySelector('.form-class3');

function submitForm3(event) {
  event.preventDefault();
  formClass3.reset();
  window.scrollTo(0, 0);
}

formClass3.addEventListener('submit', submitForm3);

// Move element

const parent = document.getElementById('parent');
const child = document.getElementById('child');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  parent.appendChild(child);
});

const parent2 = document.getElementById('parent2');
const child2 = document.getElementById('child2');
const btn2 = document.getElementById('btn2');

btn2.addEventListener('click', () => {
  parent2.appendChild(child2);
});

const el = document.getElementById('bought');

el.addEventListener('click', function() {
  window.open('#', '_self');
});

el.addEventListener('click', function() {
  window.location.reload();
});

// Toggles
const dataAttr = 'data-toggler';

// Toggles the show/hide state of button and block using ARIA attributes
const toggleState = (togglerBtn, isHidden) => {
  const toggledAttr = togglerBtn.getAttribute(dataAttr);

  if (!toggledAttr) {
    return;
  }

  const toggled = document.querySelector(toggledAttr);

  if (!toggled) {
    return;
  }

  if (isHidden) { // Show
    // toggled.setAttribute("style", "max-height: " + getHeight(toggled));
    toggled.setAttribute('style', 'max-height:' + toggled.scrollHeight + 'px');
  } else { // Hide
    // toggled.removeAttribute("style");
  }

  togglerBtn.setAttribute('aria-expanded', isHidden);
  toggled.setAttribute('aria-hidden', !isHidden);
};

const isOpen = (togglerBtn) => {
  return togglerBtn.getAttribute('aria-expanded') === 'true';
};

const togglerClicked = (e) => {
  const togglerBtn = e.target;

  toggleState(togglerBtn, !isOpen(togglerBtn));
};

const togglerButtons = document.querySelectorAll('[' + dataAttr + ']');

// Run through each toggle button which has a data-toggler3 set
for (const togglerBtn of togglerButtons) {
  // Set ARIA states
  toggleState(togglerBtn, isOpen(togglerBtn));

  // Toggle ARIA state on a button click
  togglerBtn.addEventListener('click', togglerClicked);
}

const content = document.getElementById('content');
const arrow = document.getElementById('arrow');
let rot = 360;

arrow.addEventListener('click', function() {
  content.style = 'transform: rotate(' + rot + 'deg)';
  rot += 180;
});

const content2 = document.getElementById('content2');
const arrow2 = document.getElementById('arrow2');
let rot2 = 360;

arrow2.addEventListener('click', function() {
  content2.style = 'transform: rotate(' + rot2 + 'deg)';
  rot2 += 180;
});

const content3 = document.getElementById('content3');
const arrow3 = document.getElementById('arrow3');
let rot3 = 360;

arrow3.addEventListener('click', function() {
  content3.style = 'transform: rotate(' + rot3 + 'deg)';
  rot3 += 180;
});

const content4 = document.getElementById('content4');
const arrow4 = document.getElementById('arrow4');
let rot4 = 360;

arrow4.addEventListener('click', function() {
  content4.style = 'transform: rotate(' + rot4 + 'deg)';
  rot4 += 180;
});

const contentua = document.getElementById('contentua');
const arrowua = document.getElementById('arrow-ua');
let rot5 = 360;

arrowua.addEventListener('click', function() {
  contentua.style = 'transform: rotate(' + rot5 + 'deg)';
  rot5 += 180;
});

const content2ua = document.getElementById('content2ua');
const arrow2ua = document.getElementById('arrow2-ua');
let rot6 = 360;

arrow2ua.addEventListener('click', function() {
  content2ua.style = 'transform: rotate(' + rot6 + 'deg)';
  rot6 += 180;
});

const content3ua = document.getElementById('content3ua');
const arrow3ua = document.getElementById('arrow3-ua');
let rot7 = 360;

arrow3ua.addEventListener('click', function() {
  content3ua.style = 'transform: rotate(' + rot7 + 'deg)';
  rot7 += 180;
});

const content4ua = document.getElementById('content4ua');
const arrow4ua = document.getElementById('arrow4-ua');
let rot8 = 360;

arrow4ua.addEventListener('click', function() {
  content4ua.style = 'transform: rotate(' + rot8 + 'deg)';
  rot8 += 180;
});

const tabs2 = {

  class: {
    bar: 'tabs2',
    tab: 'tabs2--tab',
    line: 'tabs2--line',
    active: '-active',
  },

  colorAttribute: 'data-tab-color',

  select: function(_tab2) {
    const first = _tab2.parentElement;
    const selected = first.querySelector('.' + tabs2.class.active);
    const line = first.querySelector('.' + tabs2.class.line);
    const tabColor = _tab2.getAttribute(tabs2.colorAttribute);

    if (tabColor) {
      line.style.backgroundColor = tabColor;
    } else {
      line.style.backgroundColor = null;
    }

    if (selected) {
      selected.classList.remove(tabs2.class.active);
    }

    line.style.left = _tab2.offsetLeft + 'px';
    line.style.width = _tab2.offsetWidth + 'px';

    _tab2.classList.add(tabs2.class.active);
  },

  setUp: function(_tabBar) {
    const allTabs = _tabBar.querySelectorAll('.' + tabs2.class.tab);

    for (let i = 0, ii = allTabs.length; i < ii; i++) {
      allTabs[i].addEventListener('click', function() {
        tabs2.select(this);
      }, false);
    }

    tabs2.select(allTabs[0]);
  },

  init: function() {
    const tabBars = document.querySelectorAll('.' + tabs2.class.bar);

    for (let i = 0, ii = tabBars.length; i < ii; i++) {
      tabs2.setUp(tabBars[i]);
    }
  },
};

tabs2.init();

const sliderImages2 = document.querySelectorAll('.slide5');
const arrowLeft2 = document.querySelector('#arrow-left2');
const arrowRight2 = document.querySelector('#arrow-right2');

// Clear all images
function reset2() {
  for (let i = 0; i < sliderImages2.length; i++) {
    sliderImages2[i].style.display = 'none';
  }
}

// Init slider
function startSlide2() {
  reset2();
  sliderImages2[0].style.display = 'block';
}

// Show prev
function slideLeft2() {
  reset2();
  sliderImages2[current - 1].style.display = 'block';
  current--;
}

// Show next
function slideRight2() {
  reset2();
  sliderImages2[current + 1].style.display = 'block';
  current++;
}

// Left arrow click
arrowLeft2.addEventListener('click', function() {
  if (current === 0) {
    current = sliderImages2.length;
  }
  slideLeft2();
});

// Right arrow click
arrowRight2.addEventListener('click', function() {
  if (current === sliderImages2.length - 1) {
    current = -1;
  }
  slideRight2();
});

startSlide2();

const txt = document.getElementById('toggle-box-content');
const btn3 = document.getElementById('toggle-box-button');

btn3.addEventListener('click', function() {
  toggleDisplay(txt);
  toggleButtonText(btn3);
});

function toggleDisplay(el1) {
  if (el1.style.visibility === 'visible') {
    el1.style.visibility = 'hidden';
    el1.style.display = 'none';
  } else {
    el1.style.visibility = 'visible';
    el1.style.display = 'block';
  }
}

function toggleButtonText(el1) {
  if (el1.innerHTML === '-') {
    el1.innerHTML = '+';
  } else {
    el1.innerHTML = '-';
  }
}

const txt2 = document.getElementById('toggle-box-content2');
const btn4 = document.getElementById('toggle-box-button2');

btn4.addEventListener('click', function() {
  toggleDisplay2(txt2);
  toggleButtonText2(btn4);
});

function toggleDisplay2(el2) {
  if (el2.style.visibility === 'visible') {
    el2.style.visibility = 'hidden';
    el2.style.display = 'none';
  } else {
    el2.style.visibility = 'visible';
    el2.style.display = 'block';
  }
}

function toggleButtonText2(el2) {
  if (el2.innerHTML === '-') {
    el2.innerHTML = '+';
  } else {
    el2.innerHTML = '-';
  }
}

const txt3 = document.getElementById('toggle-box-content3');
const btn5 = document.getElementById('toggle-box-button3');

btn5.addEventListener('click', function() {
  toggleDisplay3(txt3);
  toggleButtonText3(btn5);
});

function toggleDisplay3(el3) {
  if (el3.style.visibility === 'visible') {
    el3.style.visibility = 'hidden';
    el3.style.display = 'none';
  } else {
    el3.style.visibility = 'visible';
    el3.style.display = 'block';
  }
}

function toggleButtonText3(el3) {
  if (el3.innerHTML === '-') {
    el3.innerHTML = '+';
  } else {
    el3.innerHTML = '-';
  }
}

const divColor = document.getElementById('toggle-box-button');

const btnColor = document.getElementById('toggle-box-button');

btnColor.onclick = function() {
  divColor.classList.toggle('secondecolor');
};

const divColor2 = document.getElementById('toggle-box-button2');

const btnColor2 = document.getElementById('toggle-box-button2');

btnColor2.onclick = function() {
  divColor2.classList.toggle('secondecolor--2');
};

const divColor3 = document.getElementById('toggle-box-button3');

const btnColor3 = document.getElementById('toggle-box-button3');

btnColor3.onclick = function() {
  divColor3.classList.toggle('secondecolor--3');
};
