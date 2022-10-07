import React from "react";
import ClickCounter from "./components/ClickCounter";
import Counter from "./components/Counter";
import HoverCounter from "./components/HoverCounter";

function App() {
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
			<Counter
				render={(counter, incrementCount) => (
					<HoverCounter
						count={counter}
						incrementCount={incrementCount}
					/>
				)}
			/>
		</div>
	);
}

export default App;
