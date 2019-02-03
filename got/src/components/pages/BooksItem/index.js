import React, { Component } from 'react';
import ItemDetails, {Field} from '../../ItemDetails';
import { Button, Row, Container, Col } from 'reactstrap';
import {withRouter} from 'react-router-dom';
import GotService from "../../../services/service"
import './booksItem.css'

export class BooksItem extends Component {
  gotService = new GotService();

  state = {
    selectedBook: 3
  }

  goBackPage = () => {
    this.props.history.push('/books/')
  }

  render() {
    const {bookId} = this.props;
    return (
      <Container >
        <Row>
          <Col>
            <ItemDetails itemId={bookId} infoMess={'book'} getData={this.gotService.getBook}>
              <Field field='numberofPages' label='Number of Pages'/>
              <Field field='publiser' label='Publiser'/>
              <Field field='released' label='Released'/>
            </ItemDetails>
          </Col>
        </Row>
        <Row className='books'>
          <Button 
            color="info"
            onClick={this.goBackPage}
          >
            Go back
          </Button>
        </Row>
      </Container>
    )
  }
}

export default withRouter(BooksItem)
