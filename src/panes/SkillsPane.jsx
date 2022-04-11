import '../App.css';
import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import SkillsBucketWrapper from '../SkillsBucketWrapper';
import { CONSTANTS } from '../constants';

const softwareDevelopmentData = CONSTANTS.softwareDevelopmentData;
const dataEngineeringData = CONSTANTS.dataEngineeringData;
const pmData = CONSTANTS.pmData;

class SkillsPane extends Component {
  state = {
    selected: 'softwareDevelopment',
    skillsData: softwareDevelopmentData
  }

  handleClick = (data, e) => {
    this.setState({
      selected: data.name,
      skillsData: data.skillsData
    })

  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h3 className='SkillTab' onClick={this.handleClick.bind(this, {name:'softwareDevelopment', skillsData:softwareDevelopmentData})}>
              Software Development
            </h3>
          </Col>
          <Col>
            <h3 className='SkillTab' onClick={this.handleClick.bind(this, {name:'dataEngineering', skillsData:dataEngineeringData})}>
              Data Engineering
            </h3>
          </Col>
          <Col>
            <h3 className='SkillTab' onClick={this.handleClick.bind(this, {name:'projectManagement', skillsData:pmData})}>
            Project Management
            </h3>
          </Col>
        </Row>
        <Row>
          <SkillsBucketWrapper
            name={this.state.selected}
            skillsData={this.state.skillsData}
           />
        </Row>
      </Container>
    );
  }

}

export default SkillsPane;
