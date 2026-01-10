import { useQuery } from '@tanstack/react-query';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';

const AdminChart = () => {
    const axiosSecure = useAxiosSecure();

    const { data: lessons = [] } = useQuery({
        queryKey: ['lessonGrowth'],
        queryFn: async () => {
            const res = await axiosSecure.get('/lessons');
            return res.data.result || [];
        }
    });

    // sort lessons by date (important for chart)
    const sortedLessons = [...lessons].sort(
        (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    );

    const chartData = sortedLessons.reduce((acc, lesson) => {
        if (!lesson.createdAt) return acc;

        const date = lesson.createdAt.slice(0, 10);
        const found = acc.find(item => item.date === date);

        if (found) {
            found.count = found.count + 1;
        } else {
            acc.push({ date, count: 1 });
        }

        return acc;
    }, []);

    return (
        <div className="bg-white p-5 rounded-lg shadow lg:col-span-2 dark:bg-gray-800 dark:border dark:border-gray-700 dark:shadow-gray-900/50">
            <h3 className="font-bold text-lg mb-4 dark:text-white">Lesson Growth</h3>

            <ResponsiveContainer width="100%" height={250}>
                <LineChart data={chartData}>
                    <XAxis dataKey="date" stroke="#d1d5db" />
                    <YAxis allowDecimals={false} stroke="#d1d5db" />
                    <Tooltip 
                        contentStyle={{ 
                            backgroundColor: '#1f2937', 
                            border: '1px solid #374151',
                            color: '#f3f4f6'
                        }}
                    />
                    <Line
                        type="monotone"
                        dataKey="count"
                        stroke="#6366f1"
                        strokeWidth={2}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default AdminChart;
