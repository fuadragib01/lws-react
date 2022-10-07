import React from "react";

const ClickCounter = (props) => {
	const { count, incrementCount } = props;
	return (
		<div>
			<button onClick={incrementCount}>Clicked {count} Times</button>
		</div>
	);
};

export default ClickCounter;
