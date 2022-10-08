import React from "react";
import ClickCounter from "./components/ClickCounter";
import Counter from "./components/Counter";
import Section from "./components/Section";
import ThemeContext from "./contexts/ThemeContext";

class App extends React.Component {
	state = {
		theme: "dark",
	};

	switchTheme = () => {
		this.setState(({ theme }) => {
			if (theme === "dark") {
				return {
					theme: "light",
				};
			}
			return {
				theme: "dark",
			};
		});
	};

	render() {
		const { theme } = this.state;
		return (
			<div>
				<Counter
					render={(counter, incrementCount) => (
						<ClickCounter
							count={counter}
							incrementCount={incrementCount}
						/>
					)}
				/>
				<ThemeContext.Provider
					value={{ theme, switchTheme: this.switchTheme }}
				>
					<Section />
				</ThemeContext.Provider>
			</div>
		);
	}
}

export default App;
