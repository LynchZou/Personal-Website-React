import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import contactReducer from "../reducers/contactReducer";
import imageBoardReducer from "../reducers/imageBoardReducer";
import sidebarReducer from "../reducers/sidebarReducer";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      contact: contactReducer,
      imageBoard: imageBoardReducer,
      sidebar: sidebarReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};
