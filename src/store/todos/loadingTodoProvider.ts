import { ITodoReducer } from '@App/store/todos/todoReducer';
import { ILoadingTodoState, Todo, TodoState } from '@App/store/todos/todoState';
import { LoadedTodoProvider } from '@App/store/todos/loadedTodoProvider';

export class LoadingTodoProvider implements ITodoReducer, ILoadingTodoState {
    isLoading: true;
    loadTodos: (todos: Todo[]) => TodoState = (todos) => {
        return new LoadedTodoProvider(todos);
    }
    addTodo: (task: string) => TodoState = () => {
        throw "cannot add todos befoer todos have loaded";
    }
    removeTodo: (id: string) => TodoState = () => {
        throw "cannot remove todos before todos have loaded";
    }
}