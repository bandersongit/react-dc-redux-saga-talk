import { TodoState, initialTodoState } from "@App/todos/todoState";
import { AppActionType } from "@App/store/actions";
import { TodoActions } from "@App/todos/todoActions";
import { LoadingTodoProvider } from "@App/todos/loadingTodoProvider";
import { LoadedTodoProvider } from "@App/todos/loadedTodoProvider";
import { TodoReducer } from "@App/todos/abstractTodoReducer";

export function todoReducer(state: TodoState = initialTodoState, action: AppActionType) {
    let reducer: TodoReducer;
    if (state.isLoading) {
        reducer = new LoadingTodoProvider();
    } else {
        reducer = new LoadedTodoProvider(state);
    }
    switch (action.type) {
        case TodoActions.LOAD_TODOS:
           return reducer.loadTodos(action.payload.todos);
        case TodoActions.ADD_TODO:
            return reducer.addTodo(action.payload.todo);
        case TodoActions.REMOVE_TODO:
            return reducer.removeTodo(action.payload.id);
        case TodoActions.TOGGLE_COMPLETION:
            return reducer.toggleCompletion(action.payload.id);
        case TodoActions.HAS_PROGRESS:
            return reducer.updateProgress(action.payload.hasProgress);
       default:
            return state;
    }
}
