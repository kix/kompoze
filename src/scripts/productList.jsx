import React from 'react';
import Backbone from 'backbone';
import Product from './product';

class ProductModel extends Backbone.Model {
    constructor(options) {
        super(options);
    }
    url() {
        return "/api/products/" + this.id + '.json';
    }
}

class ProductCollection extends Backbone.Collection {
    constructor(options) {
        super(options);
        this.model = ProductModel;
        this.url = '/api/products.json';
    }
}

export default class ProductList extends React.Component {
    constructor(props) {
        super(props);
        var collection = new ProductCollection();
        collection.url = this.props.url;
        collection.fetch({async: false});
        this.state = collection;
    }
    render() {
        return (
            <div className="product_list">
                {this.state.models.map(function(model){
                    return (
                        <Product model={model} />
                    );
                })}
            </div>
        );
    }
}