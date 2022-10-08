import React from "react";

const HoverCounter = (props) => {
	const { count, incrementCount, theme } = props;
	const style =
		theme === "dark" ? { backgroundColor: "#000", color: "#fff" } : null;
	return (
		<div>
			<h1 onMouseOver={incrementCount} style={style}>
				Hovered {count} Times
			</h1>
		</div>
	);
};

export default HoverCounter;
