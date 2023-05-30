import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import {} from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { Card } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Navbar
        fixed="top"
        variant="light"
        bg="light"
        expand="lg"
        className="border-bottom border-main border-5"
      >
        <Container>
          <Navbar.Brand className="pb-3">
            <img
              src="/imgs/drewbaccologo.svg"
              width="400"
              height="100"
              className="d-inline-block align-top"
              alt="Drewbacco logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end pb-3"
          >
            <Nav.Link href="tel:(254)%20717-5989">
              <Icon.Telephone className="icon-main" />
              <Navbar.Text>(254) 717-5989</Navbar.Text>
            </Nav.Link>
            <Nav.Link href="mailto:andrewb@drewbacco.com">
              <Icon.Envelope className="icon-main" />
              <Navbar.Text>andrewb@drewbacco.com</Navbar.Text>
            </Nav.Link>
            <Navbar.Text>
              <Icon.Clock className="icon-main" />
              Mon - Sat: 7am - 8pm
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <main>
        <Container
          fluid
          className="bg-main border-bottom border-main border-5 pt-5"
        >
          <Row className="mt-5 justify-content-center xxs-no-margin">
            <Col lg="auto" className="text-center mt-5 xxs-no-margin">
              <Card className="border-5 hero-card p-3 mt-5 border border-5">
                <h1>Drewbacco Lawn Care</h1>
                <p>Affordable Pricing, Timely Service, Quality Work</p>
                <Button
                  variant="outline-main"
                  size="lg"
                  className="btn outline-main"
                >
                  Contact Us Now
                </Button>
              </Card>
            </Col>
          </Row>
        </Container>
        <Container className="negative-margin">
          <Row className="mt-5 justify-content-center">
            <Col lg="4" md="8" className="text-center mt-5">
              <Card>
                <Card.Img src="/imgs/mowing.jpg"></Card.Img>
                <Card.Body>
                  <Card.Title>
                    <h2>Lawn Care</h2>
                  </Card.Title>
                  <Card.Text>
                    Mowing, Fertilizing, and Weed control whatever you need!
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="4" md="8" className="text-center mt-5">
              <Card>
                <Card.Img src="/imgs/maintenance.jpg"></Card.Img>
                <Card.Body>
                  <Card.Title>
                    <h2>Yard Maintenance</h2>
                  </Card.Title>
                  <Card.Text>
                    We'll maintain your lawn to ensure its health and
                    appearance.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="4" md="8" className="text-center mt-5">
              <Card>
                <Card.Img src="/imgs/restoration.jpg"></Card.Img>
                <Card.Body>
                  <Card.Title>
                    <h2>Lawn Restoration</h2>
                  </Card.Title>
                  <Card.Text>
                    Need a little more TLC than usual? We'll get you that lush
                    green yard you've always wanted!
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
}

export default App;
