import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink, Navigate } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            
            <NavLink  to="/">
              <button className="">Home</button>
            </NavLink>
            <NavLink to="/about">
              <button className=" mx-2">About</button>
            </NavLink>
            <NavLink to="/contact">
              <button>Contact</button>
            </NavLink>
            <NavLink to="/music">
              <button className="mx-2">Music</button>
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
