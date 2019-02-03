import React, {Component} from 'react';
import { Button } from 'reactstrap';
import {Link} from 'react-router-dom';

import {got} from "../../services/service"
import "./header.css"

class Header extends Component {

	state = {
		content: false
	}

	showRandChar = () => {
		const {onShow} = this.props;
		this.setState(({content}) =>{ 
			return {
				content : !this.state.content
			}
		})
		onShow(this.state.content);
	}

	getCharacters() {
		return got.getAllCharacters().then(res => console.log(`getAllCharacters ->`, res))
	} 
	getAllHouses() {
		return got.getAllHouses().then(res => console.log(`getAllHouses ->`, res))
	} 
	getAllBooks() {
		return got.getAllBooks().then(res => console.log(`getAllBooks ->`, res))
	} 
	render() {
		return (
			<div className="header-block">
			<Link to='/'>
				<h3 className="header-title">
					<Button color="link">Game of Thrones DB</Button>
				</h3>
			</Link>
				<ul className="header-links">
					<li>
						<Button 
							color="link"
							onClick={this.showRandChar}
						>
							Random Character
						</Button>
					</li>
					<Link to='/character/'>
						<Button 
							color="link"
							onClick={this.getCharacters}
						>
							Characters
						</Button>
					</Link>
					<Link to='/houses/'>
						<Button 
							color="link"
							onClick={this.getAllHouses}
						>
							Houses
						</Button>
					</Link>
					<Link to='/books/'>
						<Button 
							color="link"
							onClick={this.getAllBooks}
						>
							Books
						</Button>
					</Link>
				</ul>
			</div>
		);
	}
};

export default Header;