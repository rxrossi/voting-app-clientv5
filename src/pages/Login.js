import React from 'react';

class Login extends React.Component {
	state = {
		email: 'mail',
		password: 'pw'
	}

	handleInputChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	onSubmit = () => {
		const { email, password } = this.state;
		this.props.onSubmit(email, password)
	}
	render () {
		return (
			<form onSubmit={this.onSubmit}>
				<input name="email" type="email" onChange={this.handleInputChange}/>
				<input name="password" type="password" onChange={this.handleInputChange}/>
				<button type="submit">Login</button>
			</form>
		);
	}
}

export default Login;
