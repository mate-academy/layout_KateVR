'use strict';

const cardExpirartionDateInput = document.getElementById('expirationDatePay');

cardExpirartionDateInput.addEventListener('input', function() {
  if (this.value.length === 2 && !this.value.includes('/')) {
    this.value = `${this.value} / `;
  }
});
