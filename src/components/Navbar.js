import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .navbar {
    background-color: white;
  }

  .navbar-brand,
  .navbar-nav .nav-link {
    color: black;

    &:hover {
      text-decoration: underline;
      color: rgb(255, 26, 26);
    }
  }
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg" className="border-bottom">
      <Navbar.Brand>Taha Zulfiqar</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/About">About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/Contact">Contact</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);
