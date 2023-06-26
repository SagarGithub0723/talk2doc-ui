import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Home from './components/Home';
import Registration from './components/Registration';
import DoctorRegistration from './components/doctors/DoctorRegistration';
import DoctorDetails from './components/doctors/DoctorDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/registration' element={<Registration />} />
          <Route path='/doctorRegistration' element= {<DoctorRegistration />}/>
          <Route path='/doctor' element= {<DoctorDetails />}/>
          
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
