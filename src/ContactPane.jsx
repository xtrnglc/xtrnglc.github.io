import './App.css';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Socials from './Socials';

function ContactPane() {
  return (
    <Container>
      <Row>
        <Col>
          <Socials></Socials>
        </Col>

      </Row>
    </Container>
  );
}

export default ContactPane;
