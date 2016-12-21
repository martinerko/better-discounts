import React, { Component, PropTypes } from 'react';
import Discount from './Discount';

export default class App extends Component {
  static propTypes = {
    loadBestDiscounts: PropTypes.func,
    bestDiscounts: PropTypes.array,
    loading: PropTypes.bool,
    error: PropTypes.object
  };

  componentWillMount() {
    this.props.loadBestDiscounts();
  }

  renderDetail() {
    const { loading, error, bestDiscounts } = this.props;
    if (loading) {
      return 'Loading';
    } else if (error) {
      return <div style={{ color: 'red' }}>{ error.message }</div>;
    } else if (bestDiscounts) {
      return bestDiscounts.map((discount, i) => <Discount key={i} detail={discount} />);
    } else {
      return (<div>Unknown bestDiscounts</div>);
    }
  }

	// render() {
	// 	const { post } = this.props;
	//
	// 	return (
	// 		<figure className="grid-figure">
	// 			<div className="grid-discount-wrap">
	// 				<Link to={`/discount/${post.code}`}>
	// 					<img src={post.display_src} alt={post.caption} className="grid-discount" />
	// 				</Link>
	// 			</div>
	// 			<figurecaption>
	// 				<p>{post.caption}</p>
	// 			</figurecaption>
	// 		</figure>);
	// }

  render() {
    return (
      <div>
        {this.renderDetail()}
      </div>
      );
  }
}
