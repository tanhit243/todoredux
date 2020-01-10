import * as actionTypes from './actionTypes';

let nextTodoId = 0;

export const addTodo = (content) => ({
    type: actionTypes.ADD_TO,
    payload: {
        id: ++nextTodoId,
        content
    }
});

export const toggleTodo = id => ({
    type: actionTypes.TOGGLE_TODO,
    payload: {
        id
    }
})  
