import React, { useEffect, useCallback } from "react";
import Header from "./Header";
import GameBoard from "./GameBoard";
import Keyboard from "./Keyboard";
import { StyledGame } from "./styles/Game.styled";
import Modal from "./Modal";
import {
  toggleCopiedToClipboard,
  newGame,
  toggleGameOver,
  addGuessedLetter,
  addClue,
  removeLetter,
  submitGuess,
  addLetter,
  toggleCorrect,
  setSolution,
  toggleModal,
} from "../reducers";

import { solutionWords, guessWords } from "./words.js";

function Game(props) {
  const { state, dispatch } = props;
  const TIMEOUT = 10;

  const generateSolutionWord = () => {
    return solutionWords[Math.floor(Math.random() * solutionWords.length)];
  };

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
      if (state.gameOver) {
        dispatch(newGame());
        dispatch(setSolution(generateSolutionWord()));
        return;
      }

      if (state.guess.length < 5) {
        alert("Too short");
        return;
      }
      if (
        !(
          guessWords.includes(state.guess) ||
          solutionWords.includes(state.guess)
        )
      ) {
        alert(`${state.guess} not found`);
        return;
      }
      dispatch(submitGuess());
      checkGuessedLetters();
      checkGuess();
    }
  };

  const handleLetter = (key) => {
    if (state.guess.length >= 5) return;
    dispatch(addLetter(key));
    if (state.guess.length > 0) {
      if (state.guess === state.solution) {
        dispatch(toggleCorrect());
      }
    }
  };

  const checkGuessedLetters = () => {
    const lettersArr = state.guess.split("");

    for (const letter of lettersArr) {
      (state.solution.includes(letter) &&
        state.solution.charAt(state.guess.indexOf(letter)) === letter) ||
      state.guessedLetters[letter] === "green"
        ? dispatch(addGuessedLetter(letter, "green"))
        : state.solution.includes(letter)
        ? dispatch(addGuessedLetter(letter, "yellow"))
        : dispatch(addGuessedLetter(letter, "gray"));
    }
  };

  const checkGuess = () => {
    if (
      state.submittedGuesses[state.submittedGuesses.length - 1] ===
      state.solution
    ) {
      dispatch(toggleCorrect());
      dispatch(toggleGameOver());
      dispatch(toggleModal());
    } else if (state.submittedGuesses.length === 6) {
      dispatch(toggleGameOver());
      dispatch(toggleModal());
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
      dispatch(addClue(clue));
    }
  };

  useEffect(() => {
    const solution = generateSolutionWord();
    dispatch(setSolution(solution));
  }, []);

  useEffect(() => {
    const onKeyDown = (e) => {
      onKey(e.key);
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
    }; // eslint-disable-next-line
  }, [state, dispatch]);

  useEffect(() => {
    checkGuess(); // eslint-disable-next-line
  }, [state.submittedGuesses]);

  useEffect(() => {
    checkForClues();
    //console.log(state);
  }, [state.submittedGuesses]);

  /* Returns formatted string of results */
  const getCopyToClipboardMessage = () => {
    let resultsStr = "";
    for (const clue of state.submittedGuessesClues) {
      resultsStr += clue.reduce((a, b) => a + b) + "\n";
    }
    const resultsMsg = `[wrdly]\n\n${resultsStr}\n[${state.solution}]`;
    return resultsMsg;
  };

  return (
    <StyledGame className="game">
      <Header />
      <Modal
        visible={state.modalVisible}
        clues={state.submittedGuessesClues}
        word={state.solution}
        correct={state.correct}
        text={getCopyToClipboardMessage()}
        toggleCopied={() => dispatch(toggleCopiedToClipboard())}
        copied={state.copiedToClipboard}
        close={() => dispatch(toggleModal())}
      />
      <GameBoard state={state} dispatch={dispatch} />
      <p style={{ display: state.gameOver ? "block" : "none" }}>
        Press Enter to start a new puzzle
      </p>
      <Keyboard state={state} dispatch={dispatch} onKey={onKey} />
    </StyledGame>
  );
}

export default Game;
