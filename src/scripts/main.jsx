import React from 'react';
import MyButton from './button';

requirejs.config({
	baseUrl: '/js',
	paths: {
    	es6: '/js/es6',
    	react: '/js/react'
	}
});

class App extends React.Component {
  	render() {
		return (
			<div>
				Hello world
				<Button userName="kix"></Button>
			</div>
		);
	}	  
}

React.render(<App/>, document.getElementById('app'));