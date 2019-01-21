import React, {Component} from 'react';
import { Button } from 'reactstrap';

import {got} from "../../services/service"
import "./header.css"

class Header extends Component {

	getAllCharacters() {
		return got.getAllCharacters().then(res => console.log(res))
	} 
	getAllHouses() {
		return got.getAllHouses().then(res => console.log(res))
	} 
	getAllBooks() {
		return got.getAllBooks().then(res => console.log(res))
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