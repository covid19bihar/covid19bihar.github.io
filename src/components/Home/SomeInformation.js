import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const SomeInformation = ({
  data: { confirm, active, recovered, deaths },
  totalTest,
}) => {
  // p -> Bihar population 2019
  const p = 119520000;

  const confirmPerMillion = parseFloat((confirm / p) * 1000000).toFixed(2);
  const activeRate = parseFloat((active / confirm) * 100).toFixed(2);
  const recoverRate = parseFloat((recovered / confirm) * 100).toFixed(2);
  const deathsRate = parseFloat((deaths / confirm) * 100).toFixed(2);
  const testRate = Math.round((totalTest / p) * 1000000);

  return (
    <div className="container-fluid myContainer my-4">
      <Card>
        <Card.Header>Some Information</Card.Header>
        <Row>
          <Col sm={12} md={12}>
            <Card.Body className="m-3  alert-danger rounded-lg">
              <Card.Title>Confirmed Per Million</Card.Title>
              <Card.Text>
                <span className="h4">{confirmPerMillion}</span>
                <br></br>
                <span>
                  {Math.round(confirmPerMillion)} out of every 1 million people
                  in Bihar have tested positive for the virus.
                </span>
              </Card.Text>
            </Card.Body>
          </Col>

          <Col sm={12} md={12}>
            <Card.Body className="alert-primary mx-3  rounded-lg">
              <Card.Title>Active Rate</Card.Title>
              <Card.Text>
                <span className="h4">{activeRate}%</span>
                <br></br>
                <span className="mt-2">
                  For every 100 confirmed cases, {Math.round(activeRate)} are
                  currently infected
                </span>
              </Card.Text>
            </Card.Body>
          </Col>

          <Col sm={12} md={12}>
            <Card.Body className="alert-success m-3  rounded-lg">
              <Card.Title>Recovery Rate</Card.Title>
              <Card.Text>
                <span className="h4">{recoverRate}%</span>
                <br></br>
                <span>
                  For every 100 confirmed cases, {Math.round(recoverRate)} have
                  recovered from the virus.
                </span>
              </Card.Text>
            </Card.Body>
          </Col>

          <Col sm={12} md={12}>
            <Card.Body className="alert-secondary mx-3  rounded-lg">
              <Card.Title>Deaths Rate</Card.Title>
              <Card.Text>
                <span className="h4">{deathsRate}% </span>
                <br></br>
                <span>
                  For every 100 confirmed cases, {Math.round(deathsRate)} have
                  unfortunately passed away from the virus.
                </span>
              </Card.Text>
            </Card.Body>
          </Col>

          <Col sm={12} md={12}>
            <Card.Body className="alert-blue m-3  rounded-lg">
              <Card.Title>Deaths Rate</Card.Title>
              <Card.Text>
                <span className="h4"> &asymp;{testRate}</span>
                <br></br>
                <span>
                  For every 1 million people in Bihar, {testRate} people were
                  tested.
                </span>
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default SomeInformation;
