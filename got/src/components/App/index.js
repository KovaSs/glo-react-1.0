import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../Header';
import RandomChar from '../RandomChar';
import CharacterPage from '../CharactePage';
import BooksPage from '../BooksPage';
import HousesPage from '../HousesPage';
import ErrorMessage from '../ErrorMessage';

import GotService from "../../services/service"

class App extends Component {

	gotService = new GotService();

	state = {
		randomChar: false,
		error: false
	}

	showRandomChar = modal => {
		this.setState(({randomChar}) => {
			return {
				randomChar: !modal 
			}
		})
	}

	componentDidMount() {
		if(this.state.randomChar) {
			console.log(`char ->`,this.state.randomChar)
		}
	}

	componentDidCatch() {
		this.setState(({error}) => {
			return {
				error : true
			}
		})
	}

	render() {
		const {randomChar, error} = this.state
		if(error) {
			return <ErrorMessage/>
		}
		return (
			<> 
				<Container>
					<Header onShow={this.showRandomChar}/>
				</Container>
				<Container>
					<Row>
						<Col lg={{size: 5, offset: 0}}>
							{ randomChar ? <RandomChar/> : null}
						</Col>
					</Row>
					<CharacterPage/>
					<BooksPage/>
					<HousesPage/>
				</Container>
			</>
		);
	}
};

export default App;