import { createContext, ReactNode, useContext, useEffect, useState } from 'react'

import { api } from '../services/api'

export interface Transaction {
  id: number
  amount: number
  category: string
  createdAt: string
  title: string
  type: string
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

interface TransactionsProviderProps {
  children: ReactNode
}

interface TransactionsContextData {
  transactions: Transaction[]
  createTransaction: (transaction: TransactionInput) => Promise<void>
}

const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
)

export const TransactionsProvider = ({ children }: TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    api.get('/transactions')
      .then(response => response.data.transactions)
      .then(setTransactions)
  }, [])

  const createTransaction = async (transactionInput: TransactionInput) => {
    const response = await api.post('/transactions', {
      ...transactionInput,
      createdAt: new Date()
    })
    const { transaction } = response.data
    setTransactions(transactions => [...transactions, transaction])
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}

export const useTransactionsContext = () => {
  const context = useContext(TransactionsContext)
  return context
}
