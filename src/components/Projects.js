import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import finance_tracker from "../assets/img/finance_tracker.png";
import lms from "../assets/img/lms.png";
import dataextraction from "../assets/img/dataextraction.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const Web_Development = [
    {
      title: "Personalized Financial Assistant",
      description: "This is a ongoing project where user can track their financial data and gain a ai-assited financial advice on how they can manage their financial transactions to achieve a balanced lifestyle",
      imgUrl: finance_tracker,
      githubUrl: "#",
      demoUrl: "#",
    },
    {
      title: "Yoga: E-Dashboard",
      description: "This is a ongoing project related to the learning management system related to yoga where one can learn and interact with the online learning resources like coursera platfrom. This project will includes the features recommdation system and other ai assited dashboard to help the learners to improve thier learning habits....",
      imgUrl: lms,
      githubUrl: "#",
      demoUrl: "#",
    },
    {
      title: "PDF-Data Extraction and Masking",
      description: "A web-based platform where user can upload their pdf and this application will extract the data and mask the sensitive information. This is simple application having the features of dealing with multiples files, multilingual datasets and data extraction from images. I have used re expressions, spacy, and ai-ml techniques to extract the data from pdf and images.",
      imgUrl: dataextraction,  // Placeholder or appropriate image
      githubUrl: "#",
      demoUrl: "#",
    },
    
  ];

 

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>My Recent Works</h2>
                <p>Here are a few projects I've worked on recently.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Web Development</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">AI and ML</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Gen AI</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          Web_Development.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p> AI-ML related projects coming soon!</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Gen AI -related projects coming soon!</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background"/>
    </section>
  )
}
