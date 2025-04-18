import React from 'react'
import { modalTypes } from '../ModalContext'
import FaqContent from './FaqContent'
import HelpContent from './HelpContent'
import LanguageContent from './LanguageContent'

function ModalContent({ content }) {
  return (
    <>
      {content === modalTypes.language && <LanguageContent />}
      {content === modalTypes.faq && <FaqContent />}
      {content === modalTypes.help && <HelpContent />}
    </>
  )
}

export default ModalContent
