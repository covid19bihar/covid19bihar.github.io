import React from "react";
import { Switch, Route, Redirect, Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Home from "./components/Home/Home";
import Faq from "./components/Home/Faq";
import Prevention from "./components/Home/Prevention";
import Symptoms from "./components/Home/Symptoms";

const App = () => {
  return (
    <>
      <Navbar
        sticky="top"
        className="px-xl-5"
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
      >
        <Navbar.Brand
          as={Link}
          to="/"
          style={{ fontSize: "28px", fontFamily: "'Teko', sans-serif" }}
          className="text-info"
        >
          Covid19Bihar
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link eventKey={1} as={Link} to="/">
              Home
            </Nav.Link>

            <Nav.Link eventKey={4} as={Link} to="/symptoms">
              Symptoms
            </Nav.Link>

            <Nav.Link eventKey={5} as={Link} to="/prevention">
              Prevention
            </Nav.Link>

            <Nav.Link eventKey={6} as={Link} to="/faq">
              Faq
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Switch>
        <Route exact path="/faq">
          <Faq />
        </Route>

        <Route exact path="/symptoms">
          <Symptoms />
        </Route>
        <Route exact path="/prevention">
          <Prevention />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route>
          <Redirect to="/" path="/" />
        </Route>
      </Switch>
    </>
  );
};

export default App;
