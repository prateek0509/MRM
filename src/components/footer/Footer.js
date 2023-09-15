import React from 'react'
import {Navbar,Container} from 'react-bootstrap'
import './Footer.css'

const Footer = () => {
  return (
    <div>
        <Navbar className="footer">
      <Container>
        <Navbar.Brand href="#home" style={{color:"#fff"}}>Copyright 2023 All Rights Reserved</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className='mx-3' style={{color:"#fff"}}>
            Terms & Conditions
          </Navbar.Text>
          <Navbar.Text className='mx-3' style={{color:"#fff"}}>
            Help Center
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
    </div>
  )
}

export default Footer