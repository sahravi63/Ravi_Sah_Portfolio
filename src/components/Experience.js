import { Container, Row, Col } from "react-bootstrap";
import { ExperienceCard } from "./ExperienceCard.js";
// import IBM from "../assets/img/IBM.jpg";
import ravi_productexpo from "../assets/img/ravi_productexpo.jpg";
import codesoft from "../assets/img/codesoft.jpg";

export const Experience = () => {
  const experienceData = [ // Renamed this array to avoid conflict
    {
      title: "C++ Programming",
      description: "",
      imgUrl: codesoft,
      certUrl: "#"
    },
    {
      title: "Product Expo",
      description: "",
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
              {
                experienceData.map((cert, index) => {
                  return (
                    <ExperienceCard // Use ExperienceCard component here
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
