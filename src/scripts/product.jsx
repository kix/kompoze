import React from 'react';
import Backbone from 'backbone';

export default class Product extends React.Component {
    render() {
      this.props.model = new Backbone.Model();
      this.props.model.url = '/api/products/1.json'
      this.props.model.fetch({async: false});
      
      return (
      <div className="product" data-id={this.props.model.id}>
          <h2 className="product_title">{this.props.model.attributes.title}</h2>
        </div>
    );
    }
}