import CategoryTree from './CategoryTree';
import React from 'react';

export default class PersonalizedCategoryTree extends CategoryTree {
  componentWillMount() {
    this.props.loadCategories();
  }

  renderDetail() {
    const { loading, error, categoryTree } = this.props;
    if (loading) {
      return 'Loading personalized tree';
    } else if (error) {
      return <div style={{ color: 'red' }}>{ error.message }</div>;
    } else if (categoryTree) {
      return this.renderCategoryTree();
    } else {
      return (<div>No personalized data</div>);
    }
  }

  renderCategoryTree() {
    const { categoryTree } = this.props;
    return (
      <ul> { categoryTree.map(({ name, seo_token, level, categoryId }) => {
        return <li key={`cat_per_${categoryId}`}>name</li>;
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
