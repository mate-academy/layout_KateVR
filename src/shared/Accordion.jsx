import React from 'react'
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react'

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? 'rotate-180' : ''
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  )
}

export function DefaultAccordion() {
  const [open, setOpen] = React.useState(1)

  const handleOpen = (value) => setOpen(open === value ? 0 : value)

  return (
    <div className="space-y-3">
      <Accordion
        open={open === 1}
        icon={<Icon id={1} open={open} />}
        className="rounded-sm	 border border-primary px-3 md:px-6"
      >
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className="text-primary text-base font-light border-b-0 hover:text-white cursor-pointer"
        >
          What makes KAT loco different from other systems?
        </AccordionHeader>
        <AccordionBody className="text-gray-500 p-0 pb-4">
          Despite being approached from many different angles, all traditional
          VR Locomotion systems including roomscale, teleportation, and free
          locomotion failed to provide an optimal solution capable of
          integrating high immersion with convenience. KAT loco does all of that
          without repeating their flaws. Our system offers a complete and
          versatile solution for an affordable price what makes it a perfect
          choice for home-use. It is also 100% user friendly, wireless,
          universally compatible, and more! It even offers decoupled head and
          body directions! dreams.
          <p className="mt-3 text-gray-700">
            Last updated: Wed, June 12 2019 7:07 PM UTC +03:00
          </p>
        </AccordionBody>
      </Accordion>

      <Accordion
        open={open === 2}
        icon={<Icon id={2} open={open} />}
        className="rounded-sm	 border border-primary px-6"
      >
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className="text-primary text-base font-light border-b-0 hover:text-white cursor-pointer"
        >
          What is the difference between the KAT loco and KAT loco mini?
        </AccordionHeader>
        <AccordionBody className="text-gray-500 p-0 pb-4">
          KAT loco is our original, top-of-the-line VR Locomotion system that
          includes our unique, patented technology. It is designed to be the
          most immersive and realistic VR Locomotion experience available. KAT
          loco mini is a more affordable, compact version of the KAT loco
          system. It is designed for people who want a more affordable option
          for their home, or for those who are just starting out with VR. It is
          still a very immersive and realistic VR Locomotion experience, but it
          is not as advanced as the KAT loco system.
        </AccordionBody>
      </Accordion>

      <Accordion
        open={open === 3}
        icon={<Icon id={3} open={open} />}
        className="rounded-sm	 border border-primary px-6"
      >
        <AccordionHeader
          onClick={() => handleOpen(3)}
          className="text-primary text-base font-light border-b-0 hover:text-white cursor-pointer"
        >
          How does the KAT loco system work?
        </AccordionHeader>
        <AccordionBody className="text-gray-500 p-0 pb-4">
          The KAT loco system is a unique, patented technology that allows you
          to move around in VR without the need for a physical space. It uses a
          combination of sensors and motors to create a realistic and immersive
          VR Locomotion experience. The system is designed to be easy to use and
          is compatible with most VR headsets and games.
        </AccordionBody>
      </Accordion>

      <Accordion
        open={open === 4}
        icon={<Icon id={4} open={open} />}
        className="rounded-sm	 border border-primary px-6"
      >
        <AccordionHeader
          onClick={() => handleOpen(4)}
          className="text-primary text-base font-light border-b-0 hover:text-white cursor-pointer"
        >
          Is the KAT loco system compatible with my VR headset?
        </AccordionHeader>
        <AccordionBody className="text-gray-500 p-0 pb-4">
          Yes, the KAT loco system is compatible with most VR headsets and
          games. It is designed to be universally compatible and can be used
          with any VR headset or game that supports VR Locomotion.
        </AccordionBody>
      </Accordion>
    </div>
  )
}
