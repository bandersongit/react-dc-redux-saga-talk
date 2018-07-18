import { Todo } from './todo';
import { makePayloadActionCreator } from '@App/store/actionTypeHelpers';

export enum TodoActions {
    LOAD_TODOS = "LOAD_TODOS",
    ADD_TODO = "ADD_TODO",
    REMOVE_TODO = "REMOVE_TODO"
}

export const loadTodos = makePayloadActionCreator<TodoActions.LOAD_TODOS, { todos: Todo[] }>(TodoActions.LOAD_TODOS);
export const addTodo = makePayloadActionCreator<TodoActions.ADD_TODO, { todo: Todo }>(TodoActions.ADD_TODO);
export const removeTodo = makePayloadActionCreator<TodoActions.REMOVE_TODO, { todo: Todo }>(TodoActions.REMOVE_TODO);