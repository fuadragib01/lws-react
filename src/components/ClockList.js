import React from "react";
import Clock from "./Clock";

const ClockList = ({ quantities = [] }) => {
	return (
		<div>
			{quantities.map(() => (
				<Clock key={Math.random()} />
			))}
		</div>
	);
};

export default ClockList;
