import { TodoState, initialTodoState, Todo } from "@App/todos/todoState";
import { AppActionType } from "@App/store/actions";
import { TodoActions } from "@App/todos/todoActions";
import { LoadingTodoProvider } from "@App/todos/loadingTodoProvider";
import { LoadedTodoProvider } from "@App/todos/loadedTodoProvider";

export interface ITodoReducer {
    loadTodos: (todos: Todo[]) => TodoState;
    addTodo: (task: string) => TodoState;
    removeTodo: (id: string) => TodoState;
}

export function todoReducer(state: TodoState = initialTodoState, action: AppActionType) {
    let reducer: ITodoReducer;
    if (state.isLoading) {
        reducer = new LoadingTodoProvider();
    } else {
        reducer = new LoadedTodoProvider(state.todos);
    }
    switch (action.type) {
        case TodoActions.LOAD_TODOS:
           return reducer.loadTodos(action.payload.todos);
        case TodoActions.ADD_TODO:
            return reducer.addTodo(action.payload.task);
        case TodoActions.REMOVE_TODO:
            return reducer.removeTodo(action.payload.id);
        default:
            return state;
    }
}
