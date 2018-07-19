import { all } from 'redux-saga/effects';
import { fetchTodos } from '@App/todos/sagas/fetchTodosSaga';

export function* todoSaga() {
    yield all([
        fetchTodos()
    ]);
}