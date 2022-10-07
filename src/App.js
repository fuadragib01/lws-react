import React from "react";
import Text from "./components/composition/Text";
import Emoji from "./components/composition/Emoji";
import Bracket from "./components/composition/Bracket";

function App() {
	return (
		<Emoji>
			{({ addEmoji }) => (
				<Bracket>
					{({ addBracket }) => (
						<Text addEmoji={addEmoji} addBracket={addBracket} />
					)}
				</Bracket>
			)}
		</Emoji>
	);
}

export default App;
