const initialState = {
  guess: "",
  solution: "",
  correct: false,
  submittedGuesses: [],
  submittedGuessesClues: [],
  guessedLetters: {},
};

export const guessReducer = (state = initialState, action) => {
  switch (action.type) {
    case "addLetter":
      return {
        ...state,
        guess: state.guess + action.payload,
      };
    case "removeLetter":
      return {
        ...state,
        guess: state.guess.slice(0, -1),
      };
    case "toggleCorrect":
      return {
        ...state,
        correct: !state.correct,
      };
    case "setSolution":
      return {
        ...state,
        solution: action.payload,
      };
    case "submitGuess":
      return {
        ...state,
        submittedGuesses: [...state.submittedGuesses, state.guess],
        guess: "",
      };
    case "addClue":
      return {
        ...state,
        submittedGuessesClues: [...state.submittedGuessesClues, action.payload],
      };
    case "addGuessedLetter":
      return {
        ...state,
        guessedLetters: {
          ...state.guessedLetters, 
          [action.payload.letter]: action.payload.isThere}
      }
    default:
      return state;
  }
};

export function addLetter(letter) {
  return {
    type: `addLetter`,
    payload: letter,
  };
}
export function removeLetter() {
  return {
    type: `removeLetter`,
  };
}

export function toggleCorrect() {
  return {
    type: "toggleCorrect",
  };
}

export function setSolution(word) {
  return {
    type: "setSolution",
    payload: word,
  };
}

export function submitGuess() {
  return {
    type: "submitGuess",
  };
}

export function addClue(clue) {
  return {
    type: "addClue",
    payload: clue,
  };
}

export function addGuessedLetter(letter, isThere){
  return {
    type: 'addGuessedLetter',
    payload: {
      letter: letter,
      isThere: isThere
    }
  }
}
