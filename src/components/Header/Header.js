import React from 'react';
import { Container, Nav,  Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css'
// import logo from '../../images/travel'
import img from '../../images/logo.png'


const Header = () => {
  const {user, logOut}= useAuth()
  return (
    <div>
      <Navbar className="header fixed-top"  expand="lg">
  <Container fluid>
    <Navbar.Brand href="#" className="text-primary fs-3 fw-bold">
      <img src={img} alt="" className="mb-2" width="120px" /></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="ms-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <NavLink
         to="/home"
         activeStyle={{
          fontWeight: "bold",
          color: "crimson"
        }}
        >HOME
        </NavLink>

        <NavLink
         to="/aboutUs"
         activeStyle={{
          fontWeight: "bold",
          color: "crimson"
        }}
        >ABOUT
        </NavLink>

        <NavLink
         to="/club"
         activeStyle={{
          fontWeight: "bold",
          color: "crimson"
        }}
        >CLUB
        </NavLink>
        <NavLink
         to="/wellness"
         activeStyle={{
          fontWeight: "bold",
          color: "crimson"
        }}
        >WELLNESS
        </NavLink>


       {user?.email && <NavLink  to="/addService" activeStyle={{
          fontWeight: "bold",
          color: "crimson"
        }}>AddService</NavLink>}
       {user?.email && <NavLink  to="/myOrder" activeStyle={{
          fontWeight: "bold",
          color: "crimson"
        }}>MyBooking</NavLink>} 
       {user?.email && <NavLink  to="/manageBooking" activeStyle={{
          fontWeight: "bold",
          color: "crimson"
        }}>ManageBooking</NavLink>} 

       {user?.email && <p className="loged text-primary fw-bold me-2">Hello {user.displayName}</p>}

        {user?.email?
        <NavLink onClick={logOut}  to="">Logout</NavLink>:
        <NavLink  to="/login">Login</NavLink>
        
        }
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  );
};

export default Header;