import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import CurrencyComponent from "./CurrencyComponent";
import { Provider } from "react-redux";
import store from './Store';

ReactDOM.render(
  <Provider store={store}>
    <CurrencyComponent />
  </Provider>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
