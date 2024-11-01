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
      description: "An ongoing project where users can track their financial data and receive AI-assisted financial advice on how to manage transactions for a balanced lifestyle.",
      imgUrl: finance_tracker,
      githubUrl: "#",  // Replace with actual link
      demoUrl: "#",  // Replace with actual link
    },
    {
      title: "Yoga: E-Dashboard",
      description: "An ongoing project related to a learning management system for yoga. It includes online learning resources and AI-assisted dashboards similar to platforms like Coursera to help learners improve their habits.",
      imgUrl: lms,
      githubUrl: "#",  // Replace with actual link
      demoUrl: "#",  // Replace with actual link
    },
    {
      title: "PDF-Data Extraction and Masking",
      description: "A web-based platform where users can upload PDFs, and the app extracts data while masking sensitive information. Features include handling multiple files, multilingual datasets, and image data extraction using AI-ML techniques.",
      imgUrl: dataextraction,  // Replace with appropriate image if needed
      githubUrl: "#",  // Replace with actual link
      demoUrl: "#",  // Replace with actual link
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
                          {Web_Development.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>AI-ML related projects coming soon!</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Gen AI-related projects coming soon!</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background"/>
    </section>
  );
};
