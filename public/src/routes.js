import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './pages/App';
import Home from './pages/Home';
import Account from './pages/Account';
import DiscountsByCategory from './pages/DiscountsByCategory';

export default (
<Route path="/" component={App}>
	<IndexRoute component={Home} />
	<Route path="/account" component={Account} />
	<Route path="/account/:userID" component={Account} />
	<Route path="/category/:level1" component={DiscountsByCategory} />
	<Route path="/category/:level1/:level2" component={DiscountsByCategory} />
	<Route path="/category/:level1/:level2/:level3" component={DiscountsByCategory} />
</Route>
);
