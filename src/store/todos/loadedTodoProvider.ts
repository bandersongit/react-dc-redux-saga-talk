import { ITodoReducer } from "@App/store/todos/todoReducer";
import { ILoadedTodoState, Todo } from "@App/store/todos/todoState";
import { uniqueId } from 'lodash';

export class LoadedTodoProvider implements ITodoReducer, ILoadedTodoState {
    public todos: Todo[];
    public isLoading: false;
    constructor(todos: Todo[]) {
        this.todos = todos;
    }
    loadTodos = () => {
        throw "cannot load todos multiple times";
    }
    addTodo = (task: string) => {
        let newTodo: Todo = {
            isCompleted: false,
            id: uniqueId(),
            task
        };
        return new LoadedTodoProvider(this.todos.concat(newTodo));
    }
    removeTodo = (id: string) => {
        return new LoadedTodoProvider(this.todos.filter(t => t.id !== id));
    }
}
