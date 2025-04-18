import React from 'react'

import { Carousel } from '../shared/Carousel'
import PlayButton from '../shared/PlayButton'
import aboutUs from '../assets/aboutUs.svg'
import Treadmill from '../assets/KAT-VR-Treadmill.jpg'
import katVrDemo from '../assets/katVrDemo.png'
import { CarouselProvider } from '../shared/Carousel/CarouselContext'

function AboutProduct() {
  return (
    <section
      id="about"
      className="bg-gradient-to-t from-background to-pink-black"
    >
      {/* about product */}
      <div
        data-aos="fade-left"
        className="section-container flex lg:justify-end"
      >
        {/* about and slider */}
        <CarouselProvider images={[Treadmill, katVrDemo]}>
          <div className="about-section-block">
            {/* left */}
            <div className="hidden md:block w-1/2">
              <Carousel counter={true} />
            </div>

            {/* right */}
            {/* about */}
            <div className="md:w-1/2 flex flex-col space-y-5">
              {/* title */}
              <h1>
                <span className="font-bold lg:font-extrabold">About</span>
                <span className="text-primary"> Product</span>
              </h1>

              {/* mobile slider*/}
              <div className="md:hidden">
                <Carousel navigationMobile={true} navigation={false} />
              </div>

              {/* description */}
              <p>
                KAT loco is a foot-based VR locomotion system that gives
                complete physical control over lower-body actions, allowing you
                to freely walk, run, and carry out just any other movement in
                virtual reality.
              </p>

              <PlayButton />
            </div>
          </div>
        </CarouselProvider>
      </div>

      {/* nice to meet you */}
      <div data-aos="fade-right" className="section-container">
        <div className="about-section-block">
          {/* left */}
          <div className="md:w-2/3 lg:w-1/2 flex flex-col space-y-5">
            <span className="text-primary">Hello,</span>

            {/* title */}
            <h1>
              <span className="font-bold lg:font-extrabold">nice to meet </span>
              <span className="text-primary">you!</span>
            </h1>

            {/* description */}
            <p>
              KAT VR is an independent company dedicated to the research,
              development, and sales of VR Locomotion products and solutions.
              Founded in 2013, we have quickly grown to become one of the
              world’s leading professional suppliers of VR games’ & simulations’
              equipment
            </p>
          </div>

          {/* right */}
          <div className="hidden md:flex items-center md:w-1/3 lg:w-1/2 ">
            <img
              className="object-cover object-left w-full h-full "
              src={aboutUs}
              alt="about us image"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutProduct
