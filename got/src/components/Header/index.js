import React, {Component} from 'react';
import { Button } from 'reactstrap';

import {got} from "../../services/service"
import "./header.css"

class Header extends Component {

	getAllCharacters() {
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
				<h3 className="header-title">
					<Button color="link">Game of Thrones DB</Button>
				</h3>
				<ul className="header-links">
					<li>
						<Button 
							color="link"
							onClick={this.getAllCharacters}
						>
							Characters
						</Button>
					</li>
					<li>
						<Button 
							color="link"
							onClick={this.getAllHouses}
						>
							Houses
						</Button>
					</li>
					<li>
						<Button 
							color="link"
							onClick={this.getAllBooks}
						>
							Books
						</Button>
					</li>
				</ul>
			</div>
		);
	}
};

export default Header;