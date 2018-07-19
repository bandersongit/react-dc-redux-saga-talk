import { put, call } from 'redux-saga/effects';
import { loadTodos } from '@App/todos/todoActions';
import { uniqueId } from 'lodash';
import { delay } from 'redux-saga';

export function* fetchTodos() {
    yield call(delay, 100);
    yield put(loadTodos({
        todos: [
            { task: "write app", isCompleted: false, id: uniqueId() },
            { task: "do some styles", isCompleted: false, id: uniqueId() },
        ]
    }));
}