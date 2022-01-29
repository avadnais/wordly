import styled from "styled-components";

export const StyledTile = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  line-height: 0rem;
  border: 2px solid rgb(63, 63, 63);
  vertical-align: middle;
  margin: auto;
  text-align: center;

  height: min(4rem, 20vw);
  width: min(4rem, 20vw);
  max-height: min(4rem, 20vw);
  max-width: min(4rem, 20vw);
  text-transform: uppercase;
  

  background-color: ${(props) =>
    props.clue === "🟩"
      ? "rgba(63, 191, 63, .5)"
      : props.clue === "🟨"
      ? "rgba(228, 228, 31, .5)"
      : "transparent"};
`;
