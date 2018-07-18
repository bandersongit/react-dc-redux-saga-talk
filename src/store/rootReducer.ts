import { combineReducers } from 'redux';
import { todoReducer } from '@App/store/todos/todoReducer';

export const rootReducer = combineReducers({
    todos: todoReducer
});