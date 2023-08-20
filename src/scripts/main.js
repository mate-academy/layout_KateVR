'use strict';
/* eslint-env jquery */

const $body = $('.page__body');
const $headerTop = $('.header__top');
const $headerTitle = $('.header__title');
const sticky = $headerTop.offset().top;
const $video = $('#video');
const $iframe = $video.find('.header__iframe');
const $form = $('#form');
const $contactForm = $('.contact__form');
const $slides = $('.place-order__slide');
const $slidesForm = $('.form__slide');
const $steps = $('.place-order__step');
const $placeOrderContent = $('.place-order__content');
const $purchase = $('#purchase');
const $slidersHeader = $('.slider-step--header');
const $headerCarousel = $('.header__carousel-list');
const $slidersAbout = $('.slider-step--about');
const $aboutCarousel = $('.slideshow__list');
const $slideDots = $('.slideshow__dot');
const $counter = $('.slideshow__counter-text');
const $controlMob = $('.slideshow__control-mob');

const data = {
  price: 1200,
};

const sliderIndices = {
  header: 0,
  about: 0,
};

const imageWidth = {
  about: 430,
  header: $headerCarousel.width(),
};

const formStep = {
  step: 1,
};

$(function() {
  $('.header').find('.header__price').text(`$${data.price}`);

  onPageLoad();
  changeImageWidth();
  addPhoneMask();

  $(window).on({
    hashchange: onHashChange,
    resize: function() {
      _.debounce(handleWidthChange, 200)();
      _.debounce(changeImageWidth, 200)();
    },
    scroll: getFixedHeader,
  });

  $('.collapsible__button').each(function() {
    $(this).on('click', () => {
      $(this).next().slideToggle('slow');
    });
  });

  $('.input--text').each(function() {
    const $inputField = $(this).find('.input__field');

    $inputField.on({
      'focus': onInputFocus,
      'focusout': onInputFocusOut,
    });
  });

  $('.input__field--number-card').each(function() {
    $(this).on({
      'focus': onInputFocus,
      'focusout': onCardInputFocusOut,
    });
  })
    .eq(0).on('input', handleLogoVisibility);

  $('.input__field--number-expiration').each(function() {
    $(this).on({
      'focus': onInputFocus,
      'focusout': onExpirationFocusOut,
    });
  });

  $('#quantity').on('input', onQuantityChange);

  $('.dropdown').each(function() {
    const $button = $(this).find('.dropdown__button');
    const $content = $(this).find('.dropdown__content');
    const $input = $(this).find('.dropdown__input');
    const $items = $(this).find('.list__dropdown-item');

    $input.on({
      'focus': onInputFocus,
      'focusout': onInputFocusOut,
    });

    $button.on('click', function() {
      $content.slideToggle();
    });

    $items.each(function() {
      $(this).on('click', function() {
        $input.val($(this).text());

        if ($input.attr('name').includes('quantity')) {
          $('#price-total').text(`$${$input.val() * 1200}`);
        }
      });
    });

    $(window).on('click', function(e) {
      if (e.target !== $button[0]) {
        $content.slideUp();
      };
    });
  });

  $slidersHeader.eq(0).on('click', function() {
    sliderIndices.header -= 1;
    handleHeaderCarosuel();
  });

  $slidersHeader.eq(2).on('click', function() {
    sliderIndices.header += 1;
    handleHeaderCarosuel();
  });

  $slidersAbout.eq(0).on('click', function() {
    sliderIndices.about -= 1;
    handleAboutCarosuel();
  });

  $slidersAbout.eq(4).on('click', function() {
    sliderIndices.about += 1;
    handleAboutCarosuel();
  });

  $controlMob.eq(0).on('click', function() {
    sliderIndices.about -= 1;
    handleAboutCarosuel();
  });

  $controlMob.eq(1).on('click', function() {
    sliderIndices.about += 1;
    handleAboutCarosuel();
  });

  $('.play-button').each(function() {
    $(this).on('click', function() {
      $video.addClass('header__video-container-active');
      $iframe.attr('src', $iframe.data('src'));
    });
  });

  $('.header__video-cross').on('click', function() {
    $video.removeClass('header__video-container-active');
    $iframe.attr('src', 'about:blank');
  });

  $('.mini-button').each(function() {
    $(this).on('click', onMiniButtonClick);
  });

  $contactForm.on('submit', function(event) {
    event.preventDefault();
    this.reset();

    const validator = $contactForm.validate();

    validator.destroy();

    $(this).find('.input__name').each(function() {
      $(this).removeClass('input__name--focused');
    });
  });

  $('#submit-contact').on('click', function(event) {
    $contactForm.validate({
      rules: {
        'contact-name': 'required',
        'contact-email': {
          required: true,
          email: true,
        },
        'contact-phone': {
          required: true,
          minlength: 17,
        },
        'contact-message': 'required',
      },
      messages: {
        'contact-name': 'Please enter your name',
        'contact-message': 'Please enter your message',
        'contact-email': {
          required: 'Please enter your email',
          email: 'Email should be in format name@domain.com',
        },
        'contact-phone': {
          required: 'Please enter your phone',
          minlength: 'Enter phone in format +38(000)000-00-00',
        },
      },
      errorPlacement: function(error, element) {
        const $label = element.prev();

        $label
          .text(error.text())
          .addClass('input__name--invalid');
      },
      success: function(label, element) {
        const $element = $(`#${element.id}`);
        const $label = $element.prev();

        $label
          .removeClass('input__name--invalid')
          .text($element.data('label'));
      },
    });

    if (!$contactForm.valid()) {
      event.preventDefault();
    }
  });

  $form.on('submit', function(event) {
    event.preventDefault();
  });

  $form.validate({
    rules: {
      'first-name': 'required',
      'last-name': 'required',
      country: 'required',
      city: 'required',
      'address-1': 'required',
      'address-2': 'required',
      'card-1': 'required',
      'card-2': 'required',
      'card-3': 'required',
      'card-4': 'required',
      'card-holder-name': 'required',
      'card-expiration-date-1': 'required',
      'card-expiration-date-2': 'required',
      'card-cvv': 'required',
      email: {
        required: true,
        email: true,
      },
      phone: {
        required: true,
        minlength: 17,
      },
    },
    messages: {
      'first-name': 'Please enter your firstname',
      'last-name': 'Please enter your lastname',
      'card-1': 'Please enter your card number',
      'card-2': 'Please enter your card number',
      'card-3': 'Please enter your card number',
      'card-4': 'Please enter your card number',
      'card-holder-name': 'Please enter cardholder name',
      'card-expiration-date-1': 'Please enter expiration date',
      'card-expiration-date-2': 'Please enter expiration date',
      'card-cvv': 'Please enter your cvv',
      country: 'Please enter your country',
      city: 'Please enter your city',
      'address-1': 'Please enter your address',
      'address-2': 'Please enter your address',
      phone: {
        required: 'Please enter your phone',
        minlength: 'Enter phone in format +38(000)000-00-00',
      },
      email: {
        required: 'Please enter your email',
        email: 'Email should be in format name@domain.com',
      },
    },
    errorPlacement: function(error, element) {
      let $label = element.prev();
      const id = element.attr('id');

      if (id === 'city'
        || id === 'country'
        || id.includes('input-card')
        || id.includes('expire')) {
        $label = element.parent().prev();
      }

      if (id.includes('expire')) {
        element.parent().css('border-color', '#860404');
      }

      $label
        .text(error.text())
        .addClass('input__name--invalid');
    },
    success: function(label, element) {
      const $element = $(`#${element.id}`);
      let $label = $element.prev();
      const id = $element.attr('id');

      if (id === 'city'
        || id === 'country'
        || id.includes('input-card')
        || id.includes('expire')) {
        $label = $element.parent().prev();
      }

      if (id.includes('input-card')) {
        const $inputs = $('.input__field--number-card');

        if ([...$inputs].every(input => input.value)) {
          $label
            .removeClass('input__name--invalid')
            .text($element.data('label'));

          return;
        }

        $label.text('Please enter your card number');

        return;
      }

      if (id.includes('expire')) {
        const $inputs = $('.input__field--number-expiration');

        if ([...$inputs].every(input => input.value)) {
          $element.parent().css('border-color', '');

          $label
            .removeClass('input__name--invalid')
            .text($element.data('label'));

          return;
        }

        $label.text('Please enter expiration date');

        return;
      }

      $label
        .removeClass('input__name--invalid')
        .text($element.data('label'));
    },
  });

  $purchase.on('click', handleFormSteps);
});

function onPageLoad() {
  const hash = window.location.hash;

  if (
    (hash === '#menu' || hash === '#language')
    && window.matchMedia('(min-width: 1280px)').matches
  ) {
    return;
  }

  if (
    (hash === '#faq' || hash === '#help')
    && window.matchMedia('(min-width: 1280px)').matches
  ) {
    $body.addClass('page__body--shadowed');

    return;
  }

  if (
    hash === '#menu'
    || hash === '#language'
    || hash === '#faq'
    || hash === '#help'
    || hash === '#place-order'
  ) {
    $body.addClass('page__body--with-menu');
    $body.addClass('page__body--shadowed');
  }
}

function addPhoneMask() {
  const $phoneInput = $('#phone');
  const $phoneInputContact = $('#contact-phone');

  const maskOptions = {
    mask: '+{38}(000)000-00-00',
  };

  // eslint-disable-next-line no-undef
  IMask($phoneInput[0], maskOptions);
  // eslint-disable-next-line no-undef
  IMask($phoneInputContact[0], maskOptions);
}

function onHashChange() {
  const hash = window.location.hash;

  if (
    (hash === '#faq'
    || hash === '#help')
    && window.matchMedia('(min-width: 1280px)').matches
  ) {
    $body.addClass('page__body--shadowed');

    return;
  }

  if (
    hash === '#menu'
    || hash === '#language'
    || hash === '#faq'
    || hash === '#help'
    || hash === '#place-order'
  ) {
    $body.addClass('page__body--with-menu');
    $body.addClass('page__body--shadowed');
  } else {
    $body.removeClass('page__body--with-menu');
    $body.removeClass('page__body--shadowed');
  }
}

function handleWidthChange() {
  const hash = window.location.hash;
  const $windowWidth = $(this).width();
  const faqOrHelp = hash === '#faq' || hash === '#help';
  const menuOrLanguage = hash === '#menu' || hash === '#language';
  const onTablet = $windowWidth < 1263;
  const onDesktop = $windowWidth > 1279;

  switch (true) {
    case faqOrHelp && onTablet:
      $body.addClass('page__body--with-menu');
      break;

    case faqOrHelp && onDesktop:
      $body.removeClass('page__body--with-menu');
      break;

    case menuOrLanguage && onTablet:
      $body.addClass('page__body--with-menu');
      $body.addClass('page__body--shadowed');
      break;

    case menuOrLanguage && onDesktop:
      $body.removeClass('page__body--with-menu');
      $body.removeClass('page__body--shadowed');
      break;

    default:
      break;
  }
}

function onInputFocus() {
  const $input = $(this);
  let $label = $(`.input__name[for='${$input.attr('id')}']`);

  if ($(this).attr('id').includes('expire')) {
    $label = $('.input__name--expiration');

    $(this).parent().addClass('focused');
    $('#input-slash').addClass('active');
  }

  $label.addClass('input__name--focused');
  $input.addClass('input__field--focused');
}

function onInputFocusOut() {
  const $input = $(this);
  const $label = $(`.input__name[for='${$input.attr('id')}']`);

  $input.removeClass('input__field--focused');

  if (!$input.val()) {
    $label.removeClass('input__name--focused');
  }
}

function handleLogoVisibility(e) {
  const $cardLogo = $('.input__card-logo');

  $cardLogo.removeClass('input__card-logo--visa input__card-logo--mastercard');

  if (e.target.value[0] === '4') {
    $cardLogo.addClass('input__card-logo--visa');
  }

  if (e.target.value[0] === '5') {
    $cardLogo.addClass('input__card-logo--mastercard');
  }
}

function onExpirationFocusOut() {
  const $label = $('.input__name--expiration');
  const $inputs = $('.input__field--number-expiration');
  const $parent = $(this).parent();

  $parent.removeClass('focused');
  $('#input-slash').removeClass('active');

  if ([...$inputs].every(input => !input.value)) {
    $label.removeClass('input__name--focused');
  }
}

function onCardInputFocusOut() {
  const $input = $(this);
  const $label = $(`.input__name[for='${$input.attr('id')}']`);
  const $inputs = $('.input__field--number-card');

  $input.removeClass('input__field--focused');

  if ([...$inputs].every(input => !input.value)) {
    $label.removeClass('input__name--focused');
  }
}

function onQuantityChange(e) {
  const { value } = e.target;

  if (value.length < 1) {
    this.value = 1;

    return;
  }

  $('#price-total').text(`$${value * 1200}`);
}

function getFixedHeader() {
  if (window.scrollY > sticky) {
    $headerTop.addClass('header__top-fixed');
    $headerTitle.addClass('header__title-top-margin');
  } else {
    $headerTop.removeClass('header__top-fixed');
    $headerTitle.removeClass('header__title-top-margin');
  }
}

function handleHeaderCarosuel() {
  showSlider(sliderIndices, 'header', 2, $slidersHeader);
  swipeImage($headerCarousel, 'header', imageWidth.header);
}

function handleAboutCarosuel() {
  showSlider(sliderIndices, 'about', 4, $slidersAbout, $counter[0]);
  swipeImage($aboutCarousel, 'about', imageWidth.about);
}

function showSlider(indices, key, maxIndex, sliders, label) {
  if (indices[key] > maxIndex) {
    indices[key] = 0;
  }

  if (indices[key] < 0) {
    indices[key] = maxIndex;
  }

  for (let i = 0; i <= maxIndex; i++) {
    sliders[i].classList.remove('slider-step--active');

    if (key === 'about') {
      $slideDots[i].classList.remove('slideshow__dot-active');
    }
  }

  sliders[indices[key]].classList.add('slider-step--active');

  if (key === 'about') {
    $slideDots[indices[key]].classList.add('slideshow__dot-active');
  }

  if (label) {
    label.innerText = indices[key] + 1;
  }
}

function swipeImage(list, key, width) {
  list.css('translate', `-${sliderIndices[key] * width}px`);
}

function changeImageWidth() {
  const $width = $(window).width();

  switch (true) {
    case $width > 1422:
      imageWidth.about = 622;
      imageWidth.header = 1151;
      break;

    case $width > 1262:
      imageWidth.about = 430;
      imageWidth.header = 811;
      break;

    case $width > 622:
      imageWidth.about = 430;
      imageWidth.header = 486;
      break;

    default:
      imageWidth.about = 280;
      imageWidth.header = 320;
      break;
  }

  swipeImage($headerCarousel, 'header', imageWidth.header);
  swipeImage($aboutCarousel, 'about', imageWidth.about);
}

function onMiniButtonClick(event) {
  if (
    event.target !== event.currentTarget
  ) {
    return;
  }

  const $this = $(this);
  const $content = $this.find('.mini-button__description');

  $content.fadeToggle(300);
  $this.children().eq(1).toggleClass('active');
  $this.toggleClass('mini-button--active');
}

function handleFormSteps(event) {
  const isValid = $form.valid();
  const step = formStep.step;

  if (step < 2 || !isValid) {
    event.preventDefault();
  }

  if (!isValid) {
    return;
  }

  $steps.eq(step - 1)
    .removeClass('place-order__step--active')
    .addClass('place-order__step--completed');
  $steps.eq(step).addClass('place-order__step--active');

  if (step === 1) {
    $slidesForm.eq(0)
      .fadeOut(300)
      .addClass('place-order__slide--swiped');
    $purchase.fadeOut(300);

    setTimeout(() => {
      $form.addClass('grid--place-form-tablet');
      $slidesForm.eq(1).fadeIn(300);
      $purchase.fadeIn(300);
    }, 300);
  }

  if (step === 2) {
    $slides.eq(0)
      .fadeOut(300)
      .addClass('place-order__slide--swiped');
    $placeOrderContent.addClass('place-order__content--no-background');

    setTimeout(() => {
      $slides.eq(1).fadeIn(300);
      $slides.eq(0).detach();
    }, 300);
  }

  formStep.step++;
}
