export interface Todo {
    task: string;
    isCompleted: boolean;
    id: string;
}

export type TodoState = ILoadedTodoState | ILoadingTodoState;

export interface ILoadedTodoState {
    todos: Todo[];
    isLoading: false;
}

export interface ILoadingTodoState {
    isLoading: true;
}

export const initialTodoState: TodoState = {
    isLoading: true
};