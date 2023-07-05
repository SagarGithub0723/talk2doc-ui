import { raise_query_validation, query_related_validation } from '../../utility/Validations';
import { Input } from '../input';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import PatientService from '../../services/PatientService';
import { PATIENT_NAV } from '../../utility/Constants';
import { mobileNo, userName } from '../Login';

const PatientQuery = () => {
  
  const methods = useForm();
  const navigate = useNavigate();
  const raiseQuery = methods.handleSubmit(queryData =>{
    queryData = {...queryData, mobileNo: mobileNo, patientName:userName, queryStatus: "Open"}
    console.log(queryData);
    PatientService.savePatientQuery(queryData).then((response) => {
      navigate(PATIENT_NAV);
    }).catch((error) => {
      console.log(error);
      window.alert("Input data is invalid !!!");
    });
    methods.reset();
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
            Raise your Query
        </h2>
        <div className='items-center justify-center h-14 w-full my-5'>
          <Input {...query_related_validation} />
        </div>
        <div className='items-center justify-center h-29 w-full my-4'>
          <Input {...raise_query_validation} />
        </div>
        
        <div className='items-center justify-center h-14 w-full my-4 space-x-4 pt-4'>
            <button 
                onClick={raiseQuery}
                className='block rounded text-white font-semibold bg-green-400 hover:bg-green-700 h-10 w-96 border mt-1 px-2 py-2'>
                Submit
            </button>
                        
        </div>
      </div>  
    </div>
    </form>
    </FormProvider>
  )
}

export default PatientQuery