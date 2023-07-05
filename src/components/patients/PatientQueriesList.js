/* eslint-disable jsx-a11y/anchor-is-valid */
import { useNavigate } from 'react-router-dom';

const PatientQueriesList = ({query}) => {
    const navigate = useNavigate();
    const editQuery = (e, id) => {
        e.preventDefault();
        navigate(`/patient/query/${id}`);
    };
    
  return (
    <tr key={query.id}>
        <td className='text-left px-3 py-2 whitespace-nowrap'>
            <div className='text-sm text-gray-500'>{query.id}</div>
        </td>
        <td className='text-left px-3 py-2 whitespace-nowrap'>
            <div className='text-sm text-gray-500'>{query.queryDescription}</div>
        </td>
        <td className='text-left px-3 py-2 whitespace-nowrap'>
            <div className='text-sm text-gray-500'>{query.queryRelatedWith}</div>
        </td>
        <td className='text-left px-3 py-2 whitespace-nowrap'>
            <div className='text-sm text-gray-500'>{query.patientName}</div>
        </td><td className='text-left px-3 py-2 whitespace-nowrap'>
            <div className='text-sm text-blue-500'>{query.queryStatus}</div>
        </td>
        <td className='text-right px-5 py-2 whitespace-nowrap font-medium text-sm space-x-2'>
            <a
            onClick={(e, id) => editQuery(e, query.id)}
            className='rounded bg-blue-400 hover:bg-blue-600 px-0.5 py-0.2 hover:cursor-pointer'>
                Edit
            </a>            
        </td> 
    </tr>
  )

}

export default PatientQueriesList