import React from "react";

const HoverCounter = (props) => {
	const { count, incrementCount } = props;
	return (
		<div>
			<h1 onMouseOver={incrementCount}>Hovered {count} Times</h1>
		</div>
	);
};

export default HoverCounter;
