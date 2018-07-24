import { put, call } from 'redux-saga/effects';
import { loadTodosFromServer } from '@App/todos/todoActions';
import { loadServerTodos } from '@App/todos/serverApi/loadServerTodos';

export function* fetchTodos() {
    const todos = yield call(loadServerTodos);
    yield put(loadTodosFromServer({todos}));
}
