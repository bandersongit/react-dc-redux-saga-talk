import { ITodoReducer } from "@App/todos/todoReducer";
import { ILoadedTodoState, Todo } from "@App/todos/todoState";
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
    toggleCompletion = (id: string) => {
        return new LoadedTodoProvider(this.todos.map(t => t.id === id
            ? {...t, isCompleted: !t.isCompleted}
            : t));
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
