import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.svg'
import classNames from 'classnames'
import ScrollToTop from '../shared/ScrollToTop'
import BurgerMenu from './BurgerMenu'

export const links = ['About', 'Tech', 'Benefits', 'Contact']

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolling, setScrolling] = useState(false)
  const [showBorder, setShowBorder] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // if scrollY > 0 => scrolling
      if (window.scrollY > 0) {
        setScrolling(true)
      } else {
        setScrolling(false)
      }
    }

    // add event listener
    window.addEventListener('scroll', handleScroll)

    // cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // animate border with delay at scroll
  useEffect(() => {
    let timeoutId = null

    if (scrolling) {
      timeoutId = setTimeout(() => {
        setShowBorder(true)
      }, 800)
    } else {
      setShowBorder(false)
      if (timeoutId) clearTimeout(timeoutId)
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [scrolling])

  return (
    <>
      <ScrollToTop isBurgerMenuOpen={isOpen} scrolling={scrolling} />
      <header className="h-18">
        <div
          className={classNames(
            'w-full fixed z-10 top-0 left-0 right-0 bg-blur-strong transition-all duration-900 mx-auto',
            {
              'lg:w-[65%] lg:mt-4 lg:rounded-2xl': scrolling,
              'nav-border-bg animate-rotate-border shadow-2xl lg:p-0.5':
                showBorder,
            }
          )}
        >
          <nav
            className={classNames(
              'w-full backdrop-blur-sm px-[10%] py-4 flex items-center justify-between transition-all duration-900',
              {
                'lg:px-[2%] lg:rounded-2xl lg:bg-dark': scrolling,
              }
            )}
          >
            {/* left side */}
            <div className="flex items-center gap-6">
              {/* logo */}
              <a href="#" className="text-2xl font-bold">
                <img src={logo} alt="logo" />
              </a>
            </div>

            {/* right side */}
            <div
              className={classNames(
                'flex items-center transition-[gap] duration-900',
                {
                  'gap-8': !scrolling,
                  'gap-0': scrolling,
                }
              )}
            >
              {/* navigation */}
              <ul className="hidden lg:flex space-x-8 text-white text-base">
                {links.map((link) => (
                  <li key={link} className="scale-animation">
                    <a href={`#${link.toLowerCase()}`}>{link}</a>
                  </li>
                ))}
              </ul>

              {/* buy now button*/}
              <div
                className={classNames(
                  'hidden lg:block opacity-100 scale-100 transition-all duration-900 overflow-hidden',
                  {
                    'max-w-[161px]': !scrolling,
                    'max-w-0 lg:opacity-0 lg:scale-50 pointer-events-none':
                      scrolling,
                  }
                )}
              >
                <button className="btn-primary whitespace-nowrap">
                  Buy Now
                </button>
              </div>

              {/* burger menu */}
              <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Navbar
