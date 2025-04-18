import React from 'react'
import logo from '../assets/logo.svg'
import { links } from './Navbar'
import facebook from '../assets/facebook.png'
import reddit from '../assets/reddit.png'
import twitter from '../assets/twitter.png'
import youtube from '../assets/youtube.png'

const socials = [
  {
    href: 'https://www.facebook.com/katvr.global/?locale=uk_UA',
    img: facebook,
    alt: 'facebook',
  },
  {
    href: 'https://www.reddit.com/r/KatVR/',
    img: reddit,
    alt: 'reddit',
  },
  {
    href: 'https://x.com/katvrwalk/status/1850798691629863152',
    img: twitter,
    alt: 'twitter',
  },
  { href: 'https://www.youtube.com/@KATVR', img: youtube, alt: 'youtube' },
]

function Footer() {
  return (
    <footer className="bg-black">
      <div className="section-container flex flex-col md:flex-row md:items-start md:justify-between">
        {/* Logo */}
        <a href="#" className="w-full md:w-1/4 m-0">
          <img src={logo} alt="logo" />
        </a>

        {/* Navigation */}
        <nav className="w-full md:w-1/2 mt-5 md:m-0">
          <ul className="flex flex-col items-start md:flex-row md:justify-center md:items-center gap-2 md:gap-8">
            {links.map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} className="scale-animation">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contacts + socials */}
        <div className="w-full md:w-1/4 flex flex-col items-start md:items-end gap-3 text-sm text-gray-500">
          {/* Contacts — visible on all screens now */}
          <div className="flex md:hidden flex-col gap-1 mt-4">
            <span>+86-0571-86105373</span>
            <span>global@katvr.com</span>
            <span>overseas@katvr.com</span>
          </div>

          {/* Social icons */}
          <ul className="flex space-x-4 mt-2">
            {socials.map(({ href, img, alt }) => (
              <li key={alt}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block transition-transform hover:scale-110"
                >
                  <img src={img} alt={alt} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
