'use strict';

// disable page scroll if burger menu appear

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

// disable page scroll if language select appear

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#language') {
    document.body.classList.add('page__body--with-language');
  } else {
    document.body.classList.remove('page__body--with-language');
  }
});

// disable page scroll if faq appear

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#faq') {
    document.body.classList.add('page__body--with-faq');
  } else {
    document.body.classList.remove('page__body--with-faq');
  }
});

// Custom-select-language
const customSelects = document.getElementsByClassName('custom-select');

for (let i = 0; i < customSelects.length; i++) {
  const selectElement = customSelects[i].getElementsByTagName('select')[0];
  const options = selectElement.options;

  const selectedDiv = document.createElement('DIV');

  selectedDiv.setAttribute('class', 'select-selected');
  selectedDiv.innerHTML = options[selectElement.selectedIndex].innerHTML;
  customSelects[i].appendChild(selectedDiv);

  const optionListDiv = document.createElement('DIV');

  optionListDiv.setAttribute('class', 'select-items select-hide');

  for (let j = 1; j < options.length; j++) {
    const optionDiv = document.createElement('DIV');

    optionDiv.innerHTML = options[j].innerHTML;

    optionDiv.addEventListener('click', function() {
      const clickedOptionText = this.innerHTML;

      selectElement.value = clickedOptionText;
      selectedDiv.innerHTML = clickedOptionText;

      const selectedItems
        = optionListDiv.getElementsByClassName('same-as-selected');

      for (let k = 0; k < selectedItems.length; k++) {
        selectedItems[k].classList.remove('same-as-selected');
      }
      this.classList.add('same-as-selected');
      selectedDiv.click();
    });

    optionListDiv.appendChild(optionDiv);
  }

  customSelects[i].appendChild(optionListDiv);

  selectedDiv.addEventListener('click', function(e) {
    e.stopPropagation();
    closeAllSelect(this);
    optionListDiv.classList.toggle('select-hide');
    this.classList.toggle('select-arrow-active');
  });
}

function closeAllSelect(clickedSelect) {
  const selectItems = document.getElementsByClassName('select-items');
  const selectedItems = document.getElementsByClassName('select-selected');

  for (let i = 0; i < selectedItems.length; i++) {
    if (clickedSelect === selectedItems[i]) {
      continue;
    }
    selectedItems[i].classList.remove('select-arrow-active');
  }

  for (let i = 0; i < selectItems.length; i++) {
    if (selectItems[i].style.display
      !== 'none'
      && selectItems[i].previousSibling
      !== clickedSelect) {
      selectItems[i].classList.add('select-hide');
    }
  }
}

document.addEventListener('click', function() {
  closeAllSelect();
});

// Slide-show
let slideIndex = 1; // Set the slide index to 1 (first slide)
let autoChange = true; // Default to enable automatic slide change
let interval; // Variable to store the interval

// Function to check the viewport window width
function updateAutoChange() {
  autoChange = window.innerWidth < 1280;
}

updateAutoChange(); // Call the function to initialize autoChange on startup

// Function to handle the window resize event
window.addEventListener('resize', () => {
  updateAutoChange(); // Update the value of autoChange on window resize
});

showSlides();

function showSlides() {
  let i;
  const slides = document.getElementsByClassName('mySlides');
  const dots = document.getElementsByClassName('dot');
  const prevButton = document.getElementById('prevButton');
  const nextButton = document.getElementById('nextButton');
  const slideCounter = document.querySelector('.slide-counter');

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  if (slideIndex > slides.length) {
    slideIndex = 1; // Return to the first slide when reaching the last one
  }

  if (slideIndex < 1) {
    slideIndex = slides.length; // If index < 1, set index = 5
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }

  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';

  // Update the slide number in the `.slide-counter` div
  slideCounter.textContent = `${slideIndex}/${slides.length}`;

  // Disable the "Previous" button when the slide number is 1/5
  if (slideIndex === 1) {
    prevButton.disabled = true;
  } else {
    prevButton.disabled = false;
  }

  // Disable the "Next" button when the slide number is 5/5
  if (slideIndex === slides.length) {
    nextButton.disabled = true;
  } else {
    nextButton.disabled = false;
  }

  if (autoChange) {
    slideIndex++;
  }
}

// Start automatic slide change using setInterval
interval = setInterval(showSlides, 5000);

// Button handling
const prevBtn = document.getElementById('prevButton');
const nextBtn = document.getElementById('nextButton');

prevBtn.addEventListener('click', () => {
  changeSlide(-1); // Change by 1 slide backwards
});

nextBtn.addEventListener('click', () => {
  changeSlide(1); // Change by 1 slide forwards
});

function changeSlide(n) {
  autoChange = false;

  clearInterval(interval); // Stop the previous interval

  showSlides(slideIndex += n); // Change by n slides

  // Check if there's a next slide for next-btn
  if (slideIndex !== 5) {
    nextBtn.classList.remove('inactive-next-btn'); // Remove the inactive class
    nextBtn.classList.add('next-btn'); // Add native class
  } else {
    nextBtn.classList.add('inactive-next-btn'); // Add the inactive class
    nextBtn.classList.remove('next-btn'); // Remove native class
  }

  // Check if there's a next slide for previous-btn
  if (slideIndex !== 1) {
    prevBtn.classList.remove('previous-btn'); // Remove the inactive class
    prevBtn.classList.add('active-previous-btn'); // Add native class
  } else {
    prevBtn.classList.remove('active-previous-btn'); // Add native class
    prevBtn.classList.add('previous-btn'); // Remove the inactive class
  }

  // Start a new automatic slide change using setInterval
  interval = setInterval(showSlides, 5000);
}

// Pobierz elementy .target i .slide-counter
const target = document.querySelector('.target');
const sliderCounter = document.querySelector('.slide-counter');

// Funkcja do ustawiania odpowiednich stylów .target na podstawie numeru slajdu
function updateTargetStyles() {
  const slideText = sliderCounter.textContent;
  const [currentSlide] = slideText.split('/').map((str) => parseInt(str));
  // Oblicz przesunięcie X dla transformacji
  const translateX = (currentSlide - 1) * 41.4;

  // Ustaw odpowiednie style w zależności od numeru slajdu
  target.style.width = '41.4px';
  target.style.height = '1px';
  target.style.backgroundColor = '$c-contrast';
  target.style.transform = `translateX(${translateX}px)`;
}

// Wywołaj funkcję na początku i zaktualizuj style .target
updateTargetStyles();

// Nasłuchuj zmian w .slide-counter i aktualizuj style .target
sliderCounter.addEventListener('DOMSubtreeModified', updateTargetStyles);
