import { all } from 'redux-saga/effects';
import { fetchTodos } from '@App/todos/sagas/fetchTodosSaga';
import { createTodoSaga } from '@App/todos/sagas/createTodoSaga';

export function* todoSaga() {
    yield all([
        fetchTodos(),
        createTodoSaga()
    ]);
}