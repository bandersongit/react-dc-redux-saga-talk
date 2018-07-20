import { runSaga } from "redux-saga";
import { AppActionType } from "@App/store/actions";
import { createTodo, TodoActions } from "@App/todos/todoActions";
import { requestTodo, createTodoSaga } from "@App/todos/sagas/createTodoSaga";
import { expectSaga } from 'redux-saga-test-plan';

describe("create todo saga", () => {
    test("should dispatch an add todo action with the task from the input create todo action", async () => {
        const task = "write tests";
        const actions: AppActionType[] = [];

        await runSaga({
            getState: () => ({}),
            dispatch: (a: AppActionType) => {
                actions.push(a);
             }
        }, requestTodo, createTodo({task})).done;

        expect(actions.some(a => a.type === TodoActions.ADD_TODO && a.payload.todo.task === task)).toBeTruthy();
    });

    // todo fix test
    test("should dispatch an add todo action with the task from a dispatched create todo action", async (done) => {
        const task = "demonstrate redux-saga-test-plan";
        
        await expectSaga(createTodoSaga)
            .dispatch(createTodo({task}))
            .put.like({ action: { type: TodoActions.ADD_TODO} })
            .silentRun();
    });
});