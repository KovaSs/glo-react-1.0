import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../Header';
import RandomChar from '../RandomChar';
import CharacterPage from '../CharactePage';
import ErrorMessage from '../ErrorMessage';


class App extends Component {
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
				</Container>
			</>
		);
	}
};

export default App;