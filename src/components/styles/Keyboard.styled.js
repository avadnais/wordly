import styled from "styled-components";

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

  button {
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
  }

  .big {
    width: 3rem;
  }
`;