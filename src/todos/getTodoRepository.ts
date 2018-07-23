import { State } from "@App/store/appState";
import { ITodoRepository } from "@App/todos/todoRepository";
import { LoadedTodoProvider } from "@App/todos/loadedTodoProvider";

export function getTodoRepository(state: State): ITodoRepository {
    if (state.todos.isLoading) {
        throw "cannot resolve a todo repository while initial todos are loading";
    }

    return new LoadedTodoProvider(state.todos);
}