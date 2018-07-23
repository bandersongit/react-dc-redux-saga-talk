import { all } from 'redux-saga/effects';
import { fetchTodos } from '@App/todos/sagas/fetchTodosSaga';
import { createTodoSaga } from '@App/todos/sagas/createTodoSaga';
import { progressSaga } from '@App/todos/sagas/progressSaga';

export function* todoSaga() {
    yield all([
        fetchTodos(),
        createTodoSaga(),
        progressSaga()
    ]);
}