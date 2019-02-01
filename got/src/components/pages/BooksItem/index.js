import React, { Component } from 'react';
import ItemDetails, {Field} from '../../ItemDetails';
import GotService from "../../../services/service"

export class BooksItem extends Component {
  gotService = new GotService();

  state = {
    selectedBook: 3
  }

  render() {
    const {bookId} = this.props;
    return (
      <ItemDetails itemId={bookId} infoMess={'book'} getData={this.gotService.getBook}>
        <Field field='numberofPages' label='Number of Pages'/>
        <Field field='publiser' label='Publiser'/>
        <Field field='released' label='Released'/>
      </ItemDetails>
    )
  }
}

export default BooksItem
