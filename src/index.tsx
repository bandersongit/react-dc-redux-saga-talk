import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from '@App/registerServiceWorker';
import '@App/index.css';
import configureStore from '@App/store';
import { Provider } from 'react-redux';
import App from '@App/components/app/App';
import { gatekeeper } from '@App/generatorDemos/gatekeeperGenerator';

declare global {
  interface Window {
    gatekeeper: any;
  }
}

window.gatekeeper = gatekeeper;

let store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
