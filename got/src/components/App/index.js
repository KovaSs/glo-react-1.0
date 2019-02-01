import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../Header';
import RandomChar from '../RandomChar';
import {CharacterPage, BooksPage, HousesPage, BooksItem} from '../pages';
import ErrorMessage from '../ErrorMessage';
import {BrowserRouter as Router, Route} from 'react-router-dom';

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
			<Router>
				<div className="app"> 
				<Container>
					<Header onShow={this.showRandomChar}/>
				</Container>
				<Container>
					<Row>
						<Col lg={{size: 5, offset: 0}}>
							{ randomChar ? <RandomChar/> : null}
						</Col>
					</Row>
					<Route path='/' exact component={() => <h1>Welcome GoT</h1>}/>
					<Route path='/character' component={CharacterPage}/>
					<Route path='/houses' component={HousesPage}/>
					<Route path='/books' exact component={BooksPage}/>
					<Route path='/books/:id' render={() => <BooksItem/>}/>
				</Container>
			</div>
			</Router>
		);
	}
};

export default App;