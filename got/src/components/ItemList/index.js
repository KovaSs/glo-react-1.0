import React, {Component} from 'react';
import Spinner from '../Spinner';
import ErrorMessage from '../ErrorMessage';
import './itemList.css';

import GotService from "../../services/service"

export default class ItemList extends Component {

	gotService = new GotService();

	state = {
		charList: null,
		error: false
	}

	componentDidMount() {
		this.gotService.getAllCharacters()
			.then((charList) => {
				this.setState({
					charList
				})
			})
	}

	componentDidCatch() {
		this.setState(({error}) => {
			return {
				error : true
			}
		})
	}

	renderItems = arr => {
		const {onCharSelected} = this.props;
		return arr.map(item => {
			return (
				<li 
					key = {item.id}
					className = "list-group-item"
					onClick = {() => onCharSelected(item.id)}
				>
					{item.name}
				</li>
			)
		})
	}

	render() {

		const {charList, error} = this.state

		
		if(error) {
			return <ErrorMessage/>
		}

		const items = charList ? this.renderItems(charList) : <li className = "list-group-item"><Spinner/></li>;

		return (
			<ul className="item-list list-group">
				{items}
			</ul>
		);
	}
}