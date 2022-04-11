import './App.css';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Socials from './Socials';

function ContactPane() {
  return (
    <Container>
      <Row>
        <Col sm={4}>
          <Socials></Socials>
        </Col>
        <Col sm={8}>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactPane;
