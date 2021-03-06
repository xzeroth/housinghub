// redux utils
import { combineReducers, createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";

import property from "./property";
import appState from "./appState";
import login from "./login";
import user from "./user";

const reducer = combineReducers({
  appState,
  property,
  login,
  user
});

const logger = createLogger({
  collapsed: true,
  diff: true
});

const store = createStore(reducer, applyMiddleware(logger));

export default store;
