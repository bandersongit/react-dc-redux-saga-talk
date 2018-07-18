import { TodoState, initialTodoState } from "@App/store/todos/todoState";

export type State = {
    todos: TodoState;
};

export const initialState = {
    todos: initialTodoState
};