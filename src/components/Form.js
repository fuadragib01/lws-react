import React, { Component } from "react";

class Form extends Component {
	state = {
		title: "JavaScript",
	};
	changeHandler = (e) => {
		this.setState({
			title: e.target.value,
		});
	};
	render() {
		const { title } = this.state;
		return (
			<div>
				<form>
					<input
						type="text"
						placeholder="Enter title"
						value={title}
						onChange={this.changeHandler}
					/>
				</form>
			</div>
		);
	}
}

export default Form;
