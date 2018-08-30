import _ from "lodash";
import { FETCH_SEARCH } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_SEARCH:
      return _.mapKeys(action.payload.data, "id");
    default:
      return state;
  }
}
