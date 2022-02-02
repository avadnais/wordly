import React from "react";
import { StyledModal } from "./styles/Modal.styled";
import { CopyToClipboard } from "react-copy-to-clipboard";

function Modal(props) {
  return (
    <StyledModal visible={props.visible}>
      <h3>{props.correct ? "Correct!" : "Not Quite!"}</h3>
      {props.clues.map((a, b) => {
        return <p key={b}>{a.reduce((x, y) => x + y)}</p>;
      })}
      <p className="word">{props.word}</p>

      <CopyToClipboard text={props.text} onCopy={props.toggleCopied}>
        <button>
          {props.copied ? "Results copied!" : "Copy to Clipboard"}
        </button>
      </CopyToClipboard>
      <button onClick={props.close}>Close</button>
    </StyledModal>
  );
}

export default Modal;
