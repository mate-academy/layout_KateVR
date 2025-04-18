import { useSwipeable } from 'react-swipeable'
import classNames from 'classnames'
import CarouselNavigation from './CarouselNavigation'
import { CarouselContext } from './CarouselContext'
import { useContext } from 'react'

export function Carousel({
  counter = false,
  navigation = true,
  navigationMobile = false,
}) {
  const {
    images,
    currentImage,
    setCurrentImage,
    setIsManualChange,
    handleNext,
    handlePrevious,
  } = useContext(CarouselContext)

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      setCurrentImage(handleNext), setIsManualChange(true)
    },

    onSwipedRight: () => {
      setCurrentImage(handlePrevious), setIsManualChange(true)
    },

    trackMouse: true,
  })

  // disable image dragging for correct swipe by mouse
  const preventDrag = (e) => e.preventDefault()

  return (
    <div className="relative w-full">
      {/* counter */}
      {counter && (
        <div className="absolute z-5 top-0 md:-left-1/8">
          <span className="text-base text-primary">
            {currentImage + 1} / {images.length}
          </span>
        </div>
      )}

      {/* slider */}
      <div
        {...handlers}
        className="relative w-full aspect-video md:aspect-square lg:aspect-video overflow-hidden"
      >
        {/* one of the slides will be visible */}
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={image}
            onDragStart={preventDrag}
            className={classNames(
              'absolute inset-0 w-full h-full object-cover transition-opacity duration-500',
              { 'opacity-100': currentImage === index },
              { 'opacity-0': currentImage !== index }
            )}
          />
        ))}
      </div>

      {/* navigation*/}
      <div className="w-full md:w-1/2 lg:w-1/3 mt-6">
        <CarouselNavigation
          navigation={navigation}
          navigationMobile={navigationMobile}
        />
      </div>
    </div>
  )
}
