import { ITodoReducer } from '@App/todos/todoReducer';
import { ILoadingTodoState, Todo, TodoState } from '@App/todos/todoState';
import { LoadedTodoProvider } from '@App/todos/loadedTodoProvider';

export class LoadingTodoProvider implements ITodoReducer, ILoadingTodoState {
    isLoading: true;
    loadTodos: (todos: Todo[]) => TodoState = (todos) => {
        return new LoadedTodoProvider(todos);
    }
    toggleCompletion = () => { 
        throw "cannot toggle completion of todos before todos have loaded!";
    }
    addTodo = () => {
        throw "cannot add todos befoer todos have loaded";
    }
    removeTodo = () => {
        throw "cannot remove todos before todos have loaded";
    }
}