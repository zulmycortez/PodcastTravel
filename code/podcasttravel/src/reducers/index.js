import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import SearchReducer from "./reducer-search.js";

const rootReducer = combineReducers({
  search: SearchReducer,
  form: formReducer
});

export default rootReducer;
