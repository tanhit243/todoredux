import * as actionTypes from '../actions/actionTypes';

const defaultState = [];
const todoList = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO: {
      const { id } = action.payload;
      return [...state, id];
    }
    default:
      return state;
  }
};

export default todoList;
