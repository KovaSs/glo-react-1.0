import React, {Component} from 'react';
import Spinner from '../Spinner';
import ErrorMessage from '../ErrorMessage';

import GotService from "../../services/service"
import './randomChar.css';

class RandomChar extends Component {

	gotService = new GotService();

	state = {
		char: {},
		loading: true,
		error: false
	}

	componentDidMount() {
		this.updateChar();
		this.timerId = setInterval(this.updateChar, 4000);
	}

	componentWillUnmount() {
		clearInterval(this.timerId)
	}

	onCharLoaded = char => {
		this.setState({
			char,
			loading: false
		})
	}
	onError = err => {
		this.setState({
			error: true,
			lodaing: false
		})
	}

	updateChar = () => {
		const id = Math.floor(Math.random()*140 + 25); // 25 -140
		// const id= 130000;
		this.gotService.getCharacter(id)
			.then(this.onCharLoaded)
			.catch(this.onError)
	}

	render() {
		const {char: {name, gender, born, died, culture}, loading, error} = this.state;
		const randomChar = (
			<div>
				<h4>Random Character: {name}</h4>
				<ul className="list-group list-group-flush">
					<li className="list-group-item d-flex justify-content-between">
						<span className="term">Gender </span>
						<span>{gender}</span>
					</li>
					<li className="list-group-item d-flex justify-content-between">
						<span className="term">Born </span>
						<span>{born}</span>
					</li>
					<li className="list-group-item d-flex justify-content-between">
						<span className="term">Died </span>
						<span>{died}</span>
					</li>
					<li className="list-group-item d-flex justify-content-between">
						<span className="term">Culture </span>
						<span>{culture}</span>
					</li>
				</ul>
			</div>
		)
		return (
			<div className="random-block rounded">
				{
					loading ?
					error ?	<ErrorMessage/> : <Spinner/>
					:
					randomChar
				}
			</div>
		);
	}
}

export default RandomChar
