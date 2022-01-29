import React, { useEffect, useState } from "react";
import Tile from "./Tile.js";
import {
  StyledGameBoard,
  GameBoardContainer,
  StyledGameBoardRow,
} from "./styles/GameBoard.styled";
import { toggleCorrect } from "../reducers.js";

function GameBoard(props) {
  const { state, dispatch } = props;

  return (
    <GameBoardContainer className="gb_container">
      <StyledGameBoard className="styled_gb">
        <StyledGameBoardRow className="styled_gb_row1">
          {Array.from({ length: 5 }, (_, x) => (
            <Tile
            clue={state.submittedGuessesClues[0]
              && state.submittedGuessesClues[0][x]}
              letter={
                state.submittedGuesses[0]
                  ? state.submittedGuesses[0][x]
                  : state.guess[x]
              }
              key={x + 1}
              i={x + 1}
              dispatch={dispatch}
              state={state}
              row={1}
            />
          ))}
        </StyledGameBoardRow>
        <StyledGameBoardRow className="styled_gb_row2">
          {Array.from({ length: 5 }, (_, x) => (
            <Tile
            clue={state.submittedGuessesClues[1]
              && state.submittedGuessesClues[1][x]}
            letter={
              state.submittedGuesses.length > 1
                ? state.submittedGuesses[1][x]
                : state.submittedGuesses.length === 1
                ? state.guess[x]
                : ''
            }
              key={x + 6}
              i={x + 6}
              dispatch={dispatch}
              state={state}
              row={2}
            />
          ))}
        </StyledGameBoardRow>
        <StyledGameBoardRow className="styled_gb_row3">
          {Array.from({ length: 5 }, (_, x) => (
            <Tile
            clue={state.submittedGuessesClues[2]
              && state.submittedGuessesClues[2][x]}
            letter={
              state.submittedGuesses.length > 2
                ? state.submittedGuesses[2][x]
                : state.submittedGuesses.length === 2
                ? state.guess[x]
                : ''
            }
              key={x + 11}
              i={x + 11}
              dispatch={dispatch}
              state={state}
              row={3}
            />
          ))}
        </StyledGameBoardRow>
        <StyledGameBoardRow className="styled_gb_row4">
          {Array.from({ length: 5 }, (_, x) => (
            <Tile
            clue={state.submittedGuessesClues[3]
              && state.submittedGuessesClues[3][x]}
            letter={
              state.submittedGuesses.length > 3
                ? state.submittedGuesses[3][x]
                : state.submittedGuesses.length === 3
                ? state.guess[x]
                : ''
            }
              key={x + 16}
              i={x + 16}
              dispatch={dispatch}
              state={state}
              row={4}
            />
          ))}
        </StyledGameBoardRow>
        <StyledGameBoardRow className="styled_gb_row5">
          {Array.from({ length: 5 }, (_, x) => (
            <Tile
            clue={state.submittedGuessesClues[4]
              && state.submittedGuessesClues[4][x]}
            letter={
              state.submittedGuesses.length > 4
                ? state.submittedGuesses[4][x]
                : state.submittedGuesses.length === 4
                ? state.guess[x]
                : ''
            }
              key={x + 21}
              i={x + 21}
              dispatch={dispatch}
              state={state}
              row={5}
            />
          ))}
        </StyledGameBoardRow>
        <StyledGameBoardRow className="styled_gb_row6">
          {Array.from({ length: 5 }, (_, x) => (
            <Tile
            clue={state.submittedGuessesClues[5]
              && state.submittedGuessesClues[5][x]}
            letter={
              state.submittedGuesses.length > 5
                ? state.submittedGuesses[5][x]
                : state.submittedGuesses.length === 5
                ? state.guess[x]
                : ''
            }
              key={x + 26}
              i={x + 26}
              dispatch={dispatch}
              state={state}
              row={6}
            />
          ))}
        </StyledGameBoardRow>
      </StyledGameBoard>
    </GameBoardContainer>
  );
}

export default GameBoard;
