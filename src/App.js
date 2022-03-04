import './App.css';
import React, { Component } from 'react'

import Header from './Header';
import Socials from './Socials';

import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

class App extends Component {
  render() {
    return (
         <div className="App">
        <Header></Header>

        <div className="General-block">
			<h2>About</h2>
			<p>Under Construction...</p>
        </div>

        <div className="General-block">
			<h2>Work</h2>
			<p>Under Construction...</p>
        </div>

        <div className="General-block">
        	<Container>
				<h2>Education</h2>
				<Row style={{marginTop:'-5%'}}>
					<Col>
						<div className="Education-block">
							<h3>Master of Science, Business Analytics Dec '23</h3>
							<h4>University of California, Los Angeles</h4>
							<h4>Anderson School of Management</h4>
						</div>
					</Col>
				</Row>
        		<Row>
        			<Col>
						<div className="Education-block">
							<h3>Bachelor of Science, Computer Science May '18</h3>
							<h4>University of Utah, School of Computing</h4>
						</div>
					</Col>
    				<Col>
						<div className="Education-block">
							<h3>Associate of Science May'15</h3>
							<h4>Snow College</h4>
						</div>
					</Col>
				</Row>
        	</Container>
        </div>

        <Socials/>
        
    </div>
    )
  }
}

export default App;
