import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from '../components/Auth/Login';
import Signup from '../components/Auth/Signup';
import UserDashboard from '../components/Dashboard/UserDashboard';
import AdminDashboard from '../components/Dashboard/AdminDashboard';
import Header from '../components/Header';

const AppRoutes = () => {
    const isLoggedIn = !!localStorage.getItem('loggedInUser');

    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Navigate to={isLoggedIn ? "/dashboard" : "/signup"} />} />
                <Route path="/signup" element={!isLoggedIn ? <Signup /> : <Navigate to="/dashboard" />} />
                <Route path="/login" element={!isLoggedIn ? <Login /> : <Navigate to="/dashboard" />} />
                <Route path="/dashboard" element={isLoggedIn ? <UserDashboard /> : <Navigate to="/login" />} />
                <Route path="/admin" element={isLoggedIn ? <AdminDashboard /> : <Navigate to="/login" />} />
                <Route path="*" element={<Navigate to={isLoggedIn ? "/dashboard" : "/signup"} />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
