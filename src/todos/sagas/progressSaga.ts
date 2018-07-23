import { TodoActions, loadTodos, hasProgress } from "@App/todos/todoActions";
import { take, select, takeLatest, put, call, takeEvery } from "redux-saga/effects";
import { Todo } from "@App/todos/todoState";
import { State } from "@App/store/appState";
import { getTodoRepository } from "@App/todos/getTodoRepository";
import { difference } from "lodash";
import { ITodoRepository } from "@App/todos/todoRepository";
import { notifyUser } from "@App/todos/sagas/notifyUser";

export function* progressSaga() {
    const initialTodos: ReturnType<typeof loadTodos> = yield take(TodoActions.LOAD_TODOS);
    
    yield takeLatest(TodoActions.TOGGLE_COMPLETION, updateProgressSaga, initialTodos.payload.todos);
}

function* updateProgressSaga(initialTodos: Todo[]) {
    const todoRepository: ITodoRepository = yield select<State>(getTodoRepository);
    const progress = computeProgress(initialTodos, todoRepository.readTodos());
    const hasMadeProgress = progress.length > 0;

    if (hasMadeProgress !== todoRepository.getHasProgress()) {
        yield put(hasProgress({hasProgress: hasMadeProgress}));
    }

    yield* showProgresSaga(progress);
}

function* showProgresSaga(progress: Todo[]) {
    if (progress.length === 0) {
        return;
    }

    const message = `Since you got here, you have completed the following tasks:\n${progress.map(t => t.task).join("\n")}`;
    yield takeEvery(TodoActions.SHOW_PROGRESS, notifySaga, message);
}

function* notifySaga(message: string) {
    yield call(notifyUser, message);
}

// we define progress to be the set of todos that have been completed since we loaded the initial todos from the server
function computeProgress(initialTodos: Todo[], todos: Todo[]) {
    return difference(todos, initialTodos)
        .filter(todo => todo.isCompleted);
}