import React, { useState } from 'react'

import katVrSpecsMobile from '../assets/katVrSpecsMobile.png'
import katVrSpecs from '../assets/katVrSpecs.png'
import specButton from '../assets/specButton.svg'

function TechSpecs() {
  // for specs in mobile
  const [activeSpec, setActiveSpec] = useState(null)

  const specDescriptions = {
    1: 'Weight: 35g/1.23oz each Dimension: 50mm/1.97in 24mm/0.94 inLight: LED lights',
    2: 'Wireless: Bluetooth 4.2 Signal range: 5m Receiver: USB 2.0 andabove',
    3: 'Type: Lthium-lon polymer batteries Capacity: 370mAh Battery life: 10h of continuous use 150 hours on stand by Charging: Fast charging - 1 hour Charging voltage and current: 5V = 0.5A',
  }

  return (
    <section data-aos="fade-up" id="tech" className="section-container">
      <div className="container mx-auto space-y-18 md:space-y-25">
        {/* top */}
        {/* title */}
        <div className="flex md:justify-end">
          <h1>
            <span className="font-bold lg:font-extrabold">tech </span>
            <span className="text-primary">specs</span>
          </h1>
        </div>

        {/* bottom */}
        <div className="flex justify-center">
          <div className="max-w-2/3 relative">
            {/* image for specs */}
            {/* lg+ */}
            <img
              src={katVrSpecs}
              alt="Tech specs"
              className="hidden lg:block w-full h-auto -translate-x-1/6"
            />
            {/* mobile */}
            <img
              src={katVrSpecsMobile}
              alt="Tech specs"
              className="block lg:hidden w-full h-auto"
            />

            {/*lg+ specs */}
            <div className="specs-block group top-[-2%] left-[-32%]">
              <h2 className="uppercase font-extrabold relative">
                sensor
                <div className="animated-underline"></div>
              </h2>

              <p>{specDescriptions[1]}</p>
            </div>

            <div className="specs-block group top-[62%] left-[-18%]">
              <h2 className="uppercase font-extrabold relative">
                connection
                <div className="animated-underline"></div>
              </h2>

              <p>{specDescriptions[2]}</p>
            </div>

            <div className="specs-block group top-[-2%] left-[90%]">
              <h2 className="uppercase font-extrabold relative">
                batterries
                <div className="animated-underline"></div>
              </h2>

              <p>{specDescriptions[3]}</p>
            </div>

            {/* mobile specs */}
            <div className="lg:hidden">
              <button
                onClick={() => setActiveSpec(activeSpec === 1 ? null : 1)}
                className="absolute top-0 left-[30%] "
              >
                <img className="w-12" src={specButton} alt="spec button" />
              </button>
              {activeSpec === 1 && (
                <div className="specs-mobile-block animate-fade-in top-0 -translate-y-5 left-[50%]">
                  {specDescriptions[1]}
                </div>
              )}

              <button
                onClick={() => setActiveSpec(activeSpec === 2 ? null : 2)}
                className="absolute top-1/3 left-[58%]"
              >
                <img className="w-12" src={specButton} alt="spec button" />
              </button>
              {activeSpec === 2 && (
                <div className="specs-mobile-block animate-fade-in top-[6%] left-[68%]">
                  {specDescriptions[2]}
                </div>
              )}

              <button
                onClick={() => setActiveSpec(activeSpec === 3 ? null : 3)}
                className="absolute -translate-y-10 top-full"
              >
                <img className="w-12" src={specButton} alt="spec button" />
              </button>
              {activeSpec === 3 && (
                <div className="specs-mobile-block animate-fade-in bottom-0 left-[20%]">
                  {specDescriptions[3]}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechSpecs
