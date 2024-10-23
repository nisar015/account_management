// src/components/AccountOverviewPage.js

import React from 'react';
import { useNavigate } from 'react-router-dom';

const AccountOverviewPage = () => {
    const navigate = useNavigate(); 

    const handleBackToLogin = () => {
        navigate('/login'); // Navigate to the login page
    };

    return (
        <div className="container mt-5">
            <h2>Account Overview</h2>
            <p>Your account details and overview will be displayed here.</p>
            {/* Add your account details here */}
            <button className="btn btn-secondary" onClick={handleBackToLogin}>
                Back to Login
            </button>
        </div>
    );
};

export default AccountOverviewPage;
