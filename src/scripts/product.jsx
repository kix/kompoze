import React from 'react';

export default class Product extends React.Component {
    render() {
      return (
        <div className="product" data-id={this.props.model.get('id')}>
            <h2 className="product_title">{this.props.model.get('title')}</h2>
          </div>
      );
    }
}