import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import setAuthorizationToken from './utils/auth';

import routes from './routes';
import createStore from './store';

// set authorization header so it will be send with every request
setAuthorizationToken(localStorage.jwtToken);

const store = createStore();
const history = syncHistoryWithStore(browserHistory, store);

const router = (
<Provider store={store}>
	<Router history={history} routes={routes} />
</Provider>
);

render(router, document.getElementById('wrapper'));
