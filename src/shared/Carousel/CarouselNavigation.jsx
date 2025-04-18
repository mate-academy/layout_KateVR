import React, { useContext } from 'react'
import { CarouselContext } from './CarouselContext'
import classNames from 'classnames'

function CarouselNavigation({ navigation = true, navigationMobile = false }) {
  const {
    images,
    currentImage,
    setCurrentImage,
    setIsManualChange,
    handleNext,
    handlePrevious,
  } = useContext(CarouselContext)

  return (
    <div className="w-full flex flex-col items-start gap-4">
      {navigation && (
        <>
          {/* buttons */}
          <div className="w-full flex gap-10 justify-between">
            <button
              onClick={() => {
                setCurrentImage(handlePrevious)
                setIsManualChange(true)
              }}
              className="scale-animation cursor-pointer hover:text-primary"
            >
              Previous
            </button>
            <button
              onClick={() => {
                setCurrentImage(handleNext)
                setIsManualChange(true)
              }}
              className="scale-animation cursor-pointer hover:text-primary"
            >
              Next
            </button>
          </div>

          {/* line */}
          <div className="relative w-full h-0.5 bg-gray-800">
            {images.map((_, index) => (
              <span key={index} className="w-1/2" />
            ))}

            {/* active indicator */}
            <span
              className="absolute top-0 left-0 h-full bg-primary transition-transform duration-500"
              style={{
                width: `${100 / images.length}%`,
                transform: `translateX(${currentImage * 100}%)`,
              }}
            />
          </div>
        </>
      )}

      {/* mobile dots*/}
      {navigationMobile && (
        <div className="lg:hidden flex w-full justify-center gap-2">
          {images.map((_, i) => (
            <span
              key={i}
              className={classNames('w-2 h-2 rounded-full bg-gray-800', {
                'bg-primary': i === currentImage,
              })}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default CarouselNavigation
