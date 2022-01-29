import React, { useEffect } from "react";
import Header from "./Header";
import GameBoard from "./GameBoard";
import Keyboard from "./Keyboard";
import { StyledGame } from "./styles/Game.styled";
import {
    addClue,
  removeLetter,
  submitGuess,
  addLetter,
  toggleCorrect,
  setSolution
} from "../reducers";

import {words} from './words.js'

function Game(props) {
  const { state, dispatch } = props;

  const generateSolutionWord = () => {
      let solutionWord = ''
      while(solutionWord.length !== 5){
          solutionWord = words[Math.floor(Math.random() * words.length)]
      }
      return solutionWord
  }

  const onKey = (key) => {
    //console.log(`keyDown: ${key}`);
    const keyIsLetter = /[a-zA-Z]{1}/.test(key);

    if (key === "Backspace") {
      dispatch(removeLetter());
    }

    if (keyIsLetter && key.length === 1) {
      handleLetter(key);
    }

    if (key === "Enter") {
      if (state.guess.length < 5) {
        alert("Too short");
        return;
      }
      dispatch(submitGuess());
      //console.log(state);
      checkGuess();
    }
  };

  const checkGuess = () => {
    if (
      state.submittedGuesses[state.submittedGuesses.length - 1] ===
      state.solution
    ) {
      alert("You win!");
    }
    else if (state.submittedGuesses.length === 6){
      alert(`You lose! The word was ${state.solution}`) 
      //resetGame()
    }
  };

  const checkForClues = () => {
    if (state.submittedGuesses.length > 0) {
      const clue = [
        ...state.submittedGuesses[state.submittedGuesses.length - 1],
      ].map((letter, i) => {
          //console.log(letter)
        if (state.solution.charAt(i) === letter) {
          return "🟩";
        }
        if (state.solution.includes(letter)) {
          return "🟨";
        }
        return "⬜";
      });
      //console.log(clue);
      dispatch(addClue(clue))
    }
  };

  useEffect(() => {
    const solution = generateSolutionWord();
    dispatch(setSolution(solution));
  }, []) 

  useEffect(() => {
    const onKeyDown = (e) => {
      onKey(e.key);
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [state, dispatch]);

  useEffect(() => {
    checkGuess();
  });

  useEffect(() => {
    checkForClues();
  }, [state.submittedGuesses])

  const handleLetter = (key) => {
    if (state.guess.length >= 5) return;
    dispatch(addLetter(key.toUpperCase()));
    if (state.guess.length > 0) {
      if (state.guess === state.solution) {
        dispatch(toggleCorrect());
      }
    }
  };

  return (
    <StyledGame className="game">
      <Header />
      <GameBoard state={state} dispatch={dispatch} />
      <Keyboard state={state} dispatch={dispatch} onKey={onKey} />
    </StyledGame>
  );
}

export default Game;
