import { loadTodos, TodoActions } from "@App/todos/todoActions";
import { take, all, put } from "redux-saga/effects";

export function* loadTodoSaga() {
    const { server, cache } = yield all({
        server: take(TodoActions.LOAD_TODOS_FROM_SERVER),
        cache: take(TodoActions.LOAD_TODOS_FROM_CACHE)
    });

    const initialTodos = cache.payload.todos.length > 0
        ? cache.payload.todos
        : server.payload.todos;

    yield put(loadTodos({todos: initialTodos}));
}