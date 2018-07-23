import { ILoadedTodoState, Todo } from "@App/todos/todoState";
import { ITodoRepository } from "@App/todos/todoRepository";
import { TodoReducer } from "@App/todos/abstractTodoReducer";

export class LoadedTodoProvider extends TodoReducer implements ILoadedTodoState, ITodoRepository {
    public state: ILoadedTodoState;
    public progress: Todo[];
    public todos: Todo[];
    public isLoading: false;
    constructor(state: ILoadedTodoState) {
        super();
        this.todos = state.todos;
        this.progress = state.progress;
    }
    readTodos(): Todo[] {
        return this.todos;
    }
    readProgress(): Todo[] {
        return this.progress;
    }
    updateProgress = (progress: Todo[]) => {
        return new LoadedTodoProvider({
            todos: this.todos,
            progress,
            isLoading: false
        });
    }
    loadTodos = () => {
        throw "cannot load todos multiple times";
    }
    toggleCompletion = (id: string) => {
        const todos = this.todos.map(t => t.id === id
            ? {...t, isCompleted: !t.isCompleted}
            : t);
        return new LoadedTodoProvider({
            progress: this.progress,
            todos,
            isLoading: false
        });
    }
    addTodo = (todo: Todo) => {
        return new LoadedTodoProvider({
            progress: this.progress,
            todos: this.todos.concat(todo),
            isLoading: false
        });
    }
    removeTodo = (id: string) => {
        return new LoadedTodoProvider({
            progress: this.progress,
            todos: this.todos.filter(t => t.id !== id),
            isLoading: false
        });
    }
}
