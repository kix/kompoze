import React from 'react';
import {Product, ProductCollection} from './models/product';


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