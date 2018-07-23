import { expectSaga } from 'redux-saga-test-plan';
import { progressSaga } from '@App/todos/sagas/progressSaga';
import { loadTodos, toggleCompletion, hasProgress, showProgress } from '@App/todos/todoActions';
import { Todo, ILoadedTodoState } from '@App/todos/todoState';
import { initialState, State } from '@App/store/appState';
import { rootReducer } from '@App/store/rootReducer';
jest.mock('@App/todos/sagas/notifyUser', () => ({
    notifyUser: jest.fn()
}));
import { notifyUser } from '@App/todos/sagas/notifyUser';

describe('progress saga', () => {
    afterEach((notifyUser as any).mockReset);

    const testBuilder = () => expectSaga(progressSaga)
            .withState(initialState)
            .withReducer(rootReducer);

    test("should indicate progress when an incomplete server todo is completed", async () => {
        const initialTodoId = "1";
        const initialTodos: Todo[] = [
            { task: "do something", isCompleted: false, id: initialTodoId }
        ];
        
        let runResult = await testBuilder()
            .dispatch(loadTodos({todos: initialTodos}))
            .dispatch(toggleCompletion({id: initialTodoId}))
            .put(hasProgress({hasProgress: true}))
            .silentRun();

        let todoState = (runResult.storeState as State)
            .todos as ILoadedTodoState;

        expect(todoState.hasProgress).toBe(true);
    });

    test("should indiciate no progress when a completed server todo is uncompleted", async () => {
        const initialTodoId = "1";
        const initialTodos: Todo[] = [
            { task: "do something", isCompleted: true, id: initialTodoId }
        ];
        
        let runResult = await testBuilder()
            .dispatch(loadTodos({todos: initialTodos}))
            .dispatch(toggleCompletion({id: initialTodoId}))
            .silentRun();
        
        let todoState = (runResult.storeState as State)
            .todos as ILoadedTodoState;

        expect(todoState.hasProgress).toBe(false);
    });

    test("load todos, complete server todos, show progress should notify user", async () => {
        const initialTodoId = "1";
        const initialTodos: Todo[] = [
            { task: "do something", isCompleted: false, id: initialTodoId }
        ];

        await testBuilder()
            .dispatch(loadTodos({todos: initialTodos}))
            .dispatch(toggleCompletion({id: initialTodoId}))
            .dispatch(showProgress())
            .silentRun();

        expect(notifyUser).toBeCalled();
    }),

    test("no progress should not call notifyUser", async () => {
        const initialTodoId = "1";
        const initialTodos: Todo[] = [
            { task: "do something", isCompleted: false, id: initialTodoId }
        ];

        await testBuilder()
            .dispatch(loadTodos({todos: initialTodos}))
            .dispatch(showProgress())
            .silentRun();

        expect(notifyUser).not.toBeCalled();
    });

    test("multiple showProgress calls should be respected", async () => {
        const initialTodoId = "1";
        const initialTodos: Todo[] = [
            { task: "do something", isCompleted: false, id: initialTodoId }
        ];

        await testBuilder()
            .dispatch(loadTodos({todos: initialTodos}))
            .dispatch(toggleCompletion({id: initialTodoId}))
            .dispatch(showProgress())
            .dispatch(showProgress())
            .dispatch(showProgress())
            .silentRun();

        expect(notifyUser).toHaveBeenCalledTimes(3);
    });
});