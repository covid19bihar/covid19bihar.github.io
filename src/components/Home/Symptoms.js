import React from "react";

import { Container, Row, Col, Card, Jumbotron } from "react-bootstrap";

import cough from "../../img/symptosm/cough.png";
import breath from "../../img/symptosm/breath.png";
import fever from "../../img/symptosm/fever.png";
import Footer from "../HeaderFooter/Footer";

const Symptoms = () => {
  return (
    <>
    <Container>
      <Jumbotron className="mt-3">
        <h4>SYMPTOMS OF CORONAVIRUS</h4>
        <p>
          The most common symptoms of COVID-19 are fever, tiredness, and dry
          cough. Some patients may have aches and pains, nasal congestion, runny
          nose, sore throat or diarrhea. These symptoms are usually mild and
          begin gradually. Also the symptoms may appear 2-14 days after
          exposure.
        </p>
      </Jumbotron>

      <Row>
        <Col sm={4} className="mb-sm-0">
          <Card>
            <Card.Img variant="bottom" src={fever} />
            <Card.Body>
              <Card.Title>High Fever</Card.Title>
              <Card.Text>
                This means you feel hot to touch on your chest or back (you do
                not need to measure your temperature). It is a common sign &
                also may appear in 2-10 days if affected.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={4} className="my-4 my-sm-0">
          <Card>
            <Card.Img variant="top" src={cough} />
            <Card.Body>
              <Card.Title>Continuous cough</Card.Title>
              <Card.Text>
                This means coughing a lot for more than an hour, or 3 or more
                coughing episodes in 24 hours (if you usually have a cough, it
                may be worse than usual).
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={4} className="mb-5">
          <Card>
            <Card.Img variant="top" src={breath} />
            <Card.Body>
              <Card.Title>Difficulty breathing</Card.Title>
              <Card.Text>
                Around 1 out of every 6 people who gets COVID-19 becomes
                seriously ill and develops difficulty breathing or shortness of
                breath.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    <Footer />
    </>
  );
};

export default Symptoms;
