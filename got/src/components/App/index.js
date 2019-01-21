import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../Header';
import RandomChar from '../RandomChar';
import ItemList from '../ItemList';
import CharDetails from '../CharDetails';


class App extends Component {
	state = {
		randomChar: false
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

	render() {
		const {randomChar} = this.state
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
					<Row>
						<Col md='6'>
							<ItemList />
						</Col>
						<Col md='6'>
							<CharDetails />
						</Col>
					</Row>
				</Container>
			</>
		);
	}
};

export default App;