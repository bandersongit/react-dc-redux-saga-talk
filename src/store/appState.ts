import { TodoState, initialTodoState } from "@App/store/todos/todoState";

export type State = {
    readonly todos: TodoState;
};

export const initialState: State = {
    todos: initialTodoState
};