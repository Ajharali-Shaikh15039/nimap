import { createStore } from "redux";
import loginReducer from "./reducer";

function configureStore(state = { rotating: true }) {
  return createStore(loginReducer,state);
}

export default configureStore;