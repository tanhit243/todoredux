import { combineReducers } from 'redux';
import todos from './todos';
import todoList from './todoList';
import visibilityFilter from './visibilityFilter';

const todoApp = combineReducers({ todos, todoList, visibilityFilter });

export default todoApp;