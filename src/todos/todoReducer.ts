import { TodoState, initialTodoState } from "@App/todos/todoState";
import { AppActionType } from "@App/store/actions";
import { TodoActions } from "@App/todos/todoActions";
import { LoadingTodoProvider } from "@App/todos/loadingTodoProvider";
import { LoadedTodoProvider } from "@App/todos/loadedTodoProvider";
import { TodoReducer } from "@App/todos/abstractTodoReducer";

export function todoReducer(state: TodoState = initialTodoState, action: AppActionType) {
    const reducer = getTodoReducer(state);
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

function getTodoReducer(state: TodoState): TodoReducer {
    if (state.isLoading) {
        return new LoadingTodoProvider();
    } else {
        return new LoadedTodoProvider(state);
    }
}