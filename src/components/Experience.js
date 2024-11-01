import { Container, Row, Col } from "react-bootstrap";
import { ExperienceCard } from "./ExperienceCard.js";
import ravi_productexpo from "../assets/img/ravi_productexpo.jpg";
import codesoft from "../assets/img/codesoft.jpg";

export const Experience = () => {
  const experienceData = [
    {
      title: "C++ Programming",
      description: "Intensive training on C++ language fundamentals and algorithms.",
      imgUrl: codesoft,
      certUrl: "#"
    },
    {
      title: "Product Expo",
      description: "Showcased and presented innovative products at the expo.",
      imgUrl: ravi_productexpo,
      certUrl: "#"
    },
  ];

  return (
    <section className="Experience" id="Experience">
      <Container>
        <Row>
          <Col size={12}>
            <div className="Experience-header">
              <h2>My Recent Internships</h2>
              <p>Here are a few internships I've done recently.</p>
            </div>
            <Row>
              {experienceData.map((cert, index) => (
                <ExperienceCard 
                  key={index}
                  {...cert}
                />
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
