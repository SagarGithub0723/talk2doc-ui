/* eslint-disable jsx-a11y/anchor-is-valid */
import { useNavigate } from 'react-router-dom'
import { userName, mobileNo } from '../Login'
import { useEffect, useState } from 'react';
import PatientService from '../../services/PatientService';
import PatientQueriesList from './PatientQueriesList';
const PatientDetails = () =>  {
  const navigate = useNavigate();
  const [loading, setloading] = useState(true);
  const [allQueries, setAllQueries] = useState(null);
  const [myQueries, setMyQueries] = useState(null);
  const [isMyQueries, setisMyQueries] = useState(false);
  useEffect(() => {
      const fetchData = async () => {
          setloading(true);
          try {
              const response = await PatientService.getAllQueries();
              setAllQueries(response.data);
          } catch (error) {
              console.log(error);
          }
          setloading(false);
      };
      fetchData();
  }, []);

  const onClickRaiseQuery = () =>{
    navigate("/patient/query");
  }
  const onClickMyQueries = () =>{
    setisMyQueries(true);

    setMyQueries(allQueries.filter(queries => {
      return queries.mobileNo === mobileNo;
    }));
    console.log("My Queries", myQueries)
  }
  const onClickAllQueries = () =>{
    setisMyQueries(false);

  }
  
  return (
    <>
      <div className="bg-gray-200 justify-between px-4 md:items-center md:flex md:px-4 border-spacing-10">
        <div>
          <p>Hi <h className="text-blue-600 font-semibold">{userName}</h>, Welcome to Talk2Doc !!!</p>
        </div>       
        <div>
          <a className='text-blue-800 font-sans text-sm px-2 hover:text-blue-400 cursor-pointer' onClick={onClickRaiseQuery}>Raise your query</a >
          <a className='text-blue-800 font-sans text-sm px-2 hover:text-blue-400 cursor-pointer' onClick={onClickAllQueries}>All Queries</a >
          <a className='text-blue-800 font-sans text-sm px-2 hover:text-blue-400 cursor-pointer' onClick={onClickMyQueries}>My Queries</a >
        </div>
      </div>
      <div className='container mx-auto my-4'>
        <div className='flex shadow border-b'>
          <table className='min-w-full'>
            <thead className='bg-gray-50'>
              <tr>
                <th className='text-left font-sans text-gray-500 tracking-wider px-3 py-1'>
                  Sl No
                </th>
                <th className='text-left font-medium text-gray-500 tracking-wider px-3 py-1'>
                  Query
                </th>
                <th className='text-left font-medium text-gray-500 tracking-wider px-3 py-1'>
                  Related With
                </th>
                <th className='text-left font-medium text-gray-500 tracking-wider px-3 py-1'>
                  Patient Name
                </th> 
                <th className='text-left font-medium text-gray-500 tracking-wider px-3 py-1'>
                  Status
                </th>
                <th className='text-right font-medium text-gray-500 tracking-wider px-3 py-1'>
                  Action
                </th>                         
              </tr>
            </thead>
            {!loading && !isMyQueries &&(
            <tbody className='bg-white'>
                {allQueries.map((query) =>(
                    <PatientQueriesList query={query} key={query.id}></PatientQueriesList>
                ))}
            </tbody>
            )}
            { isMyQueries &&(
            <tbody className='bg-white'>
                {myQueries.map((query) =>(
                    <PatientQueriesList query={query} key={query.id}></PatientQueriesList>
                ))}
            </tbody>
            )}
          </table>
        </div>
      </div>
    </>
  )
}

export default PatientDetails