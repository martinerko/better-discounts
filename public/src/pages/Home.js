import React, { Component } from 'react';
import BestDiscounts from '../containers/BestDiscountsContainer';

export default class Home extends Component {

  render() {
    return (<div>
				<h2>Today's best discounts</h2>
        <BestDiscounts />
				</div>
    );
  }
}
