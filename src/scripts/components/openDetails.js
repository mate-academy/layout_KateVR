const circles = document.querySelectorAll('.tech__circle');
const firstCircle = document.querySelector('.tech__circle--1');
const secondCircle = document.querySelector('.tech__circle--2');
const thirdCircle = document.querySelector('.tech__circle--3');

const firstDetails = document.querySelector('.tech__details--1');
const secondDetails = document.querySelector('.tech__details--2');
const thirdDetails = document.querySelector('.tech__details--3');

function findSelectedDetails(circle) {
  if (circle === firstCircle) {
    return firstDetails;
  }
  if (circle === secondCircle) {
    return secondDetails;
  }
  if (circle === thirdCircle) {
    return thirdDetails;
  }
}

export function openDetails() {
  circles.forEach((circle) => {
    circle.addEventListener('click', () => {
      const selectedDatails = findSelectedDetails(circle);

      if (circle.classList.contains('tech__circle--active')) {
        circle.classList.remove('tech__circle--active');
        selectedDatails.classList.remove('tech__details--active');
      } else {
        const activeCircle = document.querySelector('.tech__circle--active');
        if (activeCircle) {
          activeCircle.classList.remove('tech__circle--active');

          const activeDetails = findSelectedDetails(activeCircle);
          activeDetails.classList.remove('tech__details--active');
        }

        circle.classList.add('tech__circle--active');
        selectedDatails.classList.add('tech__details--active');
      }
    });
  });
}
