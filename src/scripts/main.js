import '../styles/main.scss';

'use strict';
document.addEventListener('DOMContentLoaded', () => {
  const landingPage = document.createElement('div');
  landingPage.className = 'landing-page';

  landingPage.innerHTML = `
    <header class="landing-page__header">
      <h1 class="landing-page__title">Welcome to KatVR</h1>
      <nav class="landing-page__nav">
        <ul class="landing-page__nav-list">
          <li class="landing-page__nav-item"><a href="#about" class="landing-page__nav-link">About</a></li>
          <li class="landing-page__nav-item"><a href="#features" class="landing-page__nav-link">Features</a></li>
          <li class="landing-page__nav-item"><a href="#contact" class="landing-page__nav-link">Contact</a></li>
        </ul>
      </nav>
    </header>
    <section id="about" class="landing-page__section landing-page__section--about">
      <h2 class="landing-page__section-title">About KatVR</h2>
      <p class="landing-page__section-content">Experience the next level of virtual reality with KatVR.</p>
    </section>
    <section id="features" class="landing-page__section landing-page__section--features">
      <h2 class="landing-page__section-title">Features</h2>
      <ul class="landing-page__features-list">
        <li class="landing-page__feature-item">Immersive VR Experience</li>
        <li class="landing-page__feature-item">High-Quality Graphics</li>
        <li class="landing-page__feature-item">User-Friendly Interface</li>
      </ul>
    </section>
    <section id="contact" class="landing-page__section landing-page__section--contact">
      <h2 class="landing-page__section-title">Contact Us</h2>
      <form class="landing-page__form">
        <label for="name" class="landing-page__form-label">Name:</label>
        <input type="text" id="name" class="landing-page__form-input">
        <label for="email" class="landing-page__form-label">Email:</label>
        <input type="email" id="email" class="landing-page__form-input">
        <button type="submit" class="landing-page__form-button">Submit</button>
      </form>
    </section>
  `;

  document.body.appendChild(landingPage);
});
