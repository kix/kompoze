import React from 'react';

export default class Product extends React.Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        console.log('Clicked', this.props.model);
    }   
    render() {
        return (
            <button className="product" data-id={this.props.model.get('id')} onClick={this.handleClick}>
                {this.props.model.get('title')}
            </button>
        );
    }
}