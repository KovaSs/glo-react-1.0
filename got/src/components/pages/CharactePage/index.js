import React, {Component} from 'react';
import ItemList from '../../ItemList';
import ItemDetails, {Field} from '../../ItemDetails';
import ErrorMessage from '../../ErrorMessage';
import RowBlock from '../../RowBlock';

import GotService from "../../../services/service"

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
      <ItemDetails charId={selectedChar} infoMess={'character'}>
        <Field field='gender' label='Gender'/>
        <Field field='born' label='Born'/>
        <Field field='died' label='Died'/>
        <Field field='culture' label='Culture'/>
      </ItemDetails>
    )

    return (
      <RowBlock left={itemList} right={charDetails}/>
    )
  }
}

export default CharacterPage