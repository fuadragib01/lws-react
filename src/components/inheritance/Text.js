import Emoji from "./Emoji";

class Text extends Emoji {
	constructor(props) {
		super(props);
	}

	render() {
		const decoratedText = this.addEmoji("I am JS Language", "💜");
		return super.render(decoratedText);
	}
}

export default Text;
