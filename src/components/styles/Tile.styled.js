import styled, { keyframes } from "styled-components";

const animateColor = (c) => keyframes`
    0% {
      background-color: transparent;
    }

    100% {
      background-color: ${
        c === "🟩"
          ? "rgba(63, 191, 63, .7)"
          : c === "🟨"
          ? "rgba(228, 228, 31, .7)"
          : c === "⬜"
          ? "#474747b3"
          : "transparent"
      };
    }
`;

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
      ? "rgba(63, 191, 63, .7)"
      : props.clue === "🟨"
      ? "rgba(228, 228, 31, .7)"
      : props.clue === "⬜"
      ? "#474747b3"
      : "transparent"};

  animation: ${(props) => animateColor(props.clue)} 1s;
`;
