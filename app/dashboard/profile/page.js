// ProfilePage.js
import React from 'react';

const ProfilePage = () => {
    const user = {
        name: 'John Doe',
        email: 'john@example.com',
        // Add more user data as needed
    };

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-4">Profile</h1>
            <div className="max-w-lg mx-auto">
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Name:</label>
                    <span className="text-white">{user.name}</span>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Email:</label>
                    <span className="text-white">{user.email}</span>
                </div>
                {/* Add more user information fields here */}
            </div>
        </div>
    );
};

export default ProfilePage;
