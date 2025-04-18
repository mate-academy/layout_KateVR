import React from 'react'
import ArrowUp from '../assets/arrowUp.svg'
import classNames from 'classnames'
import { useModal } from './Modal/ModalContext'

function ScrollToTop({ isBurgerMenuOpen, scrolling }) {
  const { isModalOpen } = useModal()

  return (
    <a
      href="#"
      className={classNames(
        'fixed bottom-10 opacity-0 right-10 z-50 transition-opacity duration-500 ease-in-out',
        {
          'opacity-100': !(isModalOpen || isBurgerMenuOpen || !scrolling),
        }
      )}
    >
      <img src={ArrowUp} alt="arrowUp" />
    </a>
  )
}

export default ScrollToTop
