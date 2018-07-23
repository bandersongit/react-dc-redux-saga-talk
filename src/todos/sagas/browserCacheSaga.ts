import { takeLatest, put, select } from "redux-saga/effects";
import { loadTodosFromCache } from "@App/todos/todoActions";
import { State } from "@App/store/appState";
import { Todo } from "@App/todos/todoState";

export function* browserCacheSaga() {
    yield loadTodosFromStorage();
    yield takeLatest("*", storeTodos);
}

export function* storeTodos() {
    const state: State = yield select();
    if (state.todos.isLoading) {
        return;
    }

    localStorage.setItem("todos", JSON.stringify(state.todos.todos));
}

export function* loadTodosFromStorage() {
    const todosString = localStorage.getItem("todos");
    const todos: Todo[] = todosString ? JSON.parse(todosString) : [];

    yield put(loadTodosFromCache({ todos }));
}