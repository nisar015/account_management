import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AccountPage = () => {
    const [user, setUser] = useState({ email: '', password: '' });
    const [isEditing, setIsEditing] = useState(false);
    const navigate = useNavigate();

    const fetchUserData = async () => {
        // Simulate fetching user data from an API
        const fetchedUser = {
            email: 'test@example.com', // Replace with actual user data
            password: 'password', // In a real app, you shouldn't fetch passwords
        };
        setUser(fetchedUser);
    };

    useEffect(() => {
        fetchUserData();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Simulate API call to update user data
        console.log('Updating user data:', user);
        // After successful update, navigate to a different page (e.g., account overview)
        navigate('/account-overview'); // Update to your desired route
        setIsEditing(false);
    };

    return (
        <div className="container mt-5">
            <h2>Your Account</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                    <label>Email</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={user.email}
                        onChange={handleInputChange}
                        readOnly={!isEditing}
                        required
                    />
                </div>
                <div className="form-group mb-3">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        value={user.password}
                        onChange={handleInputChange}
                        readOnly={!isEditing}
                        required
                    />
                </div>
                {isEditing ? (
                    <>
                        <button type="submit" className="btn btn-success">Save Changes</button>
                        <button type="button" className="btn btn-secondary ms-2" onClick={handleEditToggle}>Cancel</button>
                    </>
                ) : (
                    <button type="button" className="btn btn-primary" onClick={handleEditToggle}>Edit</button>
                )}
            </form>
        </div>
    );
};

export default AccountPage;
