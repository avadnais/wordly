import React from "react";
import { StyledTile } from "./styles/Tile.styled";

function Tile(props) {

  return (
    <StyledTile clue={props.clue}>
      <p className={props.clue}>{props.letter}</p>
    </StyledTile>
  );
}

export default Tile;
