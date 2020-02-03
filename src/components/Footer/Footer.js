import React from 'react';

// react-bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';

const Footer = ({ image, width = 90, height = 20 }) => (
  <footer className="footer">
    <Row className="text-center text-md-left">
      <Col xs={12} md={6} className="text-center">
        <img
          className="img"
          src={image}
          alt="Klickly"
          width={width}
          height={height}
        />
      </Col>
      <Col xs={12} md={6} className="text-center">
        <Row>
          <Nav className="mr-auto">
            <Nav.Item>
              <Nav.Link
                href="https://www.klickly.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <i className="fab fa-facebook mr-4 social" />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="https://www.klickly.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <i className="fab fa-twitter mr-4 social" />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="https://www.klickly.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <i className="fab fa-linkedin mr-4 social" />
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Row>
      </Col>
    </Row>
    <Row>
      <Col xs={12} md={6} className="text-center text-md-left">
        <p className="text">©Klickly</p>
      </Col>
      <Col xs={12} md={6} className="text-center text-md-right">
        <Row>
          <Nav className="mr-auto justify-content-center">
            <Nav.Item>
              <Nav.Link href="/help" className="link">
                Help Center
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/terms" className="link">
                Terms and Conditions
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/policy" className="link">
                Privacy Policy
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Row>
      </Col>
    </Row>
  </footer>
);

export default Footer;
