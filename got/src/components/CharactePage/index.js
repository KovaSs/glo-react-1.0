import React, {Component} from 'react';
import {Col, Row} from 'reactstrap';
import ItemList from '../ItemList';
import CharDetails from '../CharDetails';
import ErrorMessage from '../ErrorMessage';
import RowBlock from '../RowBlock';
import {Field} from '../CharDetails';

import GotService from "../../services/service"

class CharacterPage extends Component {

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
        getData={this.gotService.getAllCharacters}
        renderItem={item => item.name}
      />
    )

    const charDetails = (
      <CharDetails charId={selectedChar}>
        <Field field='gender' label='Gender'/>
        <Field field='born' label='Born'/>
        <Field field='died' label='Died'/>
        <Field field='culture' label='Culture'/>
      </CharDetails>
    )

    return (
      <RowBlock left={itemList} right={charDetails}/>
    )
  }
}

export default CharacterPage