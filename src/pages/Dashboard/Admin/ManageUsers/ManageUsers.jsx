import React from 'react';
import useAuth from '../../../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../../hooks/useAxiosSecure'
import LoadingSpinner from '../../../../components/Shared/LoadingSpinner';

const ManageUsers = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    // get all plants from the db
    const { data: users = [], isLoading, } = useQuery({
        queryKey: ['users', user.email],
        queryFn: async () => {
            const result = await axiosSecure.get(`/users`)
            return result.data;
        }
    })
    console.log('users data-->', users);

    // loading
    if (isLoading) return <LoadingSpinner />
    return (
        <div className="p-10 ">
            <div className="p-6 bg-white rounded-xl shadow">
                <h2 className="text-2xl font-bold mb-4">Manage Users</h2>

                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>User Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Total Lessons</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {users.map((user, index) => (
                                <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td className="font-semibold">{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>
                                    <td>{user.lessonCount}</td>

                                    

                                    {/* Actions */}
                                    <td className="flex gap-2">
                                        <button
                                            className="btn btn-xs bg-secondary text-white"

                                        >
                                            Update Role
                                        </button>

                                        <button
                                            className="btn btn-xs btn-error text-white"
                                        // onClick={() => handleDelete(lesson._id)}
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
        </div>
    );
};

export default ManageUsers;