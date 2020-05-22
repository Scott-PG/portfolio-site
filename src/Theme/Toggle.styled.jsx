import styled from "styled-components";

const ToggleContainer = styled.button`
  background: ${({ theme }) => theme.toggleBackground};
  border: 2px solid ${({ theme }) => theme.border};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  justify-content: center;
  overflow: hidden;
  padding: 0 0.2rem;
  position: relative;
  width: 48px;
  height: 32px;

  svg {
    height: auto;
    width: 2.5rem;
    transition: all 0.25s linear;

    // sun icon
    &:first-child {
      transform: ${({ lightTheme }) =>
        lightTheme ? "translateX(9.5px)" : "translateX(50px)"};
    }

    // moon icon
    &:nth-child(2) {
      transform: ${({ lightTheme }) =>
        lightTheme ? "translateX(-50px)" : "translateX(-8px)"};
    }
  }
`;

export default ToggleContainer;
