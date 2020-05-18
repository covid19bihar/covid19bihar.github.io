import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <Container>
      <Row>
        <Col className="text-center footer">
          <p className="mb-0 text-muted">
            CREATED BY{" "}
            <a href="https://www.linkedin.com/in/arrbxr" target="blank">
              ABHISHEK RAJ RAVI
            </a>
          </p>
          <p className="text-muted">
            Data Source: {" "}
            <a
              href="https://www.covid19india.org/"
              target="blank"
              className="text-muted"
            >
              Covid19India
            </a>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
