import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from '@App/registerServiceWorker';
import '@App/index.css';
import configureStore from '@App/store';
import { Provider } from 'react-redux';
import App from '@App/components/app/App';
import { gatekeeper } from '@App/generatorDemos/gatekeeperGenerator';
import { positiveInts } from '@App/generatorDemos/positiveIntsGenerator';

declare global {
  interface Window {
    gatekeeper: any;
    positiveInts: any;
  }
}

window.gatekeeper = gatekeeper;
window.positiveInts = positiveInts;

let store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
