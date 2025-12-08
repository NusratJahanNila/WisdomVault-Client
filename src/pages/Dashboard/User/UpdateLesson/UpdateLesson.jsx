import React, { useState } from 'react';
import UpdateLessonModal from './UpdateLessonModal';

const UpdateLesson = ({ lesson }) => {
    const [isOpen, setIsOpen] = useState(false)

    const closeModal = () => {
        setIsOpen(false)
    }
    const handleUpdate = (id) => {
        setIsOpen(true)
        console.log("Update lesson:", id);
        // TODO: Navigate to update page → navigate(`/dashboard/my-lessons/${id}/edit`)
    };
    return (
        <>
            <button
                className="btn btn-xs bg-primary text-white"
                onClick={() => handleUpdate(lesson._id)}
            >
                Update
            </button>
            <UpdateLessonModal closeModal={closeModal} isOpen={isOpen}></UpdateLessonModal>
        </>

    );
};

export default UpdateLesson;
