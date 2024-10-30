import { Container, Row, Col } from "react-bootstrap";
import { AcademicsCard } from "./AcademicsCard";
// import DL from "../assets/img/DL.jpg";
// import AI_intro from "../assets/img/AI_intro.jpg";
//import Geodata from "../assets/img/Geodata.jpg";

export const Academics = () => {

  const Academics = [
    {
      title: "Programming in C",
      description: "",
      
      certUrl: "#"  // Use actual certificate URL
    },
    {
      title: "Programming in C++",
      description: "",
    
      certUrl: "#"
    },
    {
      title: "Advanced Programming in Java",
      description: "",
      
      certUrl: "#"
    }
  ];

  return (
    <section className="Academics" id="Academics">
      <Container>
        <Row>
          <Col size={12}>
            <div className="certifications-header">
              <h2>My Recent Certifications</h2>
              <p>Here are a few Certificates I've earned recently.</p>
            </div>
            <Row>
              {
                Academics.map((cert, index) => {
                  return (
                    <AcademicsCard 
                      key={index} 
                      {...cert} 
                    />
                  );
                })
              }
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
