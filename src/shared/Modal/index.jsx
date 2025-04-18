import React from 'react'
import { useModal } from './ModalContext'
import ModalContent from './ModalContent'
import classNames from 'classnames'

function Modal() {
  const { isModalOpen, setIsModalOpen, modalContent } = useModal()

  if (!isModalOpen) {
    return null
  }

  const handleClose = () => {
    setIsModalOpen(false)
  }

  return (
    <div
      className={classNames(
        'fixed opacity-0 duration-300 ease-in-out inset-0 z-50 flex items-center justify-center bg-black/40',
        {
          'opacity-100': isModalOpen,
        }
      )}
      onClick={handleClose}
    >
      <div
        className={classNames(
          'transition-opacity opacity-0 duration-300 ease-in-out w-5/6 h-5/6 md:w-3/4 md:h-3/4 bg-background relative',
          {
            'opacity-100': isModalOpen,
          }
        )}
        onClick={(e) => e.stopPropagation()} // stop event propagation
      >
        <div className="relative p-[6%] h-full">
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-0 right-2 text-white hover:text-gray-500 text-3xl md:text-4xl cursor-pointer"
          >
            &times;
          </button>

          {/* Modal content */}
          <ModalContent content={modalContent} />
        </div>
      </div>
    </div>
  )
}

export default Modal
