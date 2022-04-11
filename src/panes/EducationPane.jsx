import '../App.css';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

function EducationPane() {
  return (
    <div className="General-block">
      <Container>
      <Row>
        <Col sm={4}>
        <div className="Education-block">
          <h3>Master of Science, Business Analytics</h3>
          <h4>University of California, Los Angeles</h4>
          <h4>Anderson School of Management</h4>
          <h5>Expected Dec '23</h5>
        </div>
        </Col>
        <Col sm={8}>
        <div style={{textAlign:'left', width: '100%', height:'100%'}}>
          <span className="Paragraph-block">
            <p>I will start the program Fall 2022 with an anticipated graduation date of December 2023.</p>
          </span>
        </div>
        </Col>
      </Row>

      <Row style={{marginTop: '10%'}}>
        <Col sm={4}>
        <div className="Education-block">
          <h3>Bachelor of Science, Computer Science</h3>
          <h4>University of Utah</h4>
          <h4>School of Computing</h4>
          <h5>May '18'</h5>
        </div>
        </Col>
        <Col sm={8}>
        <div style={{textAlign:'left', width: '100%', height:'100%'}}>
          <span className="Paragraph-block">
            <p>Transferred as a junior into the Computer Science program at the University of Utah in Fall 2015.</p>
            <p>During my the time at the U, I was involved in VASA (Vietnamese American Student Association) and HackTheU (Utah's first and largest hackathon).</p>
            <p>I was also a teaching asssistant in Mathmatics for various courses ranging from Calculus to Ordinary Differential Equations.</p>
            <p>My senior capstone project was the <a style={{color: '#efebdd', textDecoration: 'underline'}}href="http://melodysmith.herokuapp.com/">MelodySmith</a>, a music composition application.</p>
          </span>
          <div><p></p></div>
          <span className="Paragraph-block">
            <p>The courses I enjoyed the most were:</p>
            <p>
              CS 4300 - Artificial Intelligence
            </p>
            <p>
              CS 3505 - Software Practice II
            </p>
            <p>
              CS 5140 - Data Mining
            </p>
          </span>
        </div>
        </Col>
      </Row>
      </Container>
    </div>
  );
}

export default EducationPane;
