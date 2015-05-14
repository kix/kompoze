import React from 'react';
import Backbone from 'backbone';
import Product from './product';

export default class ProductList extends React.Component {
    render() {
        this.props.collection = new Backbone.Collection();
        this.props.collection.url = this.props.url;
        this.props.collection.fetch({async: false});
        var items = [];
        this.props.collection.models.forEach(function(model) {
            items.push(<Product model={model} />);
        });

        return (
            <div className="product_list">
                {items}
            </div>
        );
    }
}