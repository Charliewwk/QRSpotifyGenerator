import React from "react";
import { Container, Navbar } from "react-bootstrap";
import logo from '../../assets/spotify_icon.svg'

const Header = () => {
  return (
    <Navbar className="bg-body-tertiary fixed-top">
      <Container>
        <Navbar.Brand href="#home">
        <img
            src={logo}
            alt="Logo"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          QR</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
