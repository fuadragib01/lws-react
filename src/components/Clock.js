import React from "react";
import Button from "./Button";

class Clock extends React.Component {
	state = {
		date: new Date(),
		locale: "bn-BD",
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

	handleClick = (locale) => {
		this.setState({
			locale,
		});
	};

	render() {
		const { date, locale } = this.state;
		return (
			<>
				<h1>{date.toLocaleTimeString(locale)}</h1>
				{locale === "bn-BD" ? (
					<Button
						change={this.handleClick}
						locale="en-US"
						show={false}
						enable
					/>
				) : (
					<Button
						change={this.handleClick}
						locale="bn-BD"
						show
						enable
					/>
				)}
			</>
		);
	}
}

export default Clock;
