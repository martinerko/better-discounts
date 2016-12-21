import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

import routes from './routes';
import createStore from './store';
const store = createStore();

const router = (
<Provider store={store}>
	<Router history={browserHistory} routes={routes} />
</Provider>
);

render(router, document.getElementById('root'));
