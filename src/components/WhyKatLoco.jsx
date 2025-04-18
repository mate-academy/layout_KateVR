import React from 'react'
import Compatible from '../assets/compatible.svg'
import Computer from '../assets/computer.svg'
import Wireless from '../assets/wireless.svg'

function WhyKatLoco() {
  return (
    <section
      data-aos="fade-in"
      id="benefits"
      className="bg-gradient-to-br from-background to-pink-black"
    >
      <div className="section-container">
        {/* title */}
        <h1 className="lg:text-center">
          <span className="font-bold lg:font-extrabold">Why</span>
          <span className="text-primary"> Kat Loco?</span>
        </h1>

        {/* content */}
        <div className="container md:mx-auto flex flex-col gap-25">
          {/* items */}
          <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="section-item-block group">
              <img
                src={Compatible}
                alt="Compatible"
                className="section-item-image"
              />

              <h2 className="uppercase font-extrabold relative text-center">
                universally compatible
                <div className="animated-underline"></div>
              </h2>

              <p className="md:text-center">
                KAT Loco offers universal compatibility across all major VR
                headsets and platforms allowing you to play any VR game with
                support for Free Locomotion
              </p>
            </div>

            <div className="section-item-block group">
              <img
                src={Computer}
                alt="Computer"
                className="section-item-image"
              />

              <h2 className="uppercase font-extrabold relative text-center">
                vr/pc control panel
                <div className="animated-underline"></div>
              </h2>

              <p className="md:text-center">
                Our Multifunctional Software allows for quick access to KAT
                Loco’s control panel both from a computer desktop, and directly
                from your VR headset.
              </p>
            </div>

            <div className="section-item-block group">
              <img
                src={Wireless}
                alt="Wireless"
                className="section-item-image"
              />

              <h2 className="uppercase font-extrabold relative text-center">
                wireless sensors
                <div className="animated-underline"></div>
              </h2>

              <p className="md:text-center">
                What makes it even more advanced, KAT Loco is entirely wireless,
                and comes with a complete system of algorithms, super durable
                batteries and more!
              </p>
            </div>
          </div>

          {/* buy now button*/}
          <div className="hidden lg:flex justify-center">
            <button className="btn-primary w-50 h-12">Buy Now</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyKatLoco
