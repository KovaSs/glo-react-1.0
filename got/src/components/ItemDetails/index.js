import React, {Component} from 'react';
import Spinner from '../Spinner';
import ClickInfo from '../ClickInfo';
import ErrorMessage from '../ErrorMessage';
import './itemDetails.css';

import GotService from "../../services/service"

class ItemDetails extends Component {
	gotService = new GotService();

	state = {
		item: null, 
		loading: false,
		error: false,
		errorNumber: null
	}

	componentDidMount() {
		// this.updateChar()
		const {itemId, getData} = this.props;

		if(!itemId) return;
		this.setState({ loading: true })

		getData(itemId)
			.then(this.updateItem)
			.catch(err => {    
				this.onError(Number(err.message.replace(/\D+/, '')));
			})
	}

	componentDidUpdate(prevProps) {
		const {itemId, getData} = this.props;
        
		if(itemId !== prevProps.itemId) {
			if(!itemId) return;
			this.setState({ loading: true })

			getData(itemId)
				.then(this.updateItem)
				.catch(err => {    
					this.onError(Number(err.message.replace(/\D+/, '')));
				})
		}
	}

	updateItem = item => {
		this.setState({
				item,
				loading: false
		})
}

	onError = (err) => {
		this.setState({
			error: true,
			loading: false,
			errorNumber: err
		})
}

	componentDidCatch() {
		this.setState(({error}) => {
			return {
				error : true
			}
		})
	}

	render() {

		const {item, error, loading} = this.state;
		const {infoMess} = this.props;

		if(error) {
			return <ErrorMessage/>
		}

		if(!item) {
			return (
				<span className="list-group-item">
					<ClickInfo/>
					<div className="text-error">
						{`← Please select a ${infoMess}`}
					</div>
				</span>	
			)
		}

		const {name} = item;

		return (
			<div className="char-details rounded">
				{
					loading ?
					<Spinner/>
					:
					<>
						<h4>{name || "¯\\_(ツ)_/¯"}</h4>
						<ul className="list-group list-group-flush">
						{
							React.Children.map(this.props.children, child => {
								return React.cloneElement(child, {item})
							})
						}
						</ul>
					</>
				}
			</div>
		);
	}
}

export const Field = ({item, field, label}) => {
	return(
		<li className="list-group-item d-flex justify-content-between">
			<span className="term">{label}</span>
			<span>{item[field] || "¯\\_(ツ)_/¯"}</span>
		</li>
	)
}

export default ItemDetails