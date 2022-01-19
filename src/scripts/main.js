'use strict';

const togglers = document.querySelectorAll('.tech-specs__show');
const techDescs = document.querySelectorAll('.tech-specs__desc');
const togglersNum = togglers.length;

for (let i = 0; i < togglersNum; i++) {
  togglers[i].addEventListener('click', () => {
    togglers[i].classList.toggle('tech-specs__show--active');
    techDescs[i].classList.toggle('tech-specs__desc--hidden');
  });
}

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu'
    || window.location.hash === '#lang'
    || window.location.hash === '#faq'
    || window.location.hash === '#help'
    || window.location.hash === '#video'
  ) {
    document.body.classList.add('page__body--window-active');
  } else {
    document.body.classList.remove('page__body--window-active');
  }
});

document.querySelector('#contact').addEventListener('submit',
  function(event) {
    event.preventDefault();

    const tel = document.getElementById('tel');

    if (tel.value.match(/\d{7,15}/) === null) {
      tel.classList.add('input--invalid');
      tel.placeholder = 'Enter valid phone number (digits only)';
      tel.value = '';
    } else {
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      tel.classList.remove('input--invalid');
      tel.value = '';
      document.getElementById('message').value = '';
    }
  }
);
