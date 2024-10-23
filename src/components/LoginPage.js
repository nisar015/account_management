import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const apiLoginCall = (email, password) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Assuming correct email and password are hardcoded for now
                const correctEmail = 'test@example.com';
                const correctPassword = 'password';

                // Check if credentials match
                if (email === correctEmail && password === correctPassword) {
                    resolve({ success: true });
                } else {
                    reject(new Error('Invalid credentials'));
                }
            }, 1000);  // Simulating API response time
        });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        
        console.log('Email entered:', email);   // Ensure no typo
        console.log('Password entered:', password); // Log password
        
        try {
            await apiLoginCall(email.trim(), password);  // Simulate login API call
            console.log('Login successful');
            navigate('/account');
        } catch (error) {
            console.error('Login failed:', error);
        }
    };
    

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <form onSubmit={handleLogin} className="w-50">
                <h2 className="mb-4 text-center">Login</h2>
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
                        autoComplete="current-password"
                    />
                </div>
                <button type="submit" className="btn btn-primary w-100">Login</button>
                <div className="mt-3 text-center">
                    <p>Don't have an account? <Link to="/register">Register here</Link></p>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;
