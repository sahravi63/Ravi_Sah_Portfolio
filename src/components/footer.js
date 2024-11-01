import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import github_icon from '../assets/img/github_icon.svg';
import twitter_icon from '../assets/img/twitter_icon.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
          
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/sahravi63/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/profile.php?id=100009781384448/"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/sahravi63/"><img src={navIcon3} alt="Icon" /></a>
              <a href="https://github.com/sahravi63"><img src={github_icon} alt="GitHub" /></a>
              <a href="https://x.com/Ravi5979/"><img src={twitter_icon} alt="Twitter" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
