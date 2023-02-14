import React from 'react'
import {Navbar,Container,Nav} from "react-bootstrap"
import logo1 from "./../../imgs/logoM.png";
import "./Navs.css"
function Navs() {
  return (
  
  <Navbar  expand="lg">
      <Container>
        <Navbar.Brand href="#home">
        <img className="logo" src={logo1} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About Us </Nav.Link>
            <Nav.Link href="#pricing">Explore food</Nav.Link>
            <Nav.Link href="#home">Review</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#features">FAG</Nav.Link>
            <Nav.Link id="number">01033993202</Nav.Link>

          </Nav>
         
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    
  )
}

export default Navs
