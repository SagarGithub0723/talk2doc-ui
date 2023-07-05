/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import LoginService from '../services/LoginService';
import Util from '../utility/Util';
import { FormProvider, useForm } from 'react-hook-form';
import { Input } from './input';
import { UserContext } from '../App';
import { 
  mobile_no_validation,
  password_validation
} from '../utility/Validations';
export var userName = "";
export var mobileNo = "";

const Login = () => {
  const {state, dispatch} = useContext(UserContext)
  const navigate = useNavigate();
  const methods = useForm();
  const [successMsg, setsuccessMsg] = useState("");

  const handleChange = (message) =>{
      setsuccessMsg(message);
  };

  const validateLogin = methods.handleSubmit(login =>{
    console.log(login);   
    LoginService.validateLogin(login).then((response) => {
      dispatch({type: "USER", payload: response.data.department})
      const userNav = Util.getUserDetailsNavigation(response.data.department);
      console.log(userNav);
      userName = response.data.userName;
      mobileNo = response.data.mobileNo;
      navigate(userNav);
    }).catch((error) => {
      console.log(error);
      window.alert("Invalid Credential, Please enter correct Mobile/Pin !!!");
    })
    methods.reset();
    handleChange("Registered Successfully!!!!");
    console.log("successMsg : " + successMsg);
});

  return (
    <FormProvider {...methods}>
    <form
      docDetails = {e => e.preventDefault()}
      noValidate
      autoComplete="off"
      className="bg-sky-100">

    <div className='flex justify-center items-center bg-sky-100'>
      <div className='px-20 py-8 '>
        <h2 className='font-bold text-2xl tracking-wider'>
            Login to your account
        </h2>
        <p className="text-center text-sm text-gray-600">
            Don't have account yet? {' '}
            <Link to="/registration" className="font-sans text-sm text-blue-500 hover:text-blue-800">
                Sign up
            </Link>
        </p>
        <div className='items-center justify-center h-14 w-full my-4'>
          <Input {...mobile_no_validation} />
        </div>
        <div className='items-center justify-center h-14 w-full my-5'>
          <Input {...password_validation} />
        </div>
        <div className='items-center justify-center h-14 w-full my-4 space-x-4 pt-4'>
            <button 
                onClick={validateLogin}
                className='block rounded text-white font-semibold bg-green-400 hover:bg-green-700 h-10 w-96 border mt-1 px-2 py-2'>
                Login
            </button>
                        
        </div>
        <Link className="font-sans text-sm text-blue-500 hover:text-blue-800" href="#">
          Forgot your password?
      </Link>
      </div>  
    </div>
    </form>
    </FormProvider>
  )
};

export default Login;