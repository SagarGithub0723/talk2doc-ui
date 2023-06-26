import React from 'react';
import logo from '../img/Talk2DocLogo.jpg';

const Navbar = () => {
  
  return (
    <div className="bg-gray-200">
      <div className='inset-y-0 right-0'>
        <img src={logo} alt='logo' width={70} height={70}></img>        
      </div>   
      
    </div>
  )
}

export default Navbar;