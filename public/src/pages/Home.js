import React, { Component } from 'react';
import HeaderContainer from '../containers/HeaderContainer';
import BestDiscounts from '../containers/BestDiscountsContainer';

export default class Home extends Component {

  render() {
    return (
      <div>
        <HeaderContainer />
        <BestDiscounts />
      </div>
    );
  }
}
