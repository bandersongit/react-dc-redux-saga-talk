import { ILoadedTodoState, Todo, TodoState } from "@App/todos/todoState";
import { ITodoRepository } from "@App/todos/todoRepository";
import { TodoReducer } from "@App/todos/abstractTodoReducer";

export class LoadedTodoProvider extends TodoReducer implements ILoadedTodoState, ITodoRepository {
    public progress: Todo[];
    public todos: Todo[];
    public hasProgress: boolean;
    public isLoading: false;
    constructor(state: ILoadedTodoState) {
        super();
        this.todos = state.todos;
        this.hasProgress = state.hasProgress;
    }
    updateProgress = (hasProgress: boolean) => {
        return new LoadedTodoProvider({
            todos: this.todos,
            hasProgress,
            isLoading: false
        });
    }
    readTodos(): Todo[] {
        return this.todos;
    }
    loadTodos: (todos: Todo[]) => TodoState = (todos) => {
        return new LoadedTodoProvider({
            todos: todos,
            hasProgress: false,
            isLoading: false
        });
    }
    getHasProgress = () => this.hasProgress;
    toggleCompletion = (id: string) => {
        const todos = this.todos.map(t => t.id === id
            ? {...t, isCompleted: !t.isCompleted}
            : t);
        return new LoadedTodoProvider({
            todos,
            hasProgress: this.hasProgress,
            isLoading: false
        });
    }
    addTodo = (todo: Todo) => {
        return new LoadedTodoProvider({
            todos: this.todos.concat(todo),
            hasProgress: this.hasProgress,
            isLoading: false
        });
    }
    removeTodo = (id: string) => {
        return new LoadedTodoProvider({
            todos: this.todos.filter(t => t.id !== id),
            hasProgress: this.hasProgress,
            isLoading: false
        });
    }
}
