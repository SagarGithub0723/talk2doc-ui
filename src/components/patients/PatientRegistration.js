import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { PATIENT_NAV } from '../../utility/Constants';
import RegistrationService from '../../services/RegistrationService';
import { FormProvider, useForm } from 'react-hook-form';
import { Input } from '../input';
import { 
  first_name_validation,
  last_name_validation,
  email_validation,
  mobile_no_validation,
  area_pin_code_validation,
  password_validation,
  confirm_password_validation,
  age_validation
} from '../../utility/Validations';

function PatientRegistration() {
  
    const navigate = useNavigate();
    const methods = useForm();
    const [successMsg, setsuccessMsg] = useState("");

    const handleChange = (message) =>{
      setsuccessMsg(message);
    };

    const savePatientDetails = methods.handleSubmit(patientDetails =>{
        console.log(patientDetails);   
        RegistrationService.savePatientDetails(patientDetails).then((response) => {
          console.log(response.data);   
          navigate(PATIENT_NAV);
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
        patientDetails = {e => e.preventDefault()}
        noValidate
        autoComplete="off"
        className="container">
        <div className='flex justify-center items-center bg-sky-100'>
          <div className='px-20 py-8 w-2/5'> 
            <h2 className='font-bold text-2xl tracking-wider'>
                Patient Registration
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
              <Input {...age_validation} />
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
                  onClick={savePatientDetails}
                  className='rounded text-white font-semibold bg-blue-400 hover:bg-blue-700 px-2 py-0.5'>
                  Submit
              </button>        
            </div>
           </div>  
        </div>
      </form>
    </FormProvider>
  //   <div className='flex justify-center items-center bg-sky-100'>
  //     <div className='px-20 py-8 '>
  //       <div className='font-bold text-2xl tracking-wider'>
  //           Patient Registration
  //       </div>
  //       <div className='items-center justify-center h-14 w-full my-4'>
  //           <label className='block text-gray-600 text-sm font-normal text-left'>First Name</label>
  //           <input 
  //               type='text'
  //               name='firstName'
  //               value={patientDetails.firstName}
  //               onChange={(patientReg) => handleChange(patientReg)}
  //               className='h-10 w-96 border mt-1 px-2 py-2'>                    
  //           </input>
  //       </div>
  //     <div className='items-center justify-center h-14 w-full my-4'>
  //       <label className='block text-gray-600 text-sm font-normal text-left'>Last Name</label>
  //       <input 
  //           type='text'
  //           name='lastName'
  //           value={patientDetails.lastName}
  //           onChange={(patientReg) => handleChange(patientReg)}
  //           className='h-10 w-96 border mt-1 px-2 py-2'>                    
  //       </input>
  //     </div>
  //     <div className='items-center justify-center h-14 w-full my-4'>
  //       <label className='block text-gray-600 text-sm font-normal text-left'>Email ID</label>
  //       <input 
  //           type='email'
  //           name='emailId'
  //           value={patientDetails.emailId}
  //           onChange={(patientReg) => handleChange(patientReg)}
  //           className='h-10 w-96 border mt-1 px-2 py-2'>                    
  //       </input>
  //     </div>
  //     <div className='items-center justify-center h-14 w-full my-4'>
  //       <label className='block text-gray-600 text-sm font-normal text-left'>Mobile</label>
  //       <input 
  //           type='text'
  //           name='mobileNo'
  //           value={patientDetails.mobileNo}
  //           onChange={(patientReg) => handleChange(patientReg)}
  //           className='h-10 w-96 border mt-1 px-2 py-2'>                    
  //       </input>
  //     </div>
  //     <div className='items-center justify-center h-14 w-full my-4'>
  //       <label className='block text-gray-600 text-sm font-normal text-left'>Age</label>
  //       <input 
  //           type='number'
  //           name='age'
  //           value={patientDetails.age}
  //           onChange={(patientReg) => handleChange(patientReg)}
  //           className='h-10 w-96 border mt-1 px-2 py-2'>                    
  //       </input>
  //     </div>
  //     <div className='items-center justify-center w-full'>
  //       <label className='block text-gray-600 text-sm font-normal text-left mt-4'>Gender</label>
  //       <td>
  //       <input 
  //           type='radio' 
  //           className='px-2 py-2' 
  //           name='gender'
  //           value="M"
  //           onChange={(e) => handleChange(e)} />
  //       <label className='text-gray-600 text-sm font-normal text-left px-2 py-2'>Male</label>
  //       </td>
  //       <td className='w-48'>
  //       <input 
  //           type='radio' 
  //           className='px-2 py-2' 
  //           name='gender'
  //           value='F'
  //           onChange={(e) => handleChange(e)} />
  //       <label className='text-gray-600 text-sm font-normal text-left px-2 py-2'>Femal</label>
  //       </td>
  //     </div>
  //     <div className='items-center justify-center h-14 w-full my-2'>
  //       <label className='block text-gray-600 text-sm font-normal text-left'>Area Pin Code</label>
  //       <input 
  //           type='text'
  //           name='areaPinCode'
  //           value={patientDetails.areaPinCode}
  //           onChange={(patientReg) => handleChange(patientReg)}
  //           className='h-10 w-96 border mt-1 px-2 py-2'>                    
  //       </input>
  //     </div>
  //     <div className='items-center justify-center h-14 w-full my-5'>
  //       <label className='block text-gray-600 text-sm font-normal text-left'>Pw Pin</label>
  //       <input 
  //           type='password'
  //           name='pw_pin'
  //           value={patientDetails.pw_pin}
  //           onChange={(patientReg) => handleChange(patientReg)}
  //           className='h-10 w-96 border mt-1 px-2 py-2'>                    
  //       </input>
  //     </div> 
  //     <div className='items-center justify-center h-14 w-full my-5'>
  //       <label className='block text-gray-600 text-sm font-normal text-left'>Confirm Pw Pin</label>
  //       <input 
  //           type='password'
  //           name='conf_pw_pin'
  //           value={patientDetails.conf_pw_pin}
  //           onChange={(patientReg) => handleChange(patientReg)}
  //           className='h-10 w-96 border mt-1 px-2 py-2 bg-gray-50'>                    
  //       </input>
  //     </div> 
  //     <div className='items-center justify-center h-14 w-full my-4 space-x-4 pt-4'>
  //         <button 
  //             onClick={savePatientDetails}
  //             className='rounded text-white font-semibold bg-blue-400 hover:bg-blue-700 px-2 py-0.5'>
  //             Submit
  //         </button>        
  //     </div>
  //   </div>  
  // </div>  

  )
}

export default PatientRegistration