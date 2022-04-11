import './App.css';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

function AboutPane() {
  return (
    <Container>
    <Row>
      <Col sm={4}>
        <p>Pic Placeholder</p>
      </Col>
      <Col sm={8}>
      <div style={{textAlign:'left', width: '100%', height:'100%'}}>
        <p style={{fontSize: '25px'}}>Hi, and thanks for stopping by!</p>
        <span className="Paragraph-block">
          <p>I'm an incoming Master of Science in Business Analytics Candidate at UCLA Anderson.</p>
          <p>My areas of interest in the data science field include engaged storytelling, digestable and actionable forms of data, and meaningful impact for education.</p>
          <p>Throughout my career both professionally and in academia, I've worked on alternative ways to represent information that isn't limited to charts, graphs, or lines.</p>
          <p>Since 2018, I've been working around the Silicon Slopes as a Software Engineering Lead.</p>
        </span>
        <div><p></p></div>
        <span className="Paragraph-block">
          <p>Regarding my personal life, I was born and raised in Saigon, Vietnam. I moved to the US in 2013 for my education.</p>
          <p>From the jungles of Saigon to the Wasatch mountains of Salt Lake City.</p>
          <p>When not coding, I enjoy playing piano (I started during the pandemic!). I like to mash up songs that are of the same fabric. That tell the same story. There are some recordings on my Youtube. </p>
          <p>I was also an avid climber a few years ago, and it's something that I want to get back into soon!</p>
        </span>
      </div>
      </Col>

    </Row>

    </Container>
  );
}

export default AboutPane;
