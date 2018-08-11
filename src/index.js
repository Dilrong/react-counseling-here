import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

if(!window.Promise){
    window.Promise = Promise
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
