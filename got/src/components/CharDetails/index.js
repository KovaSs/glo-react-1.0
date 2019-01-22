import React, {Component} from 'react';
import Spinner from '../Spinner';
import ClickInfo from '../ClickInfo';
import ErrorMessage from '../ErrorMessage';
import './charDetails.css';

import GotService from "../../services/service"

class CharDetails extends Component {

	gotService = new GotService();

	state = {
		char: null, 
		loading: false,
		error: false
	}

	componentDidMount() {
		this.updateChar()
	}

	componentDidUpdate(prevProps) {
		const {charId} = this.props
		if(charId !== prevProps.charId){
			this.updateChar()
		}

	}

	updateChar = () => {
		const {charId} = this.props;

		if(!charId) {
			return
		}
	
		this.setState({ loading : true})

		this.gotService.getCharacter(charId)
			.then(char => {
				this.setState({
					char,
					loading: false
				})
			})
			// Add Error for checking
			// this.foo.bar = 0;
	}

	componentDidCatch() {
		this.setState(({error}) => {
			return {
				error : true
			}
		})
	}

	render() {

		const {char, error} = this.state

		if(error) {
			return <ErrorMessage/>
		}

		if(!char) {
			return (
				<span className="list-group-item">
					<ClickInfo/>
					<div className="text-error">
						← Please select a character
					</div>
				</span>	
			)
		}

		const {loading} = this.state;
		const {name, gender, born, died, culture} = char;

		return (
			<div className="char-details rounded">
				{
					loading ?
					<Spinner/>
					:
					<>
						<h4>{name}</h4>
						<ul className="list-group list-group-flush">
							<li className="list-group-item d-flex justify-content-between">
								<span className="term">Gender</span>
								<span>{gender}</span>
							</li>
							<li className="list-group-item d-flex justify-content-between">
								<span className="term">Born</span>
								<span>{born}</span>
							</li>
							<li className="list-group-item d-flex justify-content-between">
								<span className="term">Died</span>
								<span>{died}</span>
							</li>
							<li className="list-group-item d-flex justify-content-between">
								<span className="term">Culture</span>
								<span>{culture}</span>
							</li>
						</ul>
					</>
				}
			</div>
		);
	}
}

export default CharDetails