import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { createStore } from "redux";
import {
  Provider,
  createStoreHook,
  createDispatchHook,
  createSelectorHook,
} from "react-redux";
import { featureReducer } from "./reducers/featureReducer";

import "bulma/css/bulma.css";
import "./styles.scss";

const MyContext = React.createContext(null);

export const useStore = createStoreHook(MyContext);
export const useDispatch = createDispatchHook(MyContext);
export const useSelector = createSelectorHook(MyContext);

const store = createStore(featureReducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider context={MyContext} store={store}>
    <App />
  </Provider>,
  rootElement
);
