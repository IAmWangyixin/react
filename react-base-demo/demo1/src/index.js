import React from 'react';
import { render } from 'react-dom';
import Router from './router/router';

import { Provider } from 'react-redux';
import store from './store';

render(
  <Provider store={store}>
    <React.Fragment>
      <Router />
    </React.Fragment>
  </Provider>,
  document.getElementById('root')
);
