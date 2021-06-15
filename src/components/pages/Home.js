import React, { Component } from 'react';
import Profile from "../../components/pages/profile/Profile";
import Contact from "../../components/pages/contact/Contact";
import About from "../../components/pages/about/About";
import Skills from "../../components/pages/skills/Skills";
import Experiences from "../../components/pages/experiences/Experiences";
import Educations from "../../components/pages/educations/Educations";
import Achievements from "../../components/pages/achievements/Achievements";
import Certificates from "../../components/pages/certificates/Certificates";
import Projects from "../../components/pages/projects/Projects";
import { Row, Col,Card, CardGroup } from 'reactstrap';


export default class Home extends Component {
  render() {
    return (
      <section>
        <div >
        <Row>
        <CardGroup>
            <Card style={{ backgroundColor: '#01579b'}} >
              <Col >
                <Profile />
                <Contact />
                <Skills />
              </Col>
            </Card>
            <Card >
              <Col>   
                <About />
                <Educations />
                <Experiences />
                <Projects />
                <Certificates />
                <Achievements />
              </Col>
            </Card>
          </CardGroup>
          </Row>
        </div>
      </section>
    )
  }
}
