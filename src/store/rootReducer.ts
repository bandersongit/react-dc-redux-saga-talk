import { combineReducers } from 'redux';
import { todoReducer } from '@App/todos/todoReducer';

export const rootReducer = combineReducers({
    todos: todoReducer
});