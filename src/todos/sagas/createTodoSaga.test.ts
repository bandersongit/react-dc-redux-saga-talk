import { runSaga } from "redux-saga";
import { AppActionType } from "@App/store/actions";
import { createTodo, TodoActions } from "@App/todos/todoActions";
import { requestTodo } from "@App/todos/sagas/createTodoSaga";

describe("create todo saga", () => {
    test("should dispatch an add todo action with the task from the input action when it receives a create todo action", async () => {
        const task = "write tests";
        const actions: AppActionType[] = []

        await runSaga({
            getState: () => ({}),
            dispatch: (a: AppActionType) => {
                actions.push(a);
             }
        }, requestTodo, createTodo({task})).done;

        expect(actions.some(a => a.type === TodoActions.ADD_TODO && a.payload.todo.task === task)).toBeTruthy();
    });
})