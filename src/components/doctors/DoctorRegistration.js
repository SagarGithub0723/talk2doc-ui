import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import RegistrationService from '../../services/RegistrationService';
import { DOCTOR_NAV } from '../../utility/Constants';
import { FormProvider, useForm } from 'react-hook-form';
import { Input } from '../input';
import { 
  first_name_validation,
  last_name_validation,
  email_validation,
  mobile_no_validation,
  doc_speciality_validation,
  area_pin_code_validation,
  password_validation,
  confirm_password_validation
} from '../../utility/Validations';

function DoctorRegistration() {
    const navigate = useNavigate();
    const methods = useForm();
    const [successMsg, setsuccessMsg] = useState("");

    const handleChange = (message) =>{
        setsuccessMsg(message);
    };

    const saveDoctorDetails = methods.handleSubmit(docDetails =>{
        RegistrationService.saveDoctorDetails(docDetails).then((response) => {
            console.log(response.data);   
            navigate(DOCTOR_NAV);
        }).catch((error) => {
            console.log(error);
        });
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
        className="container">
        <div className='flex justify-center items-center bg-sky-100 w-full'>
          <div className='px-20 py-8 w-2/5'> 
            <h2 className='font-bold text-2xl tracking-wider'>
                Doctor Registration
            </h2>
            <div className='items-center justify-center h-16 w-full my-4'>
              <Input
                {...first_name_validation}
              /> 
            </div>
            <div className='items-center justify-center h-16 w-full my-4'>
              <Input
                {...last_name_validation}
              />              
            </div>
            <div className='items-center justify-center h-16 w-full my-4'>
              <Input 
                {...email_validation}
              />              
            </div>
            <div className='items-center justify-center h-16 w-full my-4'>
              <Input {...mobile_no_validation} />              
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
              <Input {...doc_speciality_validation} />              
            </div>
            <div className='items-center justify-center w-full h-10 py-2'>
              <label className='block text-gray-600 text-sm font-normal text-left mt-4'>Gender</label>
              <input 
                  type='radio' 
                  className='py-2' 
                  name='gender'
                  value="M"
                  {...methods.register("gender")} />
              <label className='text-gray-600 text-sm font-normal text-left px-2 py-2'>Male</label>
              <input 
                  type='radio' 
                  className='py-2' 
                  name='gender'
                  value='F'
                  {...methods.register("gender")}/>
              <label className='text-gray-600 text-sm font-normal text-left px-2 py-2'>Female</label>
            </div>
            <div className='items-center justify-center h-16 w-full my-4'>
              <Input {...area_pin_code_validation} />              
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
              <Input {...password_validation} />              
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
              <Input {...confirm_password_validation} />              
            </div>
            <div className='items-center justify-center h-14 w-full my-4 space-x-4 pt-4'>
              <button 
                  onClick={saveDoctorDetails}
                  className='rounded text-white font-semibold bg-blue-400 hover:bg-blue-700 px-2 py-0.5'>
                  Submit
              </button>        
            </div>
           </div>  
        </div>
      </form>
    </FormProvider>
  )
}

export default DoctorRegistration