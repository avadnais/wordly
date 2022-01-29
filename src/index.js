import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { store } from "./store";

const render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App 
      state={store.getState()}
      dispatch={store.dispatch}
      />
    </React.StrictMode>,
    document.getElementById("root")
  );
};
store.subscribe(render);
render();
