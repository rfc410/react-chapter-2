import styled from 'styled-components'

export const Container = styled.header`
  background-color: var(--blue);
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 auto;
  max-width: 1120px;
  padding: 2rem 1rem 12rem;

  button {
    background-color: var(--blue-light);
    border: 0;
    border-radius: .25rem;
    height: 3rem;
    padding: 0 2rem;

    color: #fff;
    font-size: 1rem;

    transition: filter .2s;

    &:hover {
      filter: brightness(.9);
    }
  }
`
