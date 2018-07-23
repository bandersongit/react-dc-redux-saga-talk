import { put, call } from 'redux-saga/effects';
import { loadTodosFromServer } from '@App/todos/todoActions';
import { uniqueId } from 'lodash';
import { delay } from 'redux-saga';

export function* fetchTodos() {
    yield call(delay, 1000);
    yield put(loadTodosFromServer({
        todos: [
            { task: "write app", isCompleted: false, id: uniqueId() },
            { task: "do some styles", isCompleted: false, id: uniqueId() },
        ]
    }));
}