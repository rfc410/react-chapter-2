import { Container } from './styles'

import { useTransactionsContext } from '../../hooks/useTransactionsContext'

import incomeImage from '../../assets/income.svg'
import outcomeImage from '../../assets/outcome.svg'
import totalImage from '../../assets/total.svg'

const TRANSACTION_TYPE_INCOME = 'deposit'
const TRANSACTION_TYPE_OUTCOME = 'withdraw'

export const Summary = () => {
  const { transactions } = useTransactionsContext()

  const incomes = transactions
    .filter((transaction) => transaction.type === TRANSACTION_TYPE_INCOME)
    .reduce((total, transaction) => total + transaction.amount, 0)

  const outcomes = transactions
    .filter((transaction) => transaction.type === TRANSACTION_TYPE_OUTCOME)
    .reduce((total, transaction) => total + transaction.amount, 0)

  const total = incomes - outcomes

  return (
    <Container>
      <div>
        <header>
          <p>Incomes</p>
          <img src={incomeImage} alt="Incomes" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-br', {
            currency: 'BRL',
            style: 'currency'
          }).format(incomes)}
        </strong>
      </div>

      <div>
        <header>
          <p>Outcomes</p>
          <img src={outcomeImage} alt="Outcomes" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-br', {
            currency: 'BRL',
            style: 'currency'
          }).format(outcomes)}
        </strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImage} alt="Total" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-br', {
            currency: 'BRL',
            style: 'currency'
          }).format(total)}
        </strong>
      </div>
    </Container>
  )
}
