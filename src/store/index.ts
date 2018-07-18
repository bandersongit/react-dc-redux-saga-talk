import { applyMiddleware, compose, createStore, GenericStoreEnhancer } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { State, initialState } from '@App/store/appState';
import { rootReducer } from '@App/store/rootReducer';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: () => undefined;
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: (arg: GenericStoreEnhancer) => undefined;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

export default function configureStore(state: State = initialState) {
  const store = createStore(
    rootReducer,
    state,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );

  sagaMiddleware.run(dummySaga);

  return store;
}

const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

function* dummySaga() {
  console.info("begin saga");
  yield delay(5000);
  console.info("end saga");
}
