import { ILoadedTodoState, Todo, TodoState } from "@App/todos/todoState";
import { ITodoRepository } from "@App/todos/todoRepository";
import { TodoReducer } from "@App/todos/abstractTodoReducer";

export class LoadedTodoProvider extends TodoReducer implements ITodoRepository {
    public readonly state: ILoadedTodoState;

    constructor (state: ILoadedTodoState) {
        super();
        this.state = state;
    }

    readTodos(): Todo[] {
        return this.state.todos;
    }

    getHasProgress = () => this.state.hasProgress;

    updateProgress = (hasProgress: boolean) => {
        return new LoadedTodoProvider({ ...this.state, hasProgress }).state;
    }

    loadTodos: (todos: Todo[]) => TodoState = (todos) => {
        return new LoadedTodoProvider({ ...this.state, todos }).state;
    }

    toggleCompletion = (id: string) => {
        const todos = this.state.todos.map(t => t.id === id
            ? {...t, isCompleted: !t.isCompleted}
            : t);
        return new LoadedTodoProvider({ ...this.state, todos }).state;
    }

    addTodo = (todo: Todo) => {
        const todos = this.state.todos.concat(todo);
        return new LoadedTodoProvider({ ...this.state, todos }).state;
    }

    removeTodo = (id: string) => {
        const todos = this.state.todos.filter(t => t.id !== id);

        return new LoadedTodoProvider({ ...this.state, todos }).state;
    }
}
