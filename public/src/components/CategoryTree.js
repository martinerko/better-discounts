import React, { Component, PropTypes } from 'react';

export default class CategoryTree extends Component {
  static propTypes = {
    loadCategories: PropTypes.func.isRequired,
    categoryTree: PropTypes.array,
    loading: PropTypes.bool,
    error: PropTypes.object
  };

  componentWillMount() {
    this.props.loadCategories();
  }

  renderDetail() {
    const { loading, error, categoryTree } = this.props;
    if (loading) {
      return 'Loading category tree';
    } else if (error) {
      return <div style={{ color: 'red' }}>{ error.message }</div>;
    } else if (categoryTree) {
      return this.renderCategoryTree();
    } else {
      return (<div>No categories</div>);
    }
  }

  renderCategoryTree() {
    const { categoryTree } = this.props;
    return (
      <ul> { categoryTree.map(({ name, seo_token, level, categoryId }) => {
        return <li key={`cat_${categoryId}`}>{name}</li>;
      })}
			</ul>
    );
  }

  render() {
    return (
      <div>
        {this.renderDetail()}
      </div>
    );
  }
}
