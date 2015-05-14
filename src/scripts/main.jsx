import React from 'react';
import MyButton from './button';
import Product from './product';

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
                <Product id="1"></Product>
                <MyButton username="kix"></MyButton>
            </div>
        );
    }     
}

React.render(<App/>, document.getElementById('app'));