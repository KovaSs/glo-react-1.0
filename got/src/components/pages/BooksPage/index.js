import React, {Component} from 'react';
import ItemList from '../../ItemList';
import ItemDetails, {Field} from '../../ItemDetails';
import ErrorMessage from '../../ErrorMessage';
import RowBlock from '../../RowBlock';

import GotService from "../../../services/service"

class BooksPage extends Component {

  gotService = new GotService();

  state = {
    selectedBook: null, 
    error: false
  }

  componentDidCatch() {
		this.setState(({error}) => {
			return {
				error : true
			}
		})
	}

  onItemSelected = id => {
		this.setState({
			selectedBook: id
		})
	}

  render() {

    const {selectedBook, error} = this.state;

    if(error) {
			return <ErrorMessage/>
    }
    
    const itemList = (
      <ItemList 
        onItemSelected={this.onItemSelected}
        getData={this.gotService.getAllBooks}
        renderItem={({name}) => `${name} `}
      />
    )

    const charDetails = (
      <ItemDetails charId={selectedBook} infoMess={'book'}>
        <Field field='numberofPages' label='Number of Pages'/>
        <Field field='publiser' label='Publiser'/>
        <Field field='released' label='Released'/>
      </ItemDetails>
    )

    return (
      <RowBlock left={itemList} right={charDetails}/>
    )
  }
}

export default BooksPage