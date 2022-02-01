import React from "react";
import {StyledModal} from './styles/Modal.styled'

function Modal(props) {
  return (
      <StyledModal visible={props.visible}>
        <h3>{props.correct ? "Correct!" : "Not Quite!"}</h3>
        {props.clues.map((a, b) => {
          return <p key={b}>{a.reduce((x, y) => x + y)}</p>
        })}
        <p className="word">{props.word}</p>

        <button onClick={props.handleClose}>Close</button>
      </StyledModal>
  );
}

export default Modal;
