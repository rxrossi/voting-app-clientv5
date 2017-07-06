import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';

class App extends Component {
  render() {
    return (
			<Router>
				<div>
					<NavLink exact to="/">Home</NavLink>
					<NavLink to="/login">Login</NavLink>

					<Route exact path="/" component={Home} />
					<Route path="/Login" component={Login} />
				</div>
			</Router>
		);
	}
}

export default App;
