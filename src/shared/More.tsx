import React from 'react'
import { useModal } from './Modal/ModalContext'

function More() {
  const { isModalOpen, setIsModalOpen } = useModal()

  const handleClick = () => {
    if (isModalOpen) setIsModalOpen(false)
  }

  return (
    <a
      href="#more"
      className="text-primary w-[15%] flex flex-col items-center scale-animation animate-bounce hover:text-secondary"
      onClick={handleClick}
    >
      <span>More</span>
      <span className="text-lg">&#x25BE;</span>
    </a>
  )
}

export default More
