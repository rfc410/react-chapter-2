import { FormEvent, useState } from 'react'
import Modal from 'react-modal'

import { Container, RadioBox, TransactionTypeContainer } from './styles'

import { useTransactionsContext } from '../../hooks/useTransactionsContext'

import closeImage from '../../assets/close.svg'
import incomeImage from '../../assets/income.svg'
import outcomeImage from '../../assets/outcome.svg'

interface NewTransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

const TRANSACTION_TYPE_INCOME = 'deposit'
const TRANSACTION_TYPE_OUTCOME = 'withdraw'

export const NewTransactionModal = (
  { isOpen, onRequestClose }: NewTransactionModalProps
) => {
  const { createTransaction } = useTransactionsContext()
  const [amount, setAmount] = useState(0)
  const [category, setCategory] = useState('')
  const [title, setTitle] = useState('')
  const [type, setType] = useState(TRANSACTION_TYPE_INCOME)

  const handleCreateNewTransaction = async (event: FormEvent) => {
    event.preventDefault()

    await createTransaction({ amount, category, title, type })

    setAmount(0)
    setCategory('')
    setTitle('')
    setType(TRANSACTION_TYPE_INCOME)
    onRequestClose()
  }

  return (
    <Modal
      className="react-modal-content"
      isOpen={isOpen}
      overlayClassName="react-modal-overlay"
      onRequestClose={onRequestClose}
    >
      <button
        className="react-modal-close-button"
        type="button"
        onClick={onRequestClose}
      >
        <img src={closeImage} alt="Close new transaction modal" />
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Enter new transaction</h2>

        <input
          placeholder="Title"
          type="text"
          value={title}
          onChange={event => {
            setTitle(event.target.value)
          }}
        />

        <input
          placeholder="Amount"
          type="number"
          value={amount}
          onChange={event => {
            setAmount(Number(event.target.value))
          }}
        />

        <TransactionTypeContainer>
          <RadioBox
            activeColor="green"
            isActive={type === TRANSACTION_TYPE_INCOME}
            type="button"
            onClick={() => {
              setType(TRANSACTION_TYPE_INCOME)
            }}
          >
            <img src={incomeImage} alt="Income" />
            <span>Income</span>
          </RadioBox>

          <RadioBox
            activeColor="red"
            isActive={type === TRANSACTION_TYPE_OUTCOME}
            type="button"
            onClick={() => {
              setType(TRANSACTION_TYPE_OUTCOME)
            }}
          >
            <img src={outcomeImage} alt="Outcome" />
            <span>Outcome</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          placeholder="Category"
          type="text"
          value={category}
          onChange={event => {
            setCategory(event.target.value)
          }}
        />

        <button type="submit">Create new</button>
      </Container>
    </Modal>
  )
}
