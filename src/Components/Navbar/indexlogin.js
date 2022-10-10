
import React from 'react';
import go from './go.png';

import { Navigate } from "react-router-dom";
import {NavLink as ReactLink, useNavigate} from "react-router-dom";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
  
const indexlogin = () => {
  const navigate=useNavigate();
  

  const user= JSON.parse(localStorage.getItem('user-info'))
  
  console.warn(user)
  function logout()

{

  localStorage.clear();

  navigate('/')

}
  return (
    <>
      <Nav>
        <Bars />
        <NavLink to='/' activeStyle>
        <img src={go} width="80" height="70"></img>
        </NavLink>
        
        <NavMenu>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/contact' activeStyle>
            Contact
          </NavLink>
          {/* <NavLink to='/sign-up' activeStyle>
            Sign Up
          </NavLink>
          <NavLink to='/sign-in' activeStyle>
            Sign In
          </NavLink> */}
          
          { <NavLink to='/' activeStyle>
            Log out
          </NavLink> }
          
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        {/* <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn> */}
      </Nav>
     
    </>
  );
  
};


  
export default indexlogin;