import React from 'react';

export default class App extends React.Component {
	render() {
		return (
			<div className="app">{this.props.title}</div>
		)
	}
}