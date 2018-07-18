import { TodoState, initialTodoState } from "@App/store/todos/todoState";
import { AppActionType } from "@App/store/actions";
import { TodoActions } from "@App/store/todos/todoActions";

export function todoReducer(state: TodoState = initialTodoState, action: AppActionType) {
    switch (action.type) {
        case TodoActions.LOAD_TODOS:
            if (!state.isLoading) {
                return {
                    isLoading: false,
                    todos: action.payload.todos
                };
            }
            throw "cannot load todos multiple times";
        default: 
            return state;
    }
}
