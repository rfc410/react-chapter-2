import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --background-color: #f0f2f5;
    --blue-light: #6933ff;
    --blue: #5429cc;
    --green: #33cc95;
    --red: #e52e4d;
    --shape: #fff;
    --text-body: #969cb3;
    --text-title: #363f5f;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%
    }

    @media (max-width: 720px) {
      font-size: 87.5%
    }
  }

  body {
    -webkit-font-smoothing: antialiased;

    background-color: var(--background-color);
  }

  body,
  button,
  input,
  textarea {
    font-family: 'Monaco', 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    cursor: not-allowed;
    opacity: .6;
  }

  .react-modal-close-button {
    background-color: transparent;
    border: 0;
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;

    transition: filter .2s;

    &:hover {
      filter: brightness(.8);
    }
  }

  .react-modal-content {
    background-color: var(--background-color);

    border-radius: .25rem;
    max-width: 576px;
    padding: 3rem;
    width: 100%;

    position: relative;
  }

  .react-modal-overlay {
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: rgba(0, 0, 0, .5);

    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
  }
`
