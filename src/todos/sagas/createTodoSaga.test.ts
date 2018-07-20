import { runSaga } from "redux-saga";
import { AppActionType } from "@App/store/actions";
import { createTodo, TodoActions, addTodo } from "@App/todos/todoActions";
import { requestTodo, createTodoSaga } from "@App/todos/sagas/createTodoSaga";
import { expectSaga } from 'redux-saga-test-plan';
import { Todo } from "@App/todos/todoState";
jest.mock('../serverApi/createServerTodo', () => {
    let increment = 0;
    return {
        createServerTodo: (task: string) => new Promise<Todo>(res => res({task, isCompleted: false, id: `someId${increment++}`}))
    };
});

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

    test("should dispatch an add todo action with the task from a dispatched create todo action", async () => {
        const task = "demonstrate redux-saga-test-plan";
        
        await expectSaga(createTodoSaga)
            .dispatch(createTodo({task}))
            .put.like({ action: addTodo({todo: {task, isCompleted: false} as Todo}) })
            .silentRun();
    });
});