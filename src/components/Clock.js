import React from "react";

class Clock extends React.Component {
	state = {
		date: new Date(),
	};

	componentDidMount() {
		this.clockTimer = setInterval(() => this.tick(), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.clockTimer);
	}

	tick() {
		this.setState({
			date: new Date(),
		});
	}

	render() {
		return (
			<h1>
				Hello, {this.props.children}
				{this.state.date.toLocaleTimeString(this.props.locale)}
			</h1>
		);
	}
}

export default Clock;
