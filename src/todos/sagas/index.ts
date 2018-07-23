import { all } from 'redux-saga/effects';
import { fetchTodos } from '@App/todos/sagas/fetchTodosSaga';
import { createTodoSaga } from '@App/todos/sagas/createTodoSaga';
import { progressSaga } from '@App/todos/sagas/progressSaga';
import { browserCacheSaga } from '@App/todos/sagas/browserCacheSaga';
import { loadTodoSaga } from '@App/todos/sagas/loadTodoSaga';

export function* todoSaga() {
    yield all([
        loadTodoSaga(),
        fetchTodos(),
        createTodoSaga(),
        progressSaga(),
        browserCacheSaga(),
    ]);
}