import React from "react";
import Counter from "./Counter";
import HoverCounter from "./HoverCounter";
import ThemeContext from "../contexts/ThemeContext";

class Content extends React.Component {
	componentDidMount() {
		console.log(this.context);
	}
	render() {
		const { theme, switchTheme } = this.context;
		return (
			<div>
				<h1>This is a content</h1>
				<Counter
					render={(counter, incrementCount) => {
						return (
							<HoverCounter
								count={counter}
								incrementCount={incrementCount}
								theme={{ theme }}
								switchTheme={switchTheme}
							/>
						);
					}}
				/>
			</div>
		);
	}
}

export default Content;

Content.contextType = ThemeContext;
