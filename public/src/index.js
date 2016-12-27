import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import routes from './routes';
import createStore from './store';

const store = createStore();
const history = syncHistoryWithStore(browserHistory, store);

const router = (
<Provider store={store}>
	<Router history={history} routes={routes} />
</Provider>
);

render(router, document.getElementById('wrapper'));
