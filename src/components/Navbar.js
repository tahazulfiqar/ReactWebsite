import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import styled from "styled-components";
import pdf from "../assets/Taha_Zulfiqar_Resume.pdf";

const Styles = styled.div`
  .navbar {
    background-color: white;
  }

  .navbar-brand {
    &:hover {
      text-decoration: underline;
    }
  }
  .navbar-nav .nav-link {
    font-family: "Majesti Banner", "Georgia", "Times New Roman";

    &:hover {
      text-decoration: underline;
      color: rgb(255, 26, 26);
    }
  }
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg" className="border-bottom">
      <Container>
        <Navbar.Brand href="/">Taha Zulfiqar</Navbar.Brand>
      </Container>
      <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/Contact">Contact</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href={pdf} target="_blank" rel="noopener noreferrer">
              Resume
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);
