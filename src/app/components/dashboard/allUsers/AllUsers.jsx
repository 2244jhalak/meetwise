"use client";
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const AllUsers = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);

    // Function to fetch users
    const fetchUser = async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/dashboard/allUsers/api`, {
                method: 'GET',
                // headers: {
                //     'Cache-Control': 'no-cache', // Ensure fresh data is fetched
                // },
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const usersData = await response.json();

            // Check if the response has a `data` field or if the users are directly in the response
            if (usersData.data) {
                setUsers(usersData.data);
            } else {
                setUsers(usersData);
            }

            console.log(usersData);
        } catch (err) {
            setError(err.message);
        }
    };

    // Fetch users when the component mounts
    useEffect(() => {
        fetchUser();
    }, []);

    // Function to handle updating user role
    const handleRoleUpdate = async (userId) => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/dashboard/allUsers/api/${userId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    // 'Cache-Control': 'no-cache',  // Ensure no cache is used for updating
                },
                body: JSON.stringify({ role: 'admin' }), // Ensure you're sending the correct data
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const result = await response.json();
            console.log(result);

            // Fetch the updated user list again after the role update
            fetchUser();

        } catch (error) {
            console.error('Error updating role:', error);
        }
    };

    return (
        <div>
            <h2 className='text-3xl font-semibold'>Total Users: {users.length}</h2>
            {/* All Users */}
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Map through users to create table rows */}
                        {
                            users.map(user => 
                                <tr key={user._id}>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <Image src={user.image} alt='' height={50} width={50}></Image>
                                                </div>  
                                            </div>
                                            <div>
                                                <div className="font-bold">{user.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <span className="badge badge-ghost badge-sm">{user.email}</span>
                                    </td>
                                    <td>
                                        <button 
                                            onClick={() => handleRoleUpdate(user._id)} // Call handleRoleUpdate with the user ID
                                        >
                                            { 
                                            user.role ?
                                                <p className='font-semibold text-green-600 rounded-xl'>Admin</p>
                                                :
                                                <p className='font-semibold text-blue-600 rounded-xl'>User</p>
                                            }
                                        </button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            {error && <p>Error: {error}</p>}
        </div>
    );
};

export default AllUsers;



