import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class CategoryTree extends Component {
  static propTypes = {
    categoryPath : PropTypes.array,
    loadCategories : PropTypes.func.isRequired,
    categoryChildren : PropTypes.array,
    categoryDetail : PropTypes.object,
    loading : PropTypes.bool,
    error : PropTypes.object
  };

  loadData() {
    const {categoryPath, loadCategories} = this.props;
    loadCategories(categoryPath);
  }

  componentWillMount() {
    this.loadData();
  }

  componentDidUpdate(prevProps) {
    // make sure to reload categories when the url has changed
    if (this.props.categoryPath !== prevProps.categoryPath) {
      this.loadData();
    }
  }

  handleCategoryClick(e) {
    e.preventDefault();
  }

  renderDetail() {
    const {loading, error, categoryChildren} = this.props;
    if (loading) {
      return 'Loading category tree';
    } else if (error) {
      return <div style={{
          color : 'red'
        }}>{ error.message }</div>;
    } else if (categoryChildren) {
      return (
        <ul className="nav navbar-nav side-nav">
					{ this.renderBackLink() }
					{ this.renderCategories() }
				</ul>
        );
    } else {
      return (<div>No categories</div>);
    }
  }

  renderBackLink() {
    const {categoryPath, categoryDetail} = this.props;
    if (!categoryDetail) {
      return;
    }
    const {name, categoryId} = categoryDetail;
    const parentCategory = categoryPath.slice(0, -1).join('/');
    return (
      <li key={'cat' + categoryId}>
				<Link to={parentCategory ? `/category/${parentCategory}` : '/'} style={{
        display : 'inline'
      }}>
					<i className="fa fa-fw fa-arrow-left" />
				</Link>
				<b style={{
        color : '#fff'
      }}>{ name }</b>
			</li>
      );
  }

  renderCategories() {
    const {categoryPath, categoryChildren} = this.props;
    const renderLink = categoryPath.length < 2;
    return categoryChildren.map(({name, seoToken, categoryId}) => {
      if (renderLink) {
        const tokens = categoryPath.concat(seoToken);

        return (
          <li key={'cat' + categoryId}>
					<Link to={'/category/' + tokens.join('/')}>
						<i className="fa fa-fw fa-dashboard" />{ name }
					</Link>
				</li>
          );
      } else {
        return (
          <li key={'cat' + categoryId}>
							<i className="fa fa-fw fa-dashboard" />{ name }
					</li>
          );
      }
    });
  }

  render() {
    return (
      <div className="collapse navbar-collapse navbar-ex1-collapse">
				{ this.renderDetail() }
			</div>
      );
  }
}
