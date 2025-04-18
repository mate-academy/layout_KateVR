// aos animation library
import 'aos/dist/aos.css'
import Aos from 'aos'

import Hero from './components/Hero'
import MoreThanGaming from './components/MoreThanGaming'
import AboutProduct from './components/AboutProduct'
import TechSpecs from './components/TechSpecs'
import WhyKatLoco from './components/WhyKatLoco'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import { ModalProvider } from './shared/Modal/ModalContext'
import Modal from './shared/Modal'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    })
  }, [])

  return (
    <ModalProvider>
      <Modal />
      <Hero />
      <MoreThanGaming />
      <AboutProduct />
      <TechSpecs />
      <WhyKatLoco />
      <ContactUs />
      <Footer />
    </ModalProvider>
  )
}

export default App
