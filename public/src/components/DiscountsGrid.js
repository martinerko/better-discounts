import React, { Component, PropTypes } from 'react';
import Discount from './Discount';

export default class BestDiscounts extends Component {
	static propTypes = {
		loadDiscounts: PropTypes.func,
		data: PropTypes.array,
		loading: PropTypes.bool,
		error: PropTypes.object
	};

	componentWillMount() {
		this.props.loadDiscounts();
	}

	renderDetail() {
		const {loading, error, data} = this.props;
		if (loading) {
			return 'Loading';
		} else if (error) {
			return <div style={{ color: 'red' }}>
											{error.message}
										</div>;
		} else if (data) {
			return data.map((discount, i) => {
				return (
					<div className="col-sm-4 col-lg-4 col-md-4" key={discount.code + '_' + i}>
						<Discount detail={discount} />
					</div>
					);
			});
		} else {
			return (<div>No data</div>);
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
			<div className="row">
				{this.renderDetail()}
			</div>
			);
	}
}
