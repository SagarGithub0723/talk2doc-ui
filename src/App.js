import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Home from './components/Home';
import Registration from './components/Registration';
import DoctorRegistration from './components/doctors/DoctorRegistration';
import DoctorDetails from './components/doctors/DoctorDetails';
import PatientDetails from './components/patients/PatientDetails';
import PatientRegistration from './components/patients/PatientRegistration';
import { DOCTOR_NAV, DOCTOR_REG_NAV, PATIENT_NAV, PATIENT_QUERY_NAV, PATIENT_REG_NAV } from './utility/Constants';
import { createContext, useReducer } from 'react';
import { initialState, reducer } from './reducer/UseReducer';
import Logout from './components/Logout';
import PatientQuery from './components/patients/PatientQuery';
import UpdatePatientQuery from './components/patients/UpdatePatientQuery';

export const UserContext = createContext();
  
function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
    
  return (
    <>
    <UserContext.Provider value={{state, dispatch}}>

    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/registration' element={<Registration />} />
          <Route path={DOCTOR_REG_NAV} element= {<DoctorRegistration />}/>
          <Route path={PATIENT_REG_NAV} element= {<PatientRegistration />}/>
          <Route path={DOCTOR_NAV} element= {<DoctorDetails />}/>
          <Route path={PATIENT_NAV} element= {<PatientDetails />}/>
          <Route path={PATIENT_QUERY_NAV} element= {<PatientQuery />}/>
          <Route path='/patient/query/:id' element = {<UpdatePatientQuery />} />
        </Routes>
      </BrowserRouter>
      
    </div>
    </UserContext.Provider>
    
    </>
  );
}

export default App;
