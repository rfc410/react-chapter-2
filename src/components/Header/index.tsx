import { Container, Content } from './styles'

import logoImage from '../../assets/logo.svg'

interface HeaderProps {
  onOpenNewTransactionModal: () => void
}

export const Header = ({ onOpenNewTransactionModal }: HeaderProps) => {
  return (
    <Container>
      <Content>
        <img src={logoImage} alt="dt money" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          New transaction
        </button>
      </Content>
    </Container>
  )
}
