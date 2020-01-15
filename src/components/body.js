import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ControlledCarousel from './controlledCarousel';

function Body(){
    return(
        <Container className="App">
        <Row>
          <Col>
          </Col>
          <Col>
            <ControlledCarousel />
          </Col>
        </Row>
      </Container>
        
    );
}

export default Body;