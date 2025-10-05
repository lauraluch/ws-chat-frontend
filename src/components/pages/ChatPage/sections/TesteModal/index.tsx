// External Libraries
import React, { useState, useImperativeHandle } from 'react'

// Components

// Hooks
import { useModalContext } from '@contexts/useModalContext'

// Types
import { TesteModalMethods, TesteModalProps } from './types'

// Styles
import { Container } from './styles'

export const TesteModal = React.forwardRef<TesteModalMethods, TesteModalProps>((props, ref) => {
  // Hooks
  useImperativeHandle(ref, handleRefMethods)
  const { closeModal } = useModalContext()

  // States
  const [visible, setVisible] = useState(false)

  // Functions
  function handleRefMethods() {
    return { open: handleOpen, close: handleClose }
  }

  function handleOpen() {
    setVisible(true)
  }

  function handleClose() {
    setVisible(false)
    closeModal()
  }

  return (
    <Modal open={visible} onClose={handleClose}>
      <Container></Container>
    </Modal>
  )
})

TesteModal.displayName = 'TesteModal'

