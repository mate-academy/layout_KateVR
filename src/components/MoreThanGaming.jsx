import React from 'react'
import education from '../assets/education.svg'
import realState from '../assets/realState.svg'
import fitness from '../assets/fitness.svg'
import socialInteractions from '../assets/social-interactions.svg'

function MoreThanGaming() {
  return (
    <section id="more" className="section-container">
      <div className="container mx-auto space-y-18 md:space-y-25">
        {/* title */}
        <div
          data-aos="fade-up"
          className="flex flex-col items-start md:items-center space-y-2"
        >
          <h1>
            <span className="font-bold lg:font-extrabold">more than</span>
            <span className="text-primary"> gaming!</span>
          </h1>

          <p className="text-primary">
            This also made for people who are interested in...
          </p>
        </div>

        {/* content */}
        <div
          data-aos="fade-up"
          className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-15 md:gap-25"
        >
          {/* items */}
          <div className="section-item-block group">
            <img
              src={education}
              alt="education"
              className="section-item-image"
            />

            <h2 className="uppercase font-extrabold relative">
              education
              <div className="animated-underline"></div>
            </h2>

            <p className="md:text-center">
              Create aducational simulations, trainings and much more with
              unlimited virtual space and minimum physical spac
            </p>
          </div>

          <div className="section-item-block group">
            <img
              src={realState}
              alt="real state"
              className="section-item-image"
            />

            <h2 className="uppercase font-extrabold relative">
              Real State
              <div className="animated-underline"></div>
            </h2>

            <p className="md:text-center">
              Desighn architectural projects in a deeply realistic environment
              allowing visitors to freely walk around, and feel their vibe
            </p>
          </div>

          <div className="section-item-block group">
            <img src={fitness} alt="fitness" className="section-item-image" />

            <h2 className="uppercase font-extrabold relative">
              Fitness
              <div className="animated-underline"></div>
            </h2>

            <p className="md:text-center">
              Combine business with pleasure, and discover countless ways to
              stay fit while playing your favorite VR Games!
            </p>
          </div>

          <div className="section-item-block group">
            <img
              src={socialInteractions}
              alt="Social interactions"
              className="section-item-image"
            />

            <h2 className="uppercase font-extrabold text-center relative">
              Social interactions
              <div className="animated-underline"></div>
            </h2>

            <p className="md:text-center">
              Hang out with your friends in the virtual world when you can’t
              meet space requirements
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MoreThanGaming
