/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import cn from 'classnames';
import { useNavigate, useParams } from 'react-router-dom';
import PatientService from '../../services/PatientService';
import { PATIENT_NAV } from '../../utility/Constants';

const UpdatePatientQuery = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [patientQuery, setpatientQuery] = useState({
        id: id,
        queryDescription: "",
        queryRelatedWith: "",
        mobileNo: "",
        patientName: "",
        queryStatus: ""
    });
    const handleChange = (e) =>{
        const value = e.target.value;
        setpatientQuery({...patientQuery, [e.target.name]: value});
    };

    useEffect(() => {
      const fetchData = async () =>{
        try {
            const response = await PatientService.getPatientQueryById(id);
            console.log("getPatientQueryById" + response.data)
            setpatientQuery(response.data);
        } catch (error) {
            console.log(error);
            
        }
      };
      fetchData();
    }, []);
    
    const updatePatientQuery = (e)=>{
        e.preventDefault();
        console.log("PatientQueryData:: " + patientQuery.queryRelatedWith)
        PatientService.updatePatientQueryById(id, patientQuery).then((response) => {
            navigate(PATIENT_NAV);
        }).catch((error) =>{
            console.log(error);
        })

    };
    const input_tailwind =
    'p-2 rounded-md w-full border border-slate-300 placeholder:opacity-60 mb-4'

    return (
     <div className='flex justify-center items-center bg-sky-100 flex-col px-20 py-8 '>
        <h2 className='font-bold text-2xl tracking-wider'>
            Update your Query
        </h2>
        <div className='items-center justify-center h-14 w-full my-5'>
                    <label htmlFor={id} className="block capitalize text-gray-600 text-sm font-normal text-left mt-4">
                        Query related with
                    </label>
                
                <input
                    className={cn(input_tailwind)}
                    id='queryRelatedWith'
                    name='queryRelatedWith'
                    type='text'
                    value={patientQuery.queryRelatedWith}
                    onChange={(e) =>handleChange(e)}
                    
                />
            
        </div>
        <div className='items-center justify-center h-14 w-full my-5'>
                    <label htmlFor={id} className="block capitalize text-gray-600 text-sm font-normal text-left mt-4">
                        Query Description
                    </label>
                <input 
                    className={cn(input_tailwind, 'min-h-[10rem] max-h-[20rem] resize-y')}
                    name ='queryDescription'
                    label ='Your Query Description'
                    type = 'textarea'
                    id = 'queryDescription'
                    multiline = {true}
                    value={patientQuery.queryDescription}
                    onChange={(e) =>{handleChange(e)}}
                    >               
                </input>
            <div className='items-center justify-between h-14 w-full my-4 space-x-4 pt-4 px-20 py-8'>
            <button 
                onClick={updatePatientQuery}
                className='rounded text-white font-semibold bg-green-400 hover:bg-green-700 h-10 w-96 border mt-1 px-2 py-2'>
                Submit
            </button>
            <button 
                onClick={() => navigate(PATIENT_NAV)}
                className='rounded text-white font-semibold bg-green-400 hover:bg-green-700 h-10 w-96 border mt-1 px-2 py-2'>
                Cancel
            </button>
                               
        </div>
        
        
      </div>  
    </div>
    )
}

export default UpdatePatientQuery