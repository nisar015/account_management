import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegistrationPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        navigate('/');
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <form onSubmit={handleRegister} className="w-50">
                <h2 className="mb-4">Register</h2>
                <div className="form-group mb-3">
                    <label>Email address</label>
                    <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    autoComplete="username"
                />
                </div>
                <div className="form-group mb-3">
                    <label>Password</label>
                    <input
    type="password"
    className="form-control"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    required
    autoComplete="new-password"
/>
                </div>
                <div className="form-group mb-3">
                    <label>Confirm Password</label>
                    <input
    type="password"
    className="form-control"
    value={confirmPassword}
    onChange={(e) => setConfirmPassword(e.target.value)}
    required
    autoComplete="new-password"
/>

                </div>
                <button type="submit" className="btn btn-primary w-100">Register</button>
                <div className="mt-3">
                    <p>Already have an account? <a href="/">Login here</a></p>
                </div>
            </form>
        </div>
    );
};

export default RegistrationPage;
