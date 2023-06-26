/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const login = (e) => {
    e.preventDefault();
    navigate("/login");
};
  return (
    <div className='absolute inset-y-10 right-0'>
        <ul className="mr-auto flex flex-col lg:flex-row">
          <li className="mb-4 lg:mb-0 lg:pr-2 px-20" >
            <a className="block hover:text-blue-700 text-blue-500 lg:p-2" href="#!">Home</a>
          </li>
          <li className="mb-4 lg:mb-0 lg:pr-2 px-20" >
            <a className="block hover:text-blue-700 text-blue-500 lg:p-2" href="#!">Appointment</a>
          </li>
          <li className="mb-4 lg:mb-0 lg:pr-2 px-20">
            <a className="block hover:text-blue-700 text-blue-500 lg:p-2 hover:cursor-pointer transition" onClick={(e) => login(e)}>Login</a>
          </li>
          <li className="mb-4 lg:mb-0 lg:pr-2 px-20">
            <a className="block hover:text-blue-700 text-blue-500 lg:p-2 hover:cursor-pointer" onClick={(e) => navigate("/registration")}>Registration</a>
          </li>
          <li className="mb-4 lg:mb-0 lg:pr-2 px-20">
            <a className="block hover:text-blue-700 text-blue-500 lg:p-2" href="#!"
                >Contact us</a>
          </li>
          <li className="mb-4 lg:mb-0 lg:pr-2 px-20">
            <a className="block hover:text-blue-700 text-blue-500 lg:p-2" href="#!">About us</a>
          </li>
        </ul>
      </div>
      
  )
}

export default Home;