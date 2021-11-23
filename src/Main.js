import React from "react";
import Profilephoto from "./profile/ProfilPhoto";
import Name from "./profile/FullName";
import Adress from "./profile/Address";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Main() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">PROFILE PAGE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Message</Nav.Link>
            <NavDropdown title="Profile" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Information</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                About us
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Exit
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Profilephoto />
      <Name />
      <Adress />
      <Button id="changephotobtn" variant="primary">
         My profile
      </Button>
    </>
  );
}