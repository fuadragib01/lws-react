import React from "react";
import Counter from "./Counter";
import HoverCounter from "./HoverCounter";
import ThemeContext from "../contexts/ThemeContext";

const Content = () => {
	return (
		<div>
			<h1>This is a content</h1>
			<Counter
				render={(counter, incrementCount) => {
					return (
						<ThemeContext.Consumer>
							{({ theme }) => (
								<HoverCounter
									count={counter}
									incrementCount={incrementCount}
									theme={theme}
								/>
							)}
						</ThemeContext.Consumer>
					);
				}}
			/>
		</div>
	);
};

export default Content;
