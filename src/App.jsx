import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import ListGroup from "react-bootstrap/ListGroup";
import * as Icon from "react-bootstrap-icons";
import { Form } from "react-bootstrap";
// import {} from "react-bootstrap";

function App() {
  const [formContact, setFormContact] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormContact({ ...formContact, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formContact);
  };

  return (
    <div className="App">
      <header>
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
      </header>
      <main>
        <Container
          fluid
          className="bg-hero border-bottom border-main border-5 pt-5"
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
              <Card className="border-main border-5 h-100">
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
              <Card className="border-main border-5 h-100">
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
              <Card className="border-main border-5 h-100">
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
        <Container fluid className="mt-5 carousel-container pb-5">
          <Row className="justify-content-center">
            <Col lg="4" sm="12" className="text-center mt-5">
              <Carousel>
                <Carousel.Item>
                  <img src="/imgs/carousel1.jpg" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src="/imgs/carousel2.jpg" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src="/imgs/carousel3.jpg" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src="/imgs/carousel4.jpg" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src="/imgs/carousel5.jpg" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src="/imgs/carousel6.jpg" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src="/imgs/carousel7.jpg" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src="/imgs/carousel8.jpg" />
                </Carousel.Item>
              </Carousel>
            </Col>
            <Col lg="4" sm="12" className="text-center mt-5">
              <Card className="h-100 bg-third">
                <Card.Body className="pt-5">
                  <Card.Title>
                    <h2>Our Vision</h2>
                  </Card.Title>
                  <Card.Text>
                    Drewbacco Lawn Care is a locally owned and operated company
                    that values honesty and integrity in all aspects of our
                    business. We offer a variety of lawn care and landscaping
                    services that are customizable to each individual property.
                    We take pride in the quality of our work as well as our
                    commitment to deliver outstanding results. Our local
                    services include yard service, yard maintenance, and lawn
                    restoration.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <Container className="mt-5">
          <Row className="justify-content-center">
            <Col lg="5" sm="12" className="text-center mt-5">
              <h2 className="border-bottom border-main border-4">
                Service Area
              </h2>
              <p className="pt-5">
                Servicing Groesbeck, TX and Surrounding Areas!
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="12" sm="12" className="text-center mt-5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217732.30252307357!2d-96.60042507418018!3d31.494835913756575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864f56e67fd8b2eb%3A0x1dab0f7eb7c8dce6!2sGroesbeck%2C%20TX%2076642!5e0!3m2!1sen!2sus!4v1685477889257!5m2!1sen!2sus"
                className="google-map"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Col>
          </Row>
        </Container>
        <Container fluid className="mt-5 bg-main">
          <Row className="justify-content-center">
            <Col lg="5" sm="12" className="text-center mt-5">
              <h2 className="border-bottom border-second border-4 pb-3">
                Contact Us
              </h2>
              <ListGroup>
                <ListGroup.Item className="mt-5 bg-color-main">
                  <a className="contact-link" href="tel:(254)%20717-5989">
                    <Icon.Telephone className="icon-second" />
                    (254) 717-5989
                  </a>
                </ListGroup.Item>
                <ListGroup.Item className="mt-5 bg-color-main">
                  <a
                    className="contact-link"
                    href="mailto:andrewb@drewbacco.com"
                  >
                    <Icon.Envelope className="icon-second" />
                    andrewb@drewbacco.com
                  </a>
                </ListGroup.Item>
                <ListGroup.Item className="mt-5 bg-color-main">
                  <div className="contact-link">
                    <Icon.Clock className="icon-second" />
                    Mon - Sat: 7am - 8pm
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col lg="5" sm="12" className="text-center mt-5">
              <Form className="mt-5">
                <Form.Group className="mb-3" controlId="formContact.name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter name"
                    name="name"
                    value={formContact.name}
                    onChange={(e) => {
                      handleInputChange(e);
                    }}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formContact.email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    value={formContact.email}
                    onChange={(e) => {
                      handleInputChange(e);
                    }}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formContact.phone">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="Enter phone"
                    name="phone"
                    value={formContact.phone}
                    onChange={(e) => {
                      handleInputChange(e);
                    }}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formContact.message">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter message"
                    name="message"
                    value={formContact.message}
                    onChange={(e) => {
                      handleInputChange(e);
                    }}
                  />
                </Form.Group>
                <Button
                  variant="outline-main"
                  className="btn btn-last btn-lg w-100"
                  type="submit"
                  onClick={(e) => {
                    handleSubmit(e);
                  }}
                >
                  Contact Us Now
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </main>
      <footer>
        <Container fluid className="bg-second">
          <Row className="justify-content-center">
            <Col lg="5" sm="12" className="text-center mt-5">
              <h2 className="border-bottom border-main border-4 pb-5">
                &copy; {new Date().getFullYear()} Drewbacco LLC - All Rights
                Reserved
              </h2>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default App;
