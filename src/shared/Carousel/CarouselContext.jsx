import React, { useEffect, useState } from 'react'

export const CarouselContext = React.createContext(null)

export function CarouselProvider({ images, children }) {
  const [currentImage, setCurrentImage] = useState(0)
  // disabling auto swipe for some time after manual change
  const [isManualChange, setIsManualChange] = useState(false)

  const handlePrevious = (prev) => (prev > 0 ? prev - 1 : images.length - 1)
  const handleNext = (prev) => (prev < images.length - 1 ? prev + 1 : 0)

  useEffect(() => {
    if (isManualChange) {
      // Reset manual change flag after 5 seconds
      const timer = setTimeout(() => {
        setIsManualChange(false)
      }, 5000)

      // Cleanup timeout on component unmount or when isManualChange changes
      return () => clearTimeout(timer)
    } else {
      // Automatically change image every 3 seconds
      const interval = setInterval(() => {
        setCurrentImage((prev) => handleNext(prev))
      }, 3000)

      // Cleanup interval on component unmount or when isManualChange changes
      return () => clearInterval(interval)
    }
  }, [isManualChange])

  const contextValue = {
    images,
    currentImage,
    setCurrentImage,
    setIsManualChange,
    handleNext,
    handlePrevious,
  }

  return (
    <CarouselContext.Provider value={contextValue}>
      {children}
    </CarouselContext.Provider>
  )
}
