import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';
// import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import App from './components/App';

const history = createHistory();
const store = configureStore(history);
// const theme = createMuiTheme();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      {/* <MuiThemeProvider theme={theme}> */}
        <App history={history}/>
      {/* </MuiThemeProvider> */}
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();