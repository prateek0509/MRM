import React from 'react'
import {Navbar,Container} from 'react-bootstrap'
import './Header.css'
import Logo from "../../assets/Images/mrm_logo.png"
const Header = () => {
  return (
    <div>
        <Navbar className=" header">
      <Container>
        <Navbar.Brand href="#home" style={{color:"#fff"}}><img src={Logo} alt="" style={{height:"40px"}}/></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className='mx-3' style={{color:"#fff"}}>
            FAQ's
          </Navbar.Text>
          <Navbar.Text className='mx-3' style={{color:"#fff"}}>
            Settings
          </Navbar.Text>
          <Navbar.Text className='mx-3' style={{color:"#fff"}}>
            Log out
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
    </div>
  )
}

export default Header