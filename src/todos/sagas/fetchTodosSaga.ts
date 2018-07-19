import { put, call } from 'redux-saga/effects';
import { loadTodos } from '@App/todos/todoActions';

const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

export function* fetchTodos() {
    yield call(delay, 2000);
    yield put(loadTodos({
        todos: [{task: "write app", isCompleted: false, id: "42"}]
    }));
}