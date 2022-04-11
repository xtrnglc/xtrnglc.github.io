import './App.css';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

function WorkPane() {
  return (
    <Container>
      <Row>
        <Col sm={4}>
          <p>Work placeholder</p>
        </Col>
        <Col sm={8}>
        </Col>
      </Row>
    </Container>
  );
}

export default WorkPane;
