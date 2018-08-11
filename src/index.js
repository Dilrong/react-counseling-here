import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import Promise from 'promise-polyfill';
import registerServiceWorker from './registerServiceWorker';

if(!window.Promise){
    window.Promise = Promise
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
