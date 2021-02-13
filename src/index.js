import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { App } from "../src/App/app.js";
import { store } from "../src/App/store.js";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
