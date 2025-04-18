import React from 'react'
import { modalTypes, useModal, useModalHandler } from '../ModalContext'

function HelpContent() {
  const { openModal } = useModalHandler()
  const { setIsModalOpen } = useModal()

  return (
    <div className="h-full flex flex-col gap-10 md:justify-between">
      {/* title */}
      <h1>
        <span className="font-bold lg:font-extrabold">How can we </span>
        <span className="text-primary">help </span>
        <span className="font-bold lg:font-extrabold">you?</span>
      </h1>

      {/* description */}
      <div className="space-y-10 md:space-y-25">
        {/* links */}
        <p>
          Welcome to our help center. Our goal is to make the process of
          <br /> getting acquainted and purchase as easy and pleasant as
          possible. Need help with your KAT VR loco product? Many product
          questions can be resolved by reviewing our Product Support{' '}
          <a
            href="#"
            className="text-primary"
            onClick={() => {
              openModal(modalTypes.faq)
            }}
          >
            FAQs
          </a>
          . Please also feel free to Contact Us directly should you need
          anything further. We’re happy to help.
        </p>

        <p>
          Please also feel free to{' '}
          <a
            href="#contact"
            className="text-primary"
            onClick={() => setIsModalOpen(false)}
          >
            Contact Us
          </a>{' '}
          directly should you need anything further. We’re happy to help.
        </p>

        {/* contacts */}
        <div className="space-y-5">
          <div className="flex gap-5 lg:w-1/2 justify-between">
            <span className="text-primary">Instruction manual</span>
            <a href="tel:+86-0571-86105373" className="text-gray-500">
              +86-0571-86105373
            </a>
          </div>

          <div className="flex gap-5 lg:w-1/2 justify-between">
            <span className="text-primary">Where to go for a warranty</span>
            <a href="mailto:global@katvr.com" className="text-gray-500">
              global@katvr.com
            </a>
          </div>

          <div className="flex gap-5 lg:w-1/2 justify-between">
            <span className="text-primary">Service Policy</span>
            <a href="mailto:overseas@katvr.com" className="text-gray-500">
              overseas@katvr.com
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HelpContent
