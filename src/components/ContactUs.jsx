import React from 'react'

import ContactForm from '../shared/ContactForm'

function ContactUs() {
  return (
    <section
      data-aos="fade-right"
      id="contact"
      className="section-container flex flex-col md:flex-row gap-8"
    >
      {/* left */}
      <div className="md:w-1/2 flex flex-col gap-20 justify-between">
        {/* title */}
        <div className="space-y-8">
          <span className="text-primary">Have any questions?</span>

          <h1>
            <span className="font-bold lg:font-extrabold">Get in</span>
            <span className="text-primary"> touch</span>
          </h1>

          {/* description md+ */}
          <p className="hidden md:block">
            Our manager will reply you within 15 minutes
          </p>
        </div>

        {/* contacts */}
        <div className="hidden md:flex flex-col gap-2">
          <span className="text-gray-500">+86-0571-86105373</span>
          <span className="text-gray-500">global@katvr.com</span>
          <span className="text-gray-500">overseas@katvr.com</span>
        </div>
      </div>

      {/* right */}
      <div className="md:w-1/2">
        {/* form */}
        <ContactForm />

        {/* description mobile */}
        <p className="md:hidden mt-8">
          Our manager will reply you within 15 minutes
        </p>
      </div>
    </section>
  )
}

export default ContactUs
