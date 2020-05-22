import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
  }

  h1 {
    color: ${({ theme }) => theme.green};
  }

  header {
    background-color: ${({ theme }) => theme.accent};
  }
  
  a {
    color: ${({ theme }) => theme.text};
    text-decoration: none;
  }

  .magenta {
    color: ${({ theme }) => theme.magenta};
  }

  .yellow {
    color: ${({ theme }) => theme.yellow};
  }

  .green {
    color: ${({ theme }) => theme.green};
  }

  .cyan {
    color: ${({ theme }) => theme.cyan};
  }

  .orange {
    color: ${({ theme }) => theme.orange};
  }

  .lilac {
    color: ${({ theme }) => theme.lilac};
  }`;
