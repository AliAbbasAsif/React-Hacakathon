import React from 'react'
import {
    BrowserRouter as Router,
    Link,
    Route,
    Routes
} from "react-router-dom";
import Admin from '../Pages/AdminScreens/Admin';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Profile from '../Pages/NavbarScreens/Profile';
import SignUp from '../Pages/SignUp'
import Tester from '../Pages/Tester'


function AppRouter() {
    return (
        <Router>
            <div>

                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/signup' element={<SignUp />} />
                    <Route path='admin/*' element={<Admin />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/test' element={<Tester />} />
                    <Route path='/profile' element={<Profile />} />
                    {/* <Route path='/profile' element={<Profile />} />
                    <Route path='/account' element={<Account />} />
                    <Route path='/dashboard' element={<Dashboard />} /> */}
    
                </Routes>
            </div>
        </Router>

    )
}

export default AppRouter