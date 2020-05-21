import styled from "styled-components";

const ToggleContainer = styled.button`
  background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  justify-content: center;
  overflow: hidden;
  padding: 0 0.2rem;
  position: relative;
  width: 4rem;
  height: 2rem;

  svg {
    height: auto;
    width: 2.5rem;
    transition: all 0.25s linear;

    // sun icon
    &:first-child {
      transform: ${({ lightTheme }) =>
        lightTheme ? "translateX(0)" : "translateX(200px)"};
    }

    // moon icon
    &:nth-child(2) {
      transform: ${({ lightTheme }) =>
        lightTheme ? "translateX(-200px)" : "translateX(0)"};
    }
  }
`;

export default ToggleContainer;
