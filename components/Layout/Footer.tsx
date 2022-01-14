import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import {
  ImFacebook2 as FacebookIcon,
  ImHeart as HeartIcon,
  ImInstagram as InstagramIcon,
} from 'react-icons/im';
import { StyledFooter } from './styles';

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <Container>
        <Row>
          <Col lg={3}>
            <h3>Happy Builders</h3>
            <Image
              thumbnail
              roundedCircle
              className="fp-badge border-0"
              src="/images/financement-participatif.png"
              alt="Plateforme de financement participatif régulée par les autorités françaises."
            />
          </Col>
          <Col lg={4}>
            <h5>À Propos de Happy Builders</h5>
            <ul className="list-unstyled">
              <li>Comment ça marche</li>
              <li>Lien 2</li>
              <li>Lien 3</li>
            </ul>
          </Col>
          <Col lg={3}>
            <h5>Aide</h5>
            <ul className="list-unstyled">
              <li>FAQ</li>
              <li>Mentions Légales</li>
              <li>Conditions d&apos;Utilisation</li>
              <li>Cookies</li>
            </ul>
          </Col>
          <Col lg={2}>
            <h5>Suivez-nous</h5>
            <ul className="list-unstyled list-inline">
              <li className="list-inline-item">
                <FacebookIcon />
              </li>
              <li className="list-inline-item">
                <InstagramIcon />
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <Container className="footer-bottom">
        <Row>
          <Col lg={6} sm={7}>
            <span className="mb-0 f_400 sm">&copy; Happy Builders 2021</span>
          </Col>
          <Col lg={6} sm={5} className="f_400 text-right">
            <span>
              fait avec <HeartIcon color="E22866" /> en France
            </span>
          </Col>
        </Row>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
