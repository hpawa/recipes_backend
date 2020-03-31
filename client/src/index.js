import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import {SosisterApiProvider} from './components/sosister-api-context';
import SosisterApi from './services/sosisterApi';

import store from './store';

const sosisterApi = new SosisterApi();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <SosisterApiProvider value={sosisterApi}>
        <Router>
          <App />
        </Router>
      </SosisterApiProvider>
    </ErrorBoundry>
  </Provider>
  , document.getElementById('root'));
