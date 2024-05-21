import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './containers/Auth/Login/Login';
import ManageUser from './containers/System/ManageUser';
import HomePage from './containers/Home/HomePage';
import SpecialtyPage from './containers/Specialty/SpecialtyList';
import Musculoskeletal from './containers/Musculoskeletal/Musculoskeletal';
import DoctorPage from './containers/FamousDoctor/Doctor';
import Nerve from './containers/Nerve/Nerve';
import Digest from './containers/Digest/Digest';
import Heart from './containers/Heart/Heart';
import FacilityPage from './containers/Facility/Facility';
import MedicalMethod from './containers/MedicalMethod/MedicalMethod';
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/login" Component={Login} />
                    <Route path="/manage-users" Component={ManageUser} />
                    <Route path="/" Component={HomePage} />
                    <Route path="/specialty" Component={SpecialtyPage} />
                    <Route path="/musculoskeletal" Component={Musculoskeletal} />
                    <Route path="/nerve" Component={Nerve} />
                    <Route path="/digest" Component={Digest} />
                    <Route path="/heart" Component={Heart} />
                    <Route path="/doctor-page" Component={DoctorPage} />
                    <Route path="/facility-page" Component={FacilityPage} />
                    <Route path="/medical-method" Component={MedicalMethod} />
                    {/* Add other routes as needed */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
