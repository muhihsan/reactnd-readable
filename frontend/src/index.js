import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './components/App';
import initialState from './reducers/initialState';
import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore(initialState);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
