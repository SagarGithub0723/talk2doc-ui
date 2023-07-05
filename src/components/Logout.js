/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';

const Logout = ({isVisible, onClose}) => {
    const {state, dispatch} = useContext(UserContext);
    const navigate = useNavigate();
    const handleClose = (e) =>{
        if(e.target.id === "wrapper") {
            onClose();
        }
    };
    const logout = () =>{
        onClose();
        dispatch({type: "USER", payload: ""});
        window.alert("Logout Successful");
        navigate("/home")
        
    }
    if(isVisible) {
        return (
        <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'
            id='wrapper' onClick={handleClose}>
            <div className='flex flex-col'>
                <button className='text-white text-xl place-self-end' onClick={() => onClose()}>X</button>
                <div className='rounded bg-white p-2'>
                    <div>
                        <p>Do you really want to logout !!!</p>
                        <button onClick={() => logout() } className='rounded cursor-pointer font-serif text-red-600 bg-gray-200 px-2'> Click Here</button>
                    </div>            
                </div>                
            </div>
        </div>
        )
    } else {
        return null
    }
}

export default Logout;