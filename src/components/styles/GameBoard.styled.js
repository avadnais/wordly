import styled from "styled-components";

export const GameBoardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  max-width: 100%;
`;

export const StyledGameBoard = styled.div`
  display: grid;
  grid-template-rows: repeat(6, 1fr);
  grid-gap: 0.1rem;
  flex-grow: 1;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  padding: 10px;  
`;

export const StyledGameBoardRow = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  justify-content: space-between;
  max-height: 4rem;
  margin: 5px 0;
`;

