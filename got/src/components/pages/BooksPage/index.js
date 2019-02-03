import React, {Component} from 'react';
import ItemList from '../../ItemList';
import ErrorMessage from '../../ErrorMessage';
import {withRouter} from 'react-router-dom';
import RowBlock from '../../RowBlock';

import GotService from "../../../services/service"
import "./booksPage.css"

class BooksPage extends Component {

  gotService = new GotService();

  state = {
    error: false
  }

  componentDidCatch() {
		this.setState(({error}) => {
			return {
				error : true
			}
		})
	}

  render() {
    const {error} = this.state;

    if(error) {
			return <ErrorMessage/>
    }
    
    const itemList = (
      <ItemList 
        onItemSelected={itemId => this.props.history.push(itemId)}
        getData={this.gotService.getAllBooks}
        renderItem={({name}) => `${name}`}
      />
    )

    const charDetails = (
      <div className='img_container'>
        <img className='heartBeat img_size' src={process.env.PUBLIC_URL + '/img/loader-512x512.png'} alt="error"/> 
      </div>
    )

    return (
      <RowBlock left={itemList} right={charDetails}/>
    )
  }
}

export default withRouter(BooksPage);