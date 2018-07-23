import { makePayloadActionCreator, makeSimpleActionCreator } from '@App/store/actionTypeHelpers';
import { Todo } from '@App/todos/todoState';

export enum TodoActions {
    LOAD_TODOS = "LOAD_TODOS",
    ADD_TODO = "ADD_TODO",
    CREATE_TODO = "CREATE_TODO",
    REMOVE_TODO = "REMOVE_TODO",
    TOGGLE_COMPLETION = "TOGGLE_COMPLETION",
    SHOW_PROGRESS = "SHOW_PROGRESS",
    HAS_PROGRESS = "HAS_PROGRESS"
}

export const loadTodos = makePayloadActionCreator<TodoActions.LOAD_TODOS, { todos: Todo[] }>(TodoActions.LOAD_TODOS);
export const createTodo = makePayloadActionCreator<TodoActions.CREATE_TODO, { task: string }>(TodoActions.CREATE_TODO);
export const addTodo = makePayloadActionCreator<TodoActions.ADD_TODO, { todo: Todo}>(TodoActions.ADD_TODO);
export const removeTodo = makePayloadActionCreator<TodoActions.REMOVE_TODO, { id: string }>(TodoActions.REMOVE_TODO);
export const toggleCompletion = makePayloadActionCreator<TodoActions.TOGGLE_COMPLETION, { id: string }>(TodoActions.TOGGLE_COMPLETION);
export const showProgress = makeSimpleActionCreator<TodoActions.SHOW_PROGRESS>(TodoActions.SHOW_PROGRESS);
export const hasProgress = makePayloadActionCreator<TodoActions.HAS_PROGRESS, { hasProgress: boolean}>(TodoActions.HAS_PROGRESS);