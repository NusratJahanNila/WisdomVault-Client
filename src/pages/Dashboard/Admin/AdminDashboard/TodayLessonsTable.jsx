import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';

const TodayLessonsTable = () => {
    const axiosSecure = useAxiosSecure();

    const { data: lessons = [] } = useQuery({
        queryKey: ['todayLessons'],
        queryFn: async () => {
            const res = await axiosSecure.get('/lessons');
            return res.data.result;
        }
    });

    const today = new Date().toISOString().slice(0, 10);

    const todayLessons = lessons.filter(
        l => l.createdAt?.slice(0, 10) === today
    );

    return (
        <div className="bg-white p-5 rounded-lg shadow dark:bg-gray-800 dark:border dark:border-gray-700 dark:shadow-gray-900/50">
            <h3 className="font-bold text-lg mb-4 dark:text-white">Today's Lessons</h3>

            <table className="table w-full">
                <thead>
                    <tr className="dark:bg-gray-700">
                        <th className="dark:text-gray-300 dark:border-gray-600">Title</th>
                        <th className="dark:text-gray-300 dark:border-gray-600">Category</th>
                        <th className="dark:text-gray-300 dark:border-gray-600">Emotional Tone</th>
                        <th className="dark:text-gray-300 dark:border-gray-600">Privacy</th>
                        <th className="dark:text-gray-300 dark:border-gray-600">Author</th>
                        <th className="dark:text-gray-300 dark:border-gray-600">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {todayLessons.map(lesson => (
                        <tr key={lesson._id} className="hover:bg-gray-50 dark:hover:bg-gray-700 dark:border-gray-600">
                            <td className="dark:text-gray-300 dark:border-gray-600">{lesson.title}</td>
                            <td className="dark:text-gray-300 dark:border-gray-600">{lesson.category}</td>
                            <td className="dark:text-gray-300 dark:border-gray-600">{lesson.emotionalTone}</td>
                            <td className="dark:text-gray-300 dark:border-gray-600">
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                    lesson.privacy === 'public' 
                                        ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' 
                                        : 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                                }`}>
                                    {lesson.privacy}
                                </span>
                            </td>
                            <td className="dark:text-gray-300 dark:border-gray-600">{lesson.authorName}</td>
                            <td className="dark:text-gray-300 dark:border-gray-600">{lesson.authorEmail}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TodayLessonsTable;
