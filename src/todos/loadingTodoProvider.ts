import { ILoadingTodoState, Todo, TodoState } from '@App/todos/todoState';
import { LoadedTodoProvider } from '@App/todos/loadedTodoProvider';
import { TodoReducer } from '@App/todos/abstractTodoReducer';

export class LoadingTodoProvider extends TodoReducer implements ILoadingTodoState {
    isLoading: true;
    loadTodos: (todos: Todo[]) => TodoState = (todos) => {
        return new LoadedTodoProvider({
            todos: todos,
            hasProgress: false,
            isLoading: false
        }).state;
    }
}