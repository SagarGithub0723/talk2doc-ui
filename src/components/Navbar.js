/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useContext, useState } from 'react';
import logo from '../img/Talk2DocLogo.jpg';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';
import Logout from './Logout';

const Navbar = () => {
  const {state, dispatch} = useContext(UserContext);
  const navigate = useNavigate();
  const [showModal, setshowModal] = useState(false);
  const login = (e) => {
    e.preventDefault();
    navigate("/login");
  };
  const logout = (e) => {
    e.preventDefault();
    navigate("/logout");
  };
  const RenderMenu = () =>{
    if(state === "doctor") {
      return(
        <>
          <li className="text-yellow-600 hover:text-blue-600" >
            <a onClick={(e) => navigate("/home")}>Home</a>
          </li>
                   
          <li className="text-yellow-600 hover:text-blue-600" >
            <a href="#!">About us</a>
          </li>
          <li className="text-yellow-600 hover:text-blue-600" >
            <a href="#!">Contact us</a>
          </li>
          <li className="text-white-600 hover:text-red-600" >
            <button onClick={() => setshowModal(true)}>Logout</button>
          </li>
        </>
      )
    } else if(state === "patient") {
      return(
        <>
          <li className="text-yellow-600 hover:text-blue-600" >
            <a onClick={(e) => navigate("/home")}>Home</a>
          </li>
          <li className="text-yellow-600 hover:text-blue-600" >
            <a href="#!">Book Appointment</a>
          </li>          
          <li className="text-yellow-600 hover:text-blue-600" >
            <a href="#!">About us</a>
          </li>
          <li className="text-yellow-600 hover:text-blue-600" >
            <a href="#!">Contact us</a>
          </li>
          <li className="text-white-600 hover:text-red-600" >
            <button onClick={() => setshowModal(true)}>Logout</button>
          </li>
          
        </>
      )
    } else {
      return (
        <>
          <li className="text-yellow-600 hover:text-blue-600" >
            <a onClick={(e) => navigate("/home")}>Home</a>
          </li>
          <li className="text-yellow-600 hover:text-blue-600" >
            <a href="#!">Book Appointment</a>
          </li>          
          <li className="text-yellow-600 hover:text-blue-600" >
            <a href="#!">About us</a>
          </li>
          <li className="text-yellow-600 hover:text-blue-600" >
            <a href="#!">Contact us</a>
          </li>
          <li className="text-white-600 hover:text-red-600" >
            <button onClick={(e) => login(e)}>Login</button>
          </li>
        </>
      )
    }
  }
  return (
    <Fragment>
      <div className="bg-gray-100 justify-between px-4 md:items-center md:flex md:px-8">
        <div>
          <img src={logo} alt='logo' width={50} height={50}></img>
        </div>       
        <div>
          <ul className="text-sm items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 hover:cursor-pointer">
            <RenderMenu />
          </ul>
        </div>
      </div>
      <Logout isVisible={showModal} onClose={() =>setshowModal(false)}/>
    </Fragment>
  )
}

export default Navbar;