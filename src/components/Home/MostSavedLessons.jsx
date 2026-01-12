import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Container from '../Shared/Container';
import LessonCard from './Lessons/LessonCard';
import SectionHeader from '../Shared/SectionHeader/SectionHeader';

const MostSavedLessons = () => {

    const { data: lessons = [] } = useQuery({
        queryKey: ['mostSavedLessons'],
        queryFn: async () => {
            const res = await axios.get(
                `${import.meta.env.VITE_API_URL}/most-saved-lessons`
            );
            return res.data;
        }
    });

    return (
        <div className="mt-20 max-w-6xl mx-auto">
            <SectionHeader
                subtitle="Community Favorites"
                title="Most"
                highlight="Saved Lessons"
                description="Lessons the community loves the most"
            />

            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-3">
                {lessons.map(lesson => (
                    <LessonCard key={lesson._id} lesson={lesson} />
                ))}
            </div>
        </div>
    );
};

export default MostSavedLessons;
