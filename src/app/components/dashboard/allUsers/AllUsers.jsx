"use client";
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2'; // Import SweetAlert2
import 'animate.css';
const AllUsers = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false); // New state for loading

    // Function to fetch users
    const fetchUser = async () => {
        setLoading(true); // Start loading before fetch
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_CLIENT_URL}/dashboard/allUsers/api`, {
                method: 'GET',
                headers: {
                    'Cache-Control': 'no-store', // Ensure fresh data is fetched
                },
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const usersData = await response.json();
            setUsers(usersData.data || usersData);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false); // Stop loading after fetch
        }
    };

    // Fetch users when the component mounts
    useEffect(() => {
        fetchUser();
    }, []);

    const handleRoleUpdate = async (userId) => {
        setLoading(true); // Start loading before role update
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_CLIENT_URL}/dashboard/allUsers/api/${userId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Cache-Control': 'no-store',
                },
                body: JSON.stringify({ role: 'admin' }),
            });

            if (!response.ok) {
                const errorResponse = await response.text();
                throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorResponse}`);
            }

            const result = await response.json();
            console.log(result);

            // Fetch the updated user list again after the role update
            await fetchUser();
        } catch (error) {
            console.error('Error updating role:', error);
        } finally {
            setLoading(false); // Stop loading after role update
        }
    };

    // Function to handle user deletion
    const handleDeleteUser = async (userId, userRole) => {
        // Check if the user is an admin
        if (userRole === "admin") {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Admins cannot be deleted!',
            });
            return; // Prevent further execution
        }

        // Confirm deletion with SweetAlert
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                setLoading(true); // Start loading before delete
                try {
                    const response = await fetch(`${process.env.NEXT_PUBLIC_CLIENT_URL}/dashboard/allUsers/api/${userId}`, {
                        method: 'DELETE',
                        headers: {
                            'Cache-Control': 'no-store',
                        },
                    });

                    const data = await response.json();

                    if (response.ok) {
                        Swal.fire(
                            'Deleted!',
                            'User has been deleted.',
                            'success'
                        );
                        await fetchUser(); // Fetch updated user list
                    } else {
                        Swal.fire(
                            'Error!',
                            data.message || 'Failed to delete user.',
                            'error'
                        );
                    }
                } catch (error) {
                    Swal.fire('Error!', 'Something went wrong.', 'error');
                } finally {
                    setLoading(false); // Stop loading after delete
                }
            }
        });
    };

    return (
        <div className='container mx-auto p-6 font-raleway text-white bg-blue-50  shadow-lg rounded-md'>
            <h1 className="text-2xl pb-3 font-semibold my-4 md:my-8 rounded-2xl  border-b-2 border-green-500 text-center mx-auto text-black lg:text-3xl md:w-1/4"> User Management</h1>

            <h2 className='text-3xl text-black font-semibold mt-5 mb-5'>User Overview: <span className="text-green-500 font-bold">Total Users</span>- {users.length}</h2>
            {/* Loading State */}


            {/* All Users */}
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='text-gray-700'>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    {
                        loading &&
                        <p className='flex justify-center mt-10'>
                            <span className="loading loading-ring loading-lg"></span>
                        </p>
                    }
                    <tbody>
                        {/* Map through users to create table rows */}
                        {
                            users.map(user =>
                                <tr key={user._id}>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12 animate__animated animate__flipInY">
                                                    <Image width={50} height={50} src={user.image} alt='' />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold text-black">{user.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <span className="text-gray-900">{user.email}</span>
                                    </td>
                                    <td>
                                        <button
                                            disabled={user?.role === "admin"}
                                            onClick={() => handleRoleUpdate(user._id)} // Call handleRoleUpdate with the user ID
                                        >
                                            {
                                                user.role === "admin" ?
                                                    <p className='font-semibold text-green-600 rounded-xl'>Admin</p>
                                                    :
                                                    <p className='font-semibold text-blue-600 rounded-xl'>User</p>
                                            }
                                        </button>
                                    </td>
                                    <td>
                                        <FaTrash
                                            className="cursor-pointer text-red-500"
                                            onClick={() => handleDeleteUser(user._id, user.role)} // Pass user ID and role to the function
                                        />
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


