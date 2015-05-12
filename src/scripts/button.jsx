'use strict';

import React from 'react';

export default class MyButton extends React.Component {
  render() {
    return (
    	<button>Hello {this.props.username}</button>
	);
  }
}