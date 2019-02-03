import React, {Component} from 'react';
import ItemList from '../../ItemList';
import ItemDetails, {Field} from '../../ItemDetails';
import ErrorMessage from '../../ErrorMessage';
import RowBlock from '../../RowBlock';

import GotService from "../../../services/service"

class HousesPage extends Component {

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
        getData={this.gotService.getAllHouses}
        renderItem={item => item.name}
      />
    )

    const charDetails = (
      <ItemDetails itemId={selectedChar} infoMess={'house'} getData={this.gotService.getHouse}>
        <Field field='name' label='Name'/>
        <Field field='region' label='Region'/>
        <Field field='coatOfArms' label='Coat Of Arms'/>
      </ItemDetails>
    )

    return (
      <RowBlock left={itemList} right={charDetails}/>
    )
  }
}

export default HousesPage