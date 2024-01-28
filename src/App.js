import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './containers/Auth/Login';
import ManageUser from './containers/System/ManageUser';
import HomePage from './containers/Home/HomePage';
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/login" Component={Login} />
                    <Route path="/manage-users" Component={ManageUser} />
                    <Route path="/" Component={HomePage} />
                    {/* Add other routes as needed */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
