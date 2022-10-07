import React from "react";

const scalesName = {
	c: "Celsius",
	f: "Fahrenheit",
};
function TempInput(props) {
	const { scale, temperature, onTemperatureChange } = props;
	return (
		<>
			<fieldset>
				<legend>Enter temperature in {scalesName[scale]}</legend>
				<input
					type="text"
					value={temperature}
					onChange={(e) => onTemperatureChange(e, scale)}
				/>
			</fieldset>
		</>
	);
}

export default TempInput;
