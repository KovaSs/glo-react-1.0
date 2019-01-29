import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../Header';
import RandomChar from '../RandomChar';
import CharacterPage from '../CharactePage';
import ErrorMessage from '../ErrorMessage';
import ItemList from '../ItemList';
import CharDetails from '../CharDetails';

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

					<Row>
						<Col md='6'>
							<ItemList 
								onItemSelected={this.onItemSelected}
								getData={this.gotService.getAllBooks}
								renderItem={(item) => item.name}
							/>
						</Col>
						<Col md='6'>
							<CharDetails 
								charId={this.state.selectedChar}
							/>
						</Col>
					</Row>

					<Row>
						<Col md='6'>
							<ItemList 
								onItemSelected={this.onItemSelected}
								getData={this.gotService.getAllHouses}
								renderItem={(item) => item.name}
							/>
						</Col>
						<Col md='6'>
							<CharDetails 
								charId={this.state.selectedChar}
							/>
						</Col>
					</Row>
				</Container>
			</>
		);
	}
};

export default App;