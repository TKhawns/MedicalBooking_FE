import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './containers/Auth/Login';
import Home from './containers/Home/Home';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/login" Component={Login} />
                    <Route path="/" Component={Home} />
                    {/* Add other routes as needed */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
