import { Container, Row, Col } from "react-bootstrap";
import { AcademicsCard } from "./AcademicsCard";
import C_for_Everyone_Programming_Fundamentals from "../assets/img/C_for_Everyone_Programming_Fundamentals.jpg";
import Certificate from "../assets/img/Certificate.jpg";
import java_certificate from "../assets/img/java_certificate.jpg";


export const Academics = () => {
  const academicsData = [
    {
      title: "Programming in C",
      description: "Introduction to C programming and problem-solving.",
      imgUrl: C_for_Everyone_Programming_Fundamentals,
      certUrl: "#"  // Replace with actual certificate URL
    },
    {
      title: "Programming in C++",
      description: "Intermediate concepts of C++ and OOP.",
      imgUrl: Certificate,
      certUrl: "#"
    },
    {
      title: "Advanced Programming in Java",
      description: "Object-oriented programming and data structures in Java.",
      imgUrl:java_certificate,
      certUrl: "#"
    }
  ];

  return (
    <section className="academics" id="academics">
      <Container>
        <Row>
          <Col size={12}>
            <div className="certifications-header">
              <h2>My Recent Certifications</h2>
              <p>Here are a few certificates I've earned recently.</p>
            </div>
            <Row>
              {academicsData.map((cert, index) => (
                <AcademicsCard key={index} {...cert} />
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
