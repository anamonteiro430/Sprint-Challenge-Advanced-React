import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import PlayerList from './components/PlayerList';
import Navbar from './components/Nav';
import Form from './components/Form';

export default class App extends Component {
	state = {
		players: []
	};

	componentDidMount() {
		axios
			.get('http://localhost:5000/api/players')
			.then(res => {
				this.setState({
					players: res.data
				});
				console.log(res.data);
			})
			.catch(err => console.log(err));
	}

	componentDidUpdate(prevProps, prevState) {
		console.log('updating');
	}

	render() {
		return (
			<div>
				<Navbar />
				<Form />

				<PlayerList players={this.state.players} />
			</div>
		);
	}
}
