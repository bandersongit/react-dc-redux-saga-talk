import { TodoActions, loadTodos, updateProgress } from "@App/todos/todoActions";
import { take, select, put, takeLatest } from "redux-saga/effects";
import { Todo } from "@App/todos/todoState";
import { State } from "@App/store/appState";
import { getTodoRepository } from "@App/todos/getTodoRepository";
import { difference, isEqual } from "lodash";
import { ITodoRepository } from "@App/todos/todoRepository";

export function* progressSaga() {
    const initialTodos: ReturnType<typeof loadTodos> = yield take(TodoActions.LOAD_TODOS);
    
    yield takeLatest('*', updateProgressSaga, initialTodos.payload.todos);
}

export function* updateProgressSaga(initialTodos: Todo[]) {
    const todoRepository: ITodoRepository = yield select<State>(getTodoRepository);
    const previousProgress = todoRepository.readProgress();
    const progress = computeProgress(initialTodos, todoRepository.readTodos());
    if (!isEqual(progress, previousProgress)) {
        yield put(updateProgress({progress}));
    }
}

// we define progress to be the set of todos that have been completed since we loaded the initial todos from the server
function computeProgress(initialTodos: Todo[], todos: Todo[]) {
    return difference(todos, initialTodos)
        .filter(todo => todo.isCompleted);
}