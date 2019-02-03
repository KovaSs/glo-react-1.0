import React from 'react'
import { Container, Row, Col } from 'reactstrap';

import "./mainPage.css"

const MainPage = () => {
  return (
    <Container>
      <Row>
        <Col className='img_container'>
          <img className='heartBeat img_size' src={process.env.PUBLIC_URL + '/img/loader-512x512.png'} alt="main_img "/>
        </Col>
      </Row>
      <Row>
        <Col className="text_container">
          All the data from the universe of Ice And Fire you've ever wanted!
        </Col>
      </Row>
    </Container>
  )
}

export default MainPage