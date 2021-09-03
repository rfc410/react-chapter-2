import { useState } from 'react'
import Modal from 'react-modal'

import { TransactionsProvider } from './hooks/useTransactionsContext'

import { Dashboard } from './components/Dashboard'
import { Header } from './components/Header'
import { NewTransactionModal } from './components/NewTransactionModal'

import { GlobalStyle } from './styles/global'

Modal.setAppElement('#root')

export const App = () => {
  const [
    isNewTransactionModalOpen,
    setIsNewTransactionModalOpen
  ] = useState(false)

  const handleCloseNewTransactionModal = () => {
    setIsNewTransactionModalOpen(false)
  }

  const handleOpenNewTransactionModal = () => {
    setIsNewTransactionModalOpen(true)
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <GlobalStyle />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
    </TransactionsProvider>
  )
}
