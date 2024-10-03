'use strict';

import { query, queryAll } from "./utils";

import card from '../images/blankcard.png';
import visaCard from '../images/visacard.png';
import masterCard from '../images/mastercard.png';

  export function focusInputField(field1, stringLength, field2) {
    const inputField = query(field1);
    const inputFocus = query(field2);

    inputField.addEventListener('input', function() {

      if(this.value.length === Number(stringLength)) {
        inputFocus.focus();
      };
    });
  };

  export function cardNumberEntryFields(fields) {
    const cardFields = queryAll(fields);

    cardFields.forEach((field, index) => {

      field.addEventListener('input', function () {
        this.value = this.value.replace(/\D/, '');

        if(field.value.length === 4 && index < cardFields.length -1) {
          cardFields[index+1].focus();
        }
      });
    });
  };

  export function paymentSystem(field) {
    const input = query(field);
    const image = query('.purchase-payment__credit-card--img');

    input.addEventListener('input', function() {

      switch (true) {
        case this.value[0] === '4':
          return image.src = visaCard;

        case this.value[0] === '5':
          return image.src = masterCard;

          default:
            return image.src = card;
      }
    });
  };

  export function cardNumberCVVfield(field) {
    const input = query(field);

    input.addEventListener('input', function() {
      this.value = this.value.replace(/\D/g, '');
    });
  };

  export function cardExpiry(field) {
    const input = query(field);
    console.log(input.value);

    input.addEventListener('input', function() {
      this.value= this.value.replace(/\D/g, '');

      if(this.value.length >= 2) {
        this.value = this.value.slice(0, 2) + '/' + this.value.slice(2);
      }
    });
  };
