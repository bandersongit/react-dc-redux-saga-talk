import { runSaga } from "redux-saga";
import { AppActionType } from "@App/store/actions";
import { createTodo, TodoActions, addTodo } from "@App/todos/todoActions";
import { requestTodo, createTodoSaga } from "@App/todos/sagas/createTodoSaga";
import { expectSaga } from 'redux-saga-test-plan';
import { Todo } from "@App/todos/todoState";
import { createServerTodo } from "@App/todos/serverApi/createServerTodo";
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

    describe("should dispatch an add todo action with the task from a dispatched create todo action", () => {
        test("partial match", async () => {
            const task = "demonstrate redux-saga-test-plan";
            const expectedPartialTodo = {
                task,
                isCompleted: false
            } as Todo;
            
            await expectSaga(createTodoSaga)
                .dispatch(createTodo({task}))
                .put.like({ action: addTodo({ todo: expectedPartialTodo }) })
                .silentRun();
        });
        test("using .provide() to mock", async () => {
            const task = "demonstrate redux-saga-test-plan";
            const mockTodoFactory: (task: string) => Todo = (t: string) => ({
                task: t,
                isCompleted: false,
                id: "bacon"
            });
    
            await expectSaga(createTodoSaga)
                .provide({
                    call: (effect, next) => {
                        if (effect.fn === createServerTodo) {
                            const inputTask = effect.args[0];
                            return mockTodoFactory(inputTask);
                        }
    
                        return next();
                    }
                })
                .dispatch(createTodo({task}))
                .put(addTodo({todo: mockTodoFactory(task)}))
                .silentRun();
        });
    });
});