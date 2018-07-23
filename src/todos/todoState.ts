export interface Todo {
    readonly task: string;
    readonly isCompleted: boolean;
    readonly id: string;
}

export type TodoState = ILoadedTodoState | ILoadingTodoState;

export interface ILoadedTodoState {
    readonly todos: Todo[];
    readonly isLoading: false;
    readonly hasProgress: boolean;
}

export interface ILoadingTodoState {
    readonly isLoading: true;
}

export const initialTodoState: TodoState = {
    isLoading: true
};