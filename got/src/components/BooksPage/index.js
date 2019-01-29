import React, {Component} from 'react';
import ItemList from '../ItemList';
import CharDetails from '../CharDetails';
import ErrorMessage from '../ErrorMessage';
import RowBlock from '../RowBlock';
import {Field} from '../CharDetails';

import GotService from "../../services/service"

class BooksPage extends Component {

  gotService = new GotService();

  state = {
    selectedChar: null, 
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
			selectedChar: id
		})
	}

  render() {

    const {selectedChar, error} = this.state;

    if(error) {
			return <ErrorMessage/>
    }
    
    const itemList = (
      <ItemList 
        onItemSelected={this.onItemSelected}
        getData={this.gotService.getAllBooks}
        renderItem={item => item.name}
      />
    )

    const charDetails = (
      <CharDetails charId={selectedChar} infoMess={'book'}>
        <Field field='numberofPages' label='Number of Pages'/>
        <Field field='publiser' label='Publiser'/>
        <Field field='released' label='Released'/>
      </CharDetails>
    )

    return (
      <RowBlock left={itemList} right={charDetails}/>
    )
  }
}

export default BooksPage