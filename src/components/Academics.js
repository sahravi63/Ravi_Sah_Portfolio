import { Container, Row, Col } from "react-bootstrap";
import { AcademicsCard } from "./AcademicsCard";
import C_for_Everyone_Programming_Fundamentals from "../assets/img/C_for_Everyone_Programming_Fundamentals.jpg";
import Certificate from "../assets/img/Certificate.jpg";
//import Geodata from "../assets/img/Geodata.jpg";

export const Academics = () => {

  const Academics = [
    {
      title: "Programming in C",
      description: "",
      imgUrl:C_for_Everyone_Programming_Fundamentals,
      certUrl: "#"  // Use actual certificate URL
    },
    {
      title: "Programming in C++",
      description: "",
      imgUrl:Certificate,
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
