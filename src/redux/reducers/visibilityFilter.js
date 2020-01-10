import * as actionTypes from '../actions/actionTypes';
import { VISIBILITY_FILTERS } from "../constants";

const defaultState = VISIBILITY_FILTERS.ALL;

const visibilityFilter = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SET_FILTER: {
      return action.payload.filter;
    }
    default: {
      return state;
    }
  }
};

export default visibilityFilter;