import { takeEvery, call, put } from "redux-saga/effects";
import { TodoActions, addTodo, createTodo } from "@App/todos/todoActions";
import { createServerTodo } from "@App/todos/serverApi/createServerTodo";

export function* createTodoSaga() {
    yield takeEvery(TodoActions.CREATE_TODO, requestTodo);
}

export function* requestTodo(action: ReturnType<typeof createTodo>) {
    const todo = yield call(createServerTodo, action.payload.task);
    yield put(addTodo({ todo }));
}