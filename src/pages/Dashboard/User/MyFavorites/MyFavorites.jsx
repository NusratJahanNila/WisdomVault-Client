import React from 'react';
import useAuth from '../../../../hooks/useAuth';
// import useRole from '../../../../hooks/useRole';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from '../../../../components/Shared/LoadingSpinner';
import Swal from 'sweetalert2';
import { Link } from 'react-router';
import { useForm } from 'react-hook-form';

const MyFavorites = () => {
    const { user } = useAuth();
    // const { userData } = useRole();
    const axiosSecure = useAxiosSecure();
    const { register, watch } = useForm();
    // watch dropdown values
    const selectedCategory = watch("category");

    // get my all lessons from the db
    const { data: favorites = [], isLoading, refetch } = useQuery({
        queryKey: ['favorites', user.email],
        queryFn: async () => {
            const result = await axiosSecure.get(`/favorites/${user?.email}`)
            return result.data;
        }
    })

    // delete
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "This saved lesson will be permanently deleted!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/my-favorites/${id}`)
                    .then(res => {
                        console.log('after delete: ', res.data);
                        if (res.data.deletedCount) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your saved lesson has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    };
    // loading
    if (isLoading) return <LoadingSpinner />

    const filteredFavorites = favorites.filter((fav) => {
        const categoryMatch = selectedCategory ? fav.category === selectedCategory : true;
        return categoryMatch
    });
    return (
    <div className="p-10 dark:bg-gray-900 dark:text-gray-100">
        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow dark:shadow-gray-900/50">
            <div className="flex justify-between items-center mb-5">
                <h2 className="text-2xl font-bold mb-4 dark:text-white">My Favorites</h2>
                {/* filter */}
                <select
                    {...register("category")}
                    className="select select-bordered w-fit dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
                >
                    <option value="">All Categories</option>
                    <option value="Personal Growth">Personal Growth</option>
                    <option value="Career">Career</option>
                    <option value="Relationships">Relationships</option>
                    <option value="Mindset">Mindset</option>
                    <option value="Mistakes Learned">Mistakes Learned</option>
                </select>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full dark:[&_th]:bg-gray-700 dark:[&_th]:text-gray-200 dark:[&_th]:border-gray-600 dark:[&_td]:border-gray-700">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Lesson Title</th>
                            <th>Category</th>
                            <th>Emotional Tone</th>
                            <th>Access</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {filteredFavorites.map((favorite, index) => (
                            <tr key={favorite._id}>
                                <th className="dark:bg-gray-800 dark:text-gray-300">{index + 1}</th>
                                <td className="font-semibold dark:text-gray-200">{favorite.title}</td>
                                <td className="dark:text-gray-300">{favorite.category}</td>
                                <td className="dark:text-gray-300">{favorite.emotionalTone}</td>
                                <td className="dark:text-gray-300">{favorite.accessLevel}</td>
                                <td className="dark:text-gray-300">{favorite.saved_at}</td>

                                {/* Actions */}
                                <td className="flex gap-2 dark:text-gray-300">
                                    <Link
                                        className="btn btn-xs bg-secondary text-white dark:bg-teal-700 dark:hover:bg-teal-600"
                                        to={`/lesson-details/${favorite.lessonId}`}
                                    >
                                        Details
                                    </Link>

                                    <button
                                        className="btn btn-xs btn-error text-white dark:bg-red-700 dark:hover:bg-red-600"
                                        onClick={() => handleDelete(favorite._id)}
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

export default MyFavorites;