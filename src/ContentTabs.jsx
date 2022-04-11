import './App.css';
import AboutPane from './panes/AboutPane';
import EducationPane from './panes/EducationPane';
import ContactPane from './panes/ContactPane';
import WorkPane from './panes/WorkPane';
import SkillsPane from './panes/SkillsPane';

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Fade from "react-bootstrap/Fade";



function ContentTabs() {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav className="flex-column Tab">
            <Nav.Item>
              <Nav.Link eventKey="first" className="Tablink">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second" className="Tablink">Education</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third" className="Tablink">Work</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fourth" className="Tablink">Skills</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fifth" className="Tablink">Contact</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>

        <Col sm={9}>
          <Tab.Content>

            <Tab.Pane transition={Fade} eventKey="first">
              <AboutPane />
            </Tab.Pane>

            <Tab.Pane transition={Fade} eventKey="second">
              <EducationPane />
            </Tab.Pane>

            <Tab.Pane transition={Fade} eventKey="third">
              <WorkPane />
            </Tab.Pane>

            <Tab.Pane transition={Fade} eventKey="fourth">
              <SkillsPane />
            </Tab.Pane>

            <Tab.Pane transition={Fade} eventKey="fifth">
              <ContactPane />
            </Tab.Pane>

          </Tab.Content>
        </Col>
      </Row>
      </Tab.Container>
  )
}

export default ContentTabs;
