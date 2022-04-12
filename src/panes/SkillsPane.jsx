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
  render() {
    return (
      <Container>
        <SkillsBucketWrapper
        />
      </Container>
    );
  }

}

export default SkillsPane;
