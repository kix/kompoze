import React from 'react';
import MyButton from './button';
import ProductList from './productList';

requirejs.config({
    baseUrl: '/js',
    paths: {
        es6: '/js/es6',
        react: '/js/react',
        jquery: '/js/jquery'
    }
});

class App extends React.Component {
    render() {
        return (
            <div>
                <ProductList url="/api/products.json"></ProductList>
                <MyButton username="kix"></MyButton>
            </div>
        );
    }     
}

React.render(<App/>, document.getElementById('app'));