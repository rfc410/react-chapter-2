import styled from 'styled-components'
import { darken, transparentize } from 'polished'

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    background-color: #e7e9ee;

    font-size: 1rem;
    font-weight: 400;

    border: 1px solid #d7d7d7;
    border-radius: .25rem;
    height: 4rem;
    padding: 0 1.5rem;
    width: 100%;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    background-color: var(--green);
    color: #fff;
    font-size: 1rem;
    font-weight: 600;

    border: 0;
    border-radius: .25rem;
    height: 4rem;
    margin-top: 1.5rem;
    padding: 0 1.5rem;
    width: 100%;

    transition: filter .2s;

    &:hover {
      filter: brightness(.9);
    }
  }
`

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;

  display: grid;
  gap: .5rem;
  grid-template-columns: 1fr 1fr;
`

interface RadioBoxProps {
  activeColor: 'green' | 'red'
  isActive: boolean
}

const colors = {
  green: '#33cc95',
  red: '#e52e4d'
}

export const RadioBox = styled.button<RadioBoxProps>`
  background-color: ${(props) => (
    props.isActive
      ? transparentize(0.9, colors[props.activeColor])
      : 'transparent'
  )};

  border: 1px solid #d7d7d7;
  border-radius: .25rem;
  height: 4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: border-color .2s;

  &:hover {
    border-color: ${darken(0.1, '#d7d7d7')};
  }

  img {
    height: 20px;
    width: 20px;
  }

  span {
    display: inline-block;
    margin-left: 1rem;

    color: var(--text-title);
    font-size: 1rem;
  }
`
