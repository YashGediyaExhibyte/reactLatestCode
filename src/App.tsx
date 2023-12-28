import React, { type ReactElement } from "react";
import "./App.css";
import { Routers } from "./routes";
import { Provider } from "react-redux";
import store from "./redux/Store";

function App(): ReactElement {
  return (
    <Provider store={store}>
      <Routers />
    </Provider>
  );
}

export default App;
