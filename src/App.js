import Game from "./components/Game";
import { StyledApp } from "./components/styles/App.styled";
import ReactGA from 'react-ga';
import GlobalStyles from "./components/styles/Global";

function App(props) {

  const TRACKING_ID = "UA-86816534-2";
  ReactGA.initialize(TRACKING_ID);
  ReactGA.pageview(window.location.pathname + window.location.search);

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
