import React, { Component } from 'react';
import {Container} from 'reactstrap';
import ItemDetails, {Field} from '../../ItemDetails';
import GotService from "../../../services/service"

export class BooksItem extends Component {
  gotService = new GotService();

  state = {
    selectedBook: 3
  }

  render() {
    const {selectedBook} = this.state;
    return (
      <Container>
        <ItemDetails charId={selectedBook} infoMess={'book'}>
          <Field field='numberofPages' label='Number of Pages'/>
          <Field field='publiser' label='Publiser'/>
          <Field field='released' label='Released'/>
        </ItemDetails>
      </Container>
    )
  }
}

export default BooksItem
