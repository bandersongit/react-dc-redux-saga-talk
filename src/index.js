import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { gatekeeper } from './App/gatekeeper';

window.gatekeeper = gatekeeper;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
