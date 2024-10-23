import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import RegistrationPage from './components/RegistrationPage';
import AccountPage from './components/AccountPage';
import AccountOverviewPage from './components/AccountOverviewPage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegistrationPage />} />
                <Route path="/account" element={<AccountPage />} />
                <Route path="/account-overview" element={<AccountOverviewPage />} />
            </Routes>
        </Router>
    );
};

export default App;
