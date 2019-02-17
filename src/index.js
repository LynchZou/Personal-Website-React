import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import appstore from "./store/store";
import { grabComments } from "./actions/contactAction";

const store = appstore();

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById("root"));

const actionCreator = () => dispatch => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 10);
  }).then(() => {
    dispatch(grabComments());
  });
};

store.dispatch(actionCreator()).then(() => {
  ReactDOM.render(app, document.getElementById("root"));
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
