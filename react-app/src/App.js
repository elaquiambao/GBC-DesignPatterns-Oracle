import React from 'react'
import './App.css'
import SetStock from './components/SetStock'
import GetStock from './components/GetStock'
import { Container, Col, Row, Navbar } from 'react-bootstrap'
function App() {
  return (
    <Container fluid>
      <Navbar bg="light">
        <h1 style={{ margin: 'auto' }}>Stocks Dashboard</h1>
      </Navbar>
      <Col>
        <Row>
          <SetStock />
        </Row>
        <Row>
          <GetStock />
        </Row>
      </Col>
    </Container>
  )
}

export default App
