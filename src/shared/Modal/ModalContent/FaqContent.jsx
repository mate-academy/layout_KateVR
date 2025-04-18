import React from 'react'
import { DefaultAccordion as Accordion } from '../../Accordion'
import More from '../../More'

function FaqContent() {
  return (
    <div className="h-full flex flex-col gap-2 md:gap-5 justify-between px-2 md:px-4 overflow-y-auto scrollbar-custom">
      {/* title */}
      <h1>
        <span className="font-bold lg:font-extrabold">Frequently asked</span>
        <br />
        <span className="text-primary"> questions</span>
      </h1>

      {/* accordion */}
      <Accordion />

      <div className="flex justify-center mt-3 md:mt-6">
        <More />
      </div>
    </div>
  )
}

export default FaqContent
