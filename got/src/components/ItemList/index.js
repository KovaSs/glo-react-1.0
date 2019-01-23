import React, {Component} from 'react';
import Spinner from '../Spinner';
import ErrorMessage from '../ErrorMessage';
import './itemList.css';

export default class ItemList extends Component {

	state = {
		itemList: null,
		error: false
	}

	componentDidMount() {
		const {getData} = this.props;

		getData()
			.then((itemList) => {
				this.setState({
					itemList
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
			const {id} = item;
			const label = this.props.renderItem(item);
			return (
				<li 
					key = {id}
					className = "list-group-item"
					onClick = {() => onCharSelected(id)}
				>
					{label}
				</li>
			)
		})
	}

	render() {

		const {itemList, error} = this.state

		if(error) {
			return <ErrorMessage/>
		}

		const items = itemList ? this.renderItems(itemList) : <li className = "list-group-item"><Spinner/></li>;

		return (
			<ul className="item-list list-group">
				{items}
			</ul>
		);
	}
}