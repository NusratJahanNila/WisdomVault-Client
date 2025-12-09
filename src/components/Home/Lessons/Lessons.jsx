import React from 'react';
import LessonCard from './LessonCard';

const Lessons = () => {
    return (
        <div>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-3">
                <LessonCard></LessonCard>
            </div>
        </div>
    );
};

export default Lessons;