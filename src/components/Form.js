import React, { Component } from "react";

class Form extends Component {
	state = {
		title: "JavaScript",
		text: "Javascript is awesome",
		library: "react",
		isAwesome: true,
	};
	changeHandler = (e) => {
		if (e.target.type === "text") {
			this.setState({
				title: e.target.value,
			});
		} else if (e.target.type === "textarea") {
			this.setState({
				text: e.target.value,
			});
		} else if (e.target.type === "select-one") {
			this.setState({
				library: e.target.value,
			});
		} else if (e.target.type === "checkbox") {
			this.setState({
				isAwesome: e.target.checked,
			});
		}
	};
	submitHandler = (e) => {
		const { title, text, library, isAwesome } = this.state;
		e.preventDefault();
		console.log(title, text, library, isAwesome);
	};
	render() {
		const { title, text, library, isAwesome } = this.state;
		return (
			<div>
				<form onSubmit={this.submitHandler}>
					<input
						type="text"
						placeholder="Enter title"
						value={title}
						onChange={this.changeHandler}
					/>
					<br />
					<br />
					<textarea
						name="text"
						value={text}
						onChange={this.changeHandler}
					/>
					<br />
					<br />
					<select value={library} onChange={this.changeHandler}>
						<option>Libraries</option>
						<option value="react">React</option>
						<option value="angular">Angular</option>
					</select>
					<br />
					<br />
					<input
						type="checkbox"
						onChange={this.changeHandler}
						checked={isAwesome}
					/>
					<br />
					<br />
					<input type="submit" value="Submit" />
				</form>
			</div>
		);
	}
}

export default Form;
