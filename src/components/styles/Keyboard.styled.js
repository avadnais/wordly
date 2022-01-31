import styled, { keyframes } from "styled-components";

const pop = keyframes`
  0%, 100%  {
    transform: scale(1);
    -webkit-transform: scale(1)
  }

  50% {
    transform: scale(1.2);
    -webkit-transform: scale(1.2)
  }
`;

export const StyledButton = styled.button`
  font-size: 1rem;
  margin: 0 5px 0 0;
  min-height: 3rem;
  border-radius: 4px;
  width: min(2rem, 8vw);
  border: none;
  padding: none;
  background-color: #535353;
  color: white;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  animation: ${(props) => props.selectedLetter === props.letter ? pop : ''} 200ms;
  -webkit-animation:  ${(props) => props.selectedLetter === props.letter ? pop : ''} 200ms;
  
`;

export const StyledKeyboard = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-auto-columns: auto;
  width: 100%;
  width: 100%;
`;

export const StyledKeyboardRow = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 0 auto 8px;
  max-width: 100%;
  }

.gray {
    background-color: #252525;
  }

.yellow {
    background-color: rgba(228,228,31,.7);
  }

.green {
    background-color: rgba(63,191,63,.7);
  }

  .big {
    width: 3rem;
  }
`;
