import React, { Component } from "react";
import TempInput from "./TempInput";
import BoilingVerdict from "./BoilingVerdict";
import { convert, toCelsius, toFahrenheit } from "../lib/converter";

class Calculate extends Component {
	state = {
		temperature: "",
		scale: "c",
	};
	handleChange = (e, scale) => {
		this.setState({
			temperature: e.target.value,
			scale,
		});
	};
	render() {
		const { temperature, scale } = this.state;
		const celsius =
			scale === "f" ? convert(temperature, toCelsius) : temperature;
		const fahrenheit =
			scale === "c" ? convert(temperature, toFahrenheit) : temperature;
		return (
			<>
				<TempInput
					scale="c"
					temperature={celsius}
					onTemperatureChange={this.handleChange}
				/>
				<TempInput
					scale="f"
					temperature={fahrenheit}
					onTemperatureChange={this.handleChange}
				/>
				<BoilingVerdict celsius={parseFloat(temperature)} />
			</>
		);
	}
}

export default Calculate;
