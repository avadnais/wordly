import React, { useEffect } from "react";
import Header from "./Header";
import GameBoard from "./GameBoard";
import Keyboard from "./Keyboard";
import { StyledGame } from "./styles/Game.styled";
import Modal from "./Modal";
import { encrypt, decrypt } from "../features/crypto";
import {
  toggleResultIsCopied,
  toggleChallengeIsCopied,
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

import { words } from "./words.js";

function Game(props) {
  const { state, dispatch } = props;
  const SECRET = 'wrdly'
  const PATH = '/wrdly/'

  const generateSolutionWord = () => {
    let solution = "";
    while (solution.length !== 5) {
      solution = words[Math.floor(Math.random() * words.length)];
    }

    const path = window.location.pathname;  

    if (!(path === PATH)) { //url has solution
      solution = decrypt(SECRET, path.substring(7))
      window.history.pushState(null, "", encrypt(SECRET, solution))
    } else { //on first page load 
      window.history.pushState(null, "", PATH)
      window.history.pushState(null, "", encrypt(SECRET, solution));
    }
    dispatch(setSolution(solution));
    
  };

  const onKey = (key) => {
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
        window.history.pushState(null, "", PATH)
        setSolution(generateSolutionWord());
        return;
      }

      if (state.guess.length < 5) {
        alert("Too short");
        return;
      }
      if (!words.includes(state.guess)) {
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
    dispatch(addLetter(key.toUpperCase()));
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
        if (state.solution.charAt(i) === letter) {
          return "🟩";
        }
        if (state.solution.includes(letter)) {
          return "🟨";
        }
        return "⬜";
      });
      dispatch(addClue(clue));
    }
  };

  useEffect(() => {
      setSolution(generateSolutionWord());
  }, []);

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
  }, [state.submittedGuesses]);

  useEffect(() => {
    checkForClues();
  }, [state.submittedGuesses]);

  /* Returns formatted string of results */
  const getResultsMessage = () => {
    let resultsStr = "";
    for (const clue of state.submittedGuessesClues) {
      resultsStr += clue.reduce((a, b) => a + b) + "\n";
    }
    const resultsMsg = `[wrdly]\n\n${resultsStr}\n[${state.solution.toLowerCase()}]`;
    return resultsMsg;
  };
  const getChallengeMessage = () => {
    let resultsStr = "";
    for (const clue of state.submittedGuessesClues) {
      resultsStr += clue.reduce((a, b) => a + b) + "\n";
    }
    const challengeMsg = `I challenge you in [wrdly]\n\n${resultsStr}\n${window.location}`;
    return challengeMsg;
  };

  return (
    <StyledGame className="game">
      <Header />
      <Modal
        visible={state.modalVisible}
        clues={state.submittedGuessesClues}
        word={state.solution}
        correct={state.correct}
        resultText={state.solution && getResultsMessage()}
        toggleResultIsCopied={() => dispatch(toggleResultIsCopied())}
        resultIsCopied={state.resultIsCopied}
        challengeText={state.solution && getChallengeMessage()}
        challengeIsCopied={state.challengeIsCopied}
        toggleChallengeIsCopied={() => dispatch(toggleChallengeIsCopied())}
        handleClose={() => dispatch(toggleModal())}
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
