export interface Todo {
    readonly task: string;
    readonly isCompleted: boolean;
    readonly id: string;
}

export type TodoState = ILoadedTodoState | ILoadingTodoState;

export interface ILoadedTodoState {
    readonly todos: Todo[];
    readonly progress: Todo[];
    readonly isLoading: false;
}

export interface ILoadingTodoState {
    readonly isLoading: true;
}

export const initialTodoState: TodoState = {
    isLoading: true
};