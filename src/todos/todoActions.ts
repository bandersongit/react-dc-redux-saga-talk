import { makePayloadActionCreator } from '@App/store/actionTypeHelpers';
import { Todo } from '@App/todos/todoState';

export enum TodoActions {
    LOAD_TODOS = "LOAD_TODOS",
    ADD_TODO = "ADD_TODO",
    REMOVE_TODO = "REMOVE_TODO"
}

export const loadTodos = makePayloadActionCreator<TodoActions.LOAD_TODOS, { todos: Todo[] }>(TodoActions.LOAD_TODOS);
export const addTodo = makePayloadActionCreator<TodoActions.ADD_TODO, { task: string }>(TodoActions.ADD_TODO);
export const removeTodo = makePayloadActionCreator<TodoActions.REMOVE_TODO, { id: string }>(TodoActions.REMOVE_TODO);