import { applyMiddleware, compose, createStore, GenericStoreEnhancer } from 'redux';
import createSagaMiddleware from 'redux-saga';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: () => undefined;
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: (arg: GenericStoreEnhancer) => undefined;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState?: object) {
  const store = createStore(
    s => s,
    {},
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
