import { TodoState, initialTodoState } from "@App/todos/todoState";

export type State = {
    readonly todos: TodoState;
};

export const initialState: State = {
    todos: initialTodoState
};