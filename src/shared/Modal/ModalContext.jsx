import React from 'react'

const ModalContext = React.createContext()

// modal types
export const modalTypes = {
  language: 'language',
  faq: 'faq',
  help: 'help',
}

export const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const [modalContent, setModalContent] = React.useState(null)

  return (
    <ModalContext.Provider
      value={{ isModalOpen, setIsModalOpen, modalContent, setModalContent }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export const useModal = () => React.useContext(ModalContext)

// This hook is used to open the modal
export const useModalHandler = () => {
  const { setIsModalOpen, setModalContent } = useModal()

  const openModal = (content) => {
    setIsModalOpen(true)
    setModalContent(content)
  }

  return { openModal }
}
