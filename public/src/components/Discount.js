import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class App extends Component {
  static propTypes = {
    detail: PropTypes.object.isRequired
  };

  render() {
    const { percentage, manufacturer, name, price, code, thumbnail } = this.props.detail;

    return (
      <figure className="grid-figure">
				<div className="grid-discount-wrap">
					<Link to={`/discount/${code}`}>
						<img src={thumbnail} alt={`${manufacturer} - ${name}`} className="grid-discount" />
					</Link>
				</div>
				<figurecaption>
					<p>{ name }</p>
					<small>{ manufacturer }</small>
				</figurecaption>
			</figure>);
  }
}
