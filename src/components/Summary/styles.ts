import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(3, 1fr);

  margin-top: -10rem;

  div {
    color: var(--text-title);

    background-color: var(--shape);
    border-radius: .25rem;
    padding: 1.5rem 2rem;

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;

      display: block;
      margin-top: 1rem;
    }

    &.highlight-background {
      background-color: var(--green);
      color: #fff;
    }
  }
`
