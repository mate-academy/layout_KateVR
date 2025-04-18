import React, { useEffect, useState } from 'react'
import katVR from '../assets/katVr.png'
import Treadmill from '../assets/KAT-VR-Treadmill.jpg'
import katVrWalk from '../assets/katVrWalk.jpg'
import PlayButton from '../shared/PlayButton'
import { Carousel } from '../shared/Carousel'
import More from '../shared/More'
import CarouselNavigation from '../shared/Carousel/CarouselNavigation'
import { CarouselProvider } from '../shared/Carousel/CarouselContext'
import { modalTypes, useModalHandler } from '../shared/Modal/ModalContext'
import Navbar from './Navbar'

function Hero() {
  const { openModal } = useModalHandler()

  const [showButton, setShowButton] = useState(false)
  const [showBottom, setShowBottom] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setShowButton(window.innerWidth < 720) // show button on screens smaller than 720px
      setShowBottom(window.innerWidth >= 960)
    }

    handleResize() // call the function initially
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <CarouselProvider images={[katVR, Treadmill, katVrWalk]}>
      <section className="bg-gradient-to-r from-background to-pink-black">
        <Navbar />

        <div className="section-container">
          {/* container */}
          <div className="container mx-auto flex flex-col-reverse md:flex-row gap-5 items-center justify-between">
            {/* left side */}
            <div
              data-aos="fade-right"
              className="md:w-1/2 flex flex-col items-center space-y-4"
            >
              {/* title */}
              <div className="w-full">
                <h1>
                  <span className="font-extrabold">the new start of</span>
                  <br />
                  <span className="text-primary"> vr locomotion</span>
                </h1>
              </div>

              {/* description */}
              <div className="w-full lg:w-1/2 flex flex-col md:space-y-2">
                {/* paragraph */}
                <p className="text-base md:text-lg lg:text-xl w-full">
                  Discover the most comprehensive VR
                  <br className="hidden lg:block" /> Locomotion system, and
                  unlock infinite motion in any games on any platforms!
                </p>

                {/* price */}
                <div className="text-center md:text-left">
                  <p className="text-2xl lg:text-2xl pt-4 text-white">$1200</p>
                </div>

                {/* play video */}
                <PlayButton />
              </div>
            </div>

            {/* right side */}
            <div
              data-aos="fade-left"
              className="md:w-1/2 flex items-center justify-center overflow-hidden"
            >
              <Carousel navigation={false} />
            </div>
          </div>

          {/* bottom */}
          {showBottom && (
            <div
              data-aos="fade-up"
              className="hidden lg:flex items-start justify-between container mx-auto "
            >
              {/* left */}
              <div className="w-[15%] space-x-8 text-base">
                <a
                  className="scale-animation cursor-pointer"
                  onClick={() => openModal(modalTypes.faq)}
                >
                  FAQ
                </a>
                <a
                  className="scale-animation cursor-pointer"
                  onClick={() => openModal(modalTypes.help)}
                >
                  Help
                </a>
              </div>

              {/* center */}
              <More />

              {/* right */}
              <div className="w-[15%] flex ">
                <CarouselNavigation />
              </div>
            </div>
          )}

          {/* buy now button */}
          {showButton && (
            <div className="container mx-auto relative">
              <div className="flex items-center justify-center">
                <button className="btn-primary scale-animation w-11/12 mx-3 absolute top-9">
                  Buy Now
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </CarouselProvider>
  )
}

export default Hero
