import { Todo } from '@App/store/todos/todo';

interface LoadedTodos {
    todos: Todo[];
    isLoading: false;
}

interface LoadingTodos {
    isLoading: true;
}

export type TodoState = LoadedTodos | LoadingTodos;

export const initialTodoState: LoadingTodos = {
    isLoading: true
};
