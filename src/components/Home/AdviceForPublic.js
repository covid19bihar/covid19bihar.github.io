import React from "react";
import { Container, Row, Col, Image, Alert } from "react-bootstrap";

import advice1 from "../../img/advice/advice1.png";
import advice2 from "../../img/advice/advice2.png";
import advice3 from "../../img/advice/advice3.png";
import advice4 from "../../img/advice/advice4.png";

const AdviceForPublic = () => {
  return (
    <Container>
        <Row>
            <Col>
                <Alert variant={'success mb-0 mt-3'}>
                Protect yourself and others from getting sick
                </Alert>
            </Col>
        </Row>
      <Row>
        <Col sm={6} className="mt-3">
          <Image src={advice1} rounded fluid/>
        </Col>
        <Col sm={6} className="mt-3">
          <Image src={advice2} rounded fluid/>
        </Col>
        <Col sm={6}  className="mt-3">
          <Image src={advice3} rounded fluid/>
        </Col>
        <Col sm={6} className="mt-3 mb-4">
          <Image src={advice4} rounded fluid/>
        </Col>
      </Row>
    </Container>
  );
};

export default AdviceForPublic;
