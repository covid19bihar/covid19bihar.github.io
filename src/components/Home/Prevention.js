import React from "react";
import { Container, Row, Col, Card, Jumbotron } from "react-bootstrap";

import AdviceForPublic from "./AdviceForPublic";
import keepDistance from "../../img/keepdistance.jpg";
import hand from "../../img/handWash.jpg";
import face from "../../img/avoidface.jpg";
import smoke from "../../img/smokee.jpg";
import About from "./About";

const Prevention = () => {
  return (
    <>
    <Container>
      <Jumbotron className="mt-3">
        <h4>PREVENTION & ADVICE</h4>
        <p>
          There is currently no vaccine to prevent coronavirus disease 2019
          (COVID-19). <span className="text-primary">The best way to prevent illness is to avoid being exposed
          to this virus.</span> Stay aware of the latest information on the COVID-19
          outbreak, available on the WHO website and through your national and
          local public health authority
        </p>
      </Jumbotron>
      <Row>
        <Col lg={3} sm={6} className="mb-4 my-sm-0">
          <Card>
            <Card.Img variant="top" src={hand} alt={"loho"} />
            <Card.Body>
              <Card.Title>Wash your hands frequently</Card.Title>
              <Card.Text>
                Wash your hands regularly with soap and water, or clean them
                with alcohol-based hand rub.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={3} sm={6}>
          <Card>
            <Card.Img variant="top" src={face} />
            <Card.Body>
              <Card.Title>Avoid touching your face.</Card.Title>
              <Card.Text>
                Do not touch your eyes, nose or mouth if your hands are not
                clean. Cover your mouth and nose when coughing or sneezing.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={3} sm={6} className="my-4 my-sm-0">
          <Card>
            <Card.Img variant="top" src={smoke} />
            <Card.Body>
              <Card.Title>Avoid Smoking</Card.Title>
              <Card.Text>
                Refrain from smoking and other activities that weaken the lungs.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={3} sm={6} className="mb-4 mb-sm-0">
          <Card>
            <Card.Img variant="top" src={keepDistance} />
            <Card.Body>
              <Card.Title>Keep in Distance</Card.Title>
              <Card.Text>
                Practice physical distancing by avoiding unnecessary travel and
                staying away from large groups of people.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <AdviceForPublic />
      </Row>

     </Container>
    <About />
    </>
  );
};

export default Prevention;
