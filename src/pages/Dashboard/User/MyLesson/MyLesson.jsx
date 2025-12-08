import React from 'react';
import { useState } from "react";
import Swal from "sweetalert2";
import UpdateLesson from '../UpdateLesson/UpdateLesson';

const MyLesson = () => {

    // Static dummy lesson (Replace later using .map())
    const [lessons] = useState([
        {
            _id: "123", // To be used later for PUT/PATCH/DELETE
            title: "What Failure Taught Me",
            category: "Personal Growth",
            accessLevel: "free", // or "premium"
            privacy: "public",   // or "private"
            createdAt: "2025-02-01",
            likesCount: 45,
            favoritesCount: 15,
        },
    ]);

    // Handlers (to connect later with API)
    const handleTogglePrivacy = (id) => {
        console.log("Toggle privacy for:", id);
        // TODO: PATCH /lessons/:id { privacy: "..." }
    };

    //   const handleToggleAccess = (id) => {
    //     if (!userData?.isPremium) return;
    //     console.log("Toggle access level for:", id);
    //     // TODO: PATCH /lessons/:id { accessLevel: "..." }
    //   };

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "This lesson will be permanently deleted!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                console.log("Delete:", id);
                // TODO: DELETE /lessons/:id
                Swal.fire("Deleted!", "Lesson has been removed.", "success");
            }
        });
    };



    const handleDetails = (id) => {
        console.log("View details:", id);
        // TODO: navigate(`/lessons/${id}`)
    };



    return (
        <div className="p-10 ">
            <div className="p-6 bg-white rounded-xl shadow">
                <h2 className="text-2xl font-bold mb-4">My Lessons</h2>

                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Lesson Title</th>
                                <th>Category</th>
                                <th>Privacy</th>
                                <th>Access</th>
                                <th>Likes</th>
                                <th>Favorites</th>
                                <th>Created At</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {lessons.map((lesson, index) => (
                                <tr key={lesson._id}>
                                    <th>{index + 1}</th>
                                    <td className="font-semibold">{lesson.title}</td>
                                    <td>{lesson.category}</td>

                                    {/* Toggle Privacy */}
                                    <td>
                                        <button
                                            className="btn btn-xs"
                                            onClick={() => handleTogglePrivacy(lesson._id)}
                                        >
                                            {lesson.privacy === "public" ? "Public" : "Private"}
                                        </button>
                                    </td>

                                    {/* Toggle Access (premium users only) */}
                                    <td>
                                        <button
                                            className="btn btn-xs"
                                        // disabled={!userData?.isPremium}
                                        // onClick={() => handleToggleAccess(lesson._id)}
                                        >
                                            {lesson.accessLevel === "free"
                                                ? "Free"
                                                : "Premium 💎"}
                                        </button>

                                        {/* {!userData?.isPremium && (
                    <div className="text-xs text-warning">
                      Premium only
                    </div>
                  )} */}
                                    </td>

                                    {/* Stats */}
                                    <td>{lesson.likesCount}</td>
                                    <td>{lesson.favoritesCount}</td>
                                    <td>{lesson.createdAt}</td>

                                    {/* Actions */}
                                    <td className="flex gap-2">
                                        <button
                                            className="btn btn-xs bg-secondary text-white"
                                            onClick={() => handleDetails(lesson._id)}
                                        >
                                            Details
                                        </button>

                                        <UpdateLesson lesson={lesson} />

                                        <button
                                            className="btn btn-xs btn-error text-white"
                                            onClick={() => handleDelete(lesson._id)}
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


export default MyLesson;