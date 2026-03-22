export function initStepper() {
  const steps = document.querySelectorAll('.stepper__step');
  const panels = document.querySelectorAll('.panel');
  const progressLine = document.querySelector('.stepper__line');

  if (!steps.length || !panels.length) return { updateStepper: () => {} };

  const updateStepper = (stepIndex) => {
    steps.forEach((step, index) => {
      if (index === stepIndex) {
        step.classList.add('stepper__step--active');

        if (progressLine) {
          progressLine.style.transform = `translateX(${(index) * 100}%)`;
        }
      } else {
        step.classList.remove('stepper__step--active');
      }
    });

    panels.forEach((panel, index) => {
      if (index === stepIndex) {
        panel.classList.add('panel--active');
      } else {
        panel.classList.remove('panel--active');
      }
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return { updateStepper };
}
