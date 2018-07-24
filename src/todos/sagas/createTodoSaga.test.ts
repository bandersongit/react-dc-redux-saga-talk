import { runSaga } from "redux-saga";
import { AppActionType } from "@App/store/actions";
import { createTodo, TodoActions, addTodo } from "@App/todos/todoActions";
import { requestTodo, createTodoSaga } from "@App/todos/sagas/createTodoSaga";
import { expectSaga } from 'redux-saga-test-plan';
import { Todo } from "@App/todos/todoState";
import { createServerTodo } from "@App/todos/serverApi/createServerTodo";
import * as matchers from 'redux-saga-test-plan/matchers';
// mock our "ajax" request
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

        expect(actions.some(a => a.type === TodoActions.ADD_TODO && a.payload.todo.task === task)).toBe(true);
    });
    /* Currently (as of redux-saga v0.16 which this presentation uses), to dispatch actions to a running saga, 
    we need to implement a SagaMonitor, which I would not recommend. Coming in version 1.0.x, we will instead be able
    to specify a channel which we can create by importing channel from redux-saga and initializing it as the below
        import { channel } from 'redux-saga;

        const testChannel = channel();
        const task = runSaga({
            getState: ...
            dispatch: ...
            channel: testchannel
        });
        channel.put(myAction)
        await task.done
        ...

        Until then, redux-saga-test-plan does the nastiness of dealing with monitors for us, and provides a nice API
        around testing sagas
    */
    describe("should dispatch an add todo action with the task from a dispatched create todo action", () => {
        test("partial match", async () => {
            const task = "demonstrate redux-saga-test-plan";
            const expectedPartialTodo = {
                task,
                isCompleted: false
            } as Todo;
            
            await expectSaga(createTodoSaga)
                // to specify state we can call .withState
                // to specify a reducer we can call .withReducer
                .dispatch(createTodo({task}))
                // we can assert that an effect happens at some point during the execution of the saga
                .put.like({ action: addTodo({ todo: expectedPartialTodo }) })
                // redux-saga-test-plan times out by default after 250 ms. Our saga runs in a loop, so we actually
                // expect it to time out, silentRun makes the timeout not be an error condition
                .silentRun();
        });
        test("using .provide() to mock", async () => {
            const task = "demonstrate redux-saga-test-plan";
            const mockTodo: Todo = {
                task: "demonstrate static providers",
                isCompleted: true,
                id: "42"
            };
    
            await expectSaga(createTodoSaga)
                // .provide is a nice utility function redux-saga provides, this could replace the jest.mock call
                // at the top of this file if we didn't have the runSaga example
                .provide([
                    [matchers.call.fn(createServerTodo), mockTodo]
                ])
                .dispatch(createTodo({task}))
                .put(addTodo({todo: mockTodo}))
                .silentRun();
        });

    });
});