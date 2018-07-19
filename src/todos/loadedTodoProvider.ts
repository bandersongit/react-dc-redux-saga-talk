import { ITodoReducer } from "@App/todos/todoReducer";
import { ILoadedTodoState, Todo } from "@App/todos/todoState";

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
    addTodo = (todo: Todo) => {
        return new LoadedTodoProvider(this.todos.concat(todo));
    }
    removeTodo = (id: string) => {
        return new LoadedTodoProvider(this.todos.filter(t => t.id !== id));
    }
}
