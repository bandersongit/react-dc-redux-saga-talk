import { all } from "redux-saga/effects";
import { todoSaga } from "@App/todos/sagas";

export function* rootSaga() {
    yield all([
        todoSaga()
    ]);
}