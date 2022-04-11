import './App.css';
import React, { Component } from 'react'

import HeaderWrapper from './HeaderWrapper';
import Socials from './Socials';
import ContentTabs from './ContentTabs';

import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderWrapper></HeaderWrapper>
        <Container style={{marginTop: '5%'}}fluid>
          <ContentTabs/>

        </Container>


      </div>
    )
  }
}

export default App;
