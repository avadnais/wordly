import Game from "./components/Game";
import { StyledApp } from "./components/styles/App.styled";

import GlobalStyles from "./components/styles/Global";

function App(props) {

  const {state, dispatch} = props;

  
  return (
    <StyledApp className="app">
      <GlobalStyles />
      <Game 
      state={state}
      dispatch={dispatch}
      />
    </StyledApp>
  );
}

export default App;
