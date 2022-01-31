import React from "react";
import { StyledKeyboardRow, StyledKeyboard } from "./styles/Keyboard.styled";

const Row1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
const Row2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
const Row3 = ["Enter", "Z", "X", "C", "V", "B", "N", "M", "Backspace"];

function Keyboard(props) {
  console.log(props.state.guessedLetters["Q"]);
  const onKey = props.onKey;
  return (
    <StyledKeyboard className="styled-kb">
      <StyledKeyboardRow className="styled-kb-row">
        {Row1.map((letter, i) => (
          <button
            className={props.state.guessedLetters[letter]}
            key={i}
            letter={letter}
            onClick={(e) => onKey(letter)}
          >
            {letter}
          </button>
        ))}
      </StyledKeyboardRow>
      <StyledKeyboardRow className="styled-kb-row">
        {Row2.map((letter, i) => (
          <button
            className={props.state.guessedLetters[letter]}
            key={i}
            letter={letter}
            onClick={(e) => onKey(letter)}
          >
            {letter}
          </button>
        ))}
      </StyledKeyboardRow>
      <StyledKeyboardRow className="styled-kb-row">
        {Row3.map((letter, i) => {
          return letter === "Enter" || letter === "Backspace" ? (
            <button
              className={props.state.guessedLetters[letter] + " big"}
              key={i}
              letter={letter}
              onClick={(e) => onKey(letter)}
            >
              {letter.replace("Backspace", "⌫")}
            </button>
          ) : (
            <button className={props.state.guessedLetters[letter]} key={i} letter={letter} onClick={(e) => onKey(letter)}>
              {letter}
            </button>
          );
        })}
      </StyledKeyboardRow>
    </StyledKeyboard>
  );
}

export default Keyboard;
