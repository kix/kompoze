import Backbone from 'backbone';

class Product extends Backbone.Model {
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
        this.model = Product;
        this.url = '/api/products.json';
    }
}

export {Product, ProductCollection};