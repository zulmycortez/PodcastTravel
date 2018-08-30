import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import SearchReducer from "./search-posts";

const rootReducer = combineReducers({
  search: SearchReducer,
  form: formReducer
});

export default rootReducer;
