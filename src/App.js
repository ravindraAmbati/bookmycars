import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';
import './App.css';

function App() {
  return (
      <Container className="App">
        <Row>
          <Col>
            <Header/>
          </Col>
        </Row>
        <Row>
          <Col>
            &nbsp;
          </Col>
        </Row>
        <Row>
          <Col>
            <Body/>
          </Col>
        </Row>
        <Row>
          <Col>
            <Footer/>
          </Col>
        </Row>
      </Container>
  );
}

export default App;
