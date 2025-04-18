import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import burgerMenu from '../assets/burgerMenu.svg'
import burgerMenuClose from '../assets/burgerMenu-close.svg'
import { links } from './Navbar'
import { modalTypes, useModalHandler } from '../shared/Modal/ModalContext'

function BurgerMenu({ isOpen, setIsOpen }) {
  const [activeSection, setActiveSection] = useState('')
  const { openModal } = useModalHandler()

  const linksMobile = [
    { link: 'Language', type: modalTypes.language },
    { link: 'FAQ', type: modalTypes.faq },
    { link: 'Help', type: modalTypes.help },
  ]

  // disable scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  // detect active section
  useEffect(() => {
    const sections = links.map((id) =>
      document.getElementById(id.toLowerCase())
    )

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-50% 0px -50% 0px' } // center of viewport
    )

    sections.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section)
      })
    }
  }, [])

  return (
    <div className="lg:hidden">
      {/* burger button */}
      <button onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
        <img
          src={isOpen ? burgerMenuClose : burgerMenu}
          alt="burger menu"
          className="w-6 h-6 pt-1"
        />
      </button>

      {/* mobile navigation */}
      <div
        onClick={() => setIsOpen(false)}
        className={classNames('-z-1 fixed top-0 left-0 bg-black/40', {
          'w-screen h-screen': isOpen,
        })}
      >
        <nav
          className={classNames(
            'z-50 fixed top-0 left-0 h-screen w-full bg-background shadow-lg transform transition-transform duration-300 ease-in-out',
            {
              'translate-x-0': isOpen,
              '-translate-x-full': !isOpen,
            }
          )}
        >
          <ul className="text-white space-y-6 md:space-y-10 text-left  pt-20 text-xl md:text-2xl">
            {links.map((link) => (
              <li
                key={link}
                className={classNames(
                  'px-4 pl-15 md:pl-30 transition duration-100',
                  {
                    'text-primary font-bold bg-secondary p-4':
                      activeSection === link.toLowerCase(),
                  }
                )}
              >
                <a
                  href={`#${link.toLowerCase()}`}
                  onClick={() => {
                    setIsOpen(false)
                  }}
                >
                  {link}
                </a>
              </li>
            ))}

            {linksMobile.map(({ link, type }) => (
              <li key={link} className="px-4 pl-15 md:pl-30">
                <a
                  href="#"
                  onClick={() => {
                    setIsOpen(false)
                    openModal(modalTypes[type])
                  }}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default BurgerMenu
