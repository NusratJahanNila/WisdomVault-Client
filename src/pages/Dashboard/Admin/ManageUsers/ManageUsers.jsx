import React, { useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../../hooks/useAxiosSecure'
import LoadingSpinner from '../../../../components/Shared/LoadingSpinner';
import Swal from 'sweetalert2';
import UpdateUserRole from './UpdateUserRole';

const ManageUsers = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    // update modal
    const [selectedUser, setSelectedUser] = useState(null);
    const isOpen = !!selectedUser;
    
    const openModal = (user) => setSelectedUser(user);
    const closeModal = () => setSelectedUser(null);

    // get all plants from the db
    const { data: users = [], isLoading, refetch } = useQuery({
        queryKey: ['users', user.email],
        queryFn: async () => {
            const result = await axiosSecure.get(`/users`)
            return result.data;
        }
    })

    // delete user
    const handleDelete = (email) => {
        Swal.fire({
            title: "Are you sure?",
            text: "This user will be permanently deleted!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${email}`)
                    .then(res => {
                        console.log('after delete: ', res.data);
                        if (res.data.deletedCount) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "User has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    };

    // loading
    if (isLoading) return <LoadingSpinner />
    return (
        <div className="p-10 dark:bg-gray-900 min-h-screen">
            <div className="p-6 bg-white rounded-xl shadow dark:bg-gray-800 dark:border dark:border-gray-700 dark:shadow-gray-900/50">
                <h2 className="text-2xl font-bold mb-4 dark:text-white">Manage Users</h2>

                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full dark:table-zebra-dark">
                        <thead className="dark:bg-gray-700">
                            <tr>
                                <th className="dark:text-gray-300 dark:border-gray-600">#</th>
                                <th className="dark:text-gray-300 dark:border-gray-600">User Name</th>
                                <th className="dark:text-gray-300 dark:border-gray-600">Email</th>
                                <th className="dark:text-gray-300 dark:border-gray-600">Role</th>
                                <th className="dark:text-gray-300 dark:border-gray-600">Total Lessons</th>
                                <th className="dark:text-gray-300 dark:border-gray-600">Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {users.map((user, index) => (
                                <tr key={user._id} className="dark:hover:bg-gray-700 dark:border-gray-600">
                                    <th className="dark:text-gray-300 dark:border-gray-600">{index + 1}</th>
                                    <td className="font-semibold dark:text-white">{user.name}</td>
                                    <td className="dark:text-gray-300">{user.email}</td>
                                    <td className="dark:text-gray-300">
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                            user.role === 'admin' 
                                                ? 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300' 
                                                : 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                                        }`}>
                                            {user.role}
                                        </span>
                                    </td>
                                    <td className="dark:text-gray-300">{user.lessonCount}</td>

                                    {/* Actions */}
                                    <td className="flex gap-2 dark:border-gray-600">
                                        <button
                                            onClick={() => openModal(user)}
                                            className="btn btn-xs bg-secondary text-white dark:bg-teal-700 dark:hover:bg-teal-600"
                                        >
                                            Update Role
                                        </button>
                                        

                                        <button
                                            className="btn btn-xs btn-error text-white dark:bg-red-700 dark:hover:bg-red-600"
                                            onClick={() => handleDelete(user.email)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {selectedUser && (
                <UpdateUserRole
                    user={selectedUser}
                    refetch={refetch}
                    isOpen={isOpen}
                    closeModal={closeModal}
                />
            )}
        </div>
    );
};

export default ManageUsers;