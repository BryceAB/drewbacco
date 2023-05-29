import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Button, Container, Navbar } from "react-bootstrap";

function App() {
  return (
    <>
      <Navbar
        fixed="top"
        variant="light"
        bg="light"
        expand="md"
        className="border-bottom border-main border-5"
      >
        <Container>
          <Navbar.Brand className="pb-3">
            <img
              src="/imgs/drewbaccologo.svg"
              width="320"
              height="80"
              className="d-inline-block align-top"
              alt="Drewbacco logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default App;
