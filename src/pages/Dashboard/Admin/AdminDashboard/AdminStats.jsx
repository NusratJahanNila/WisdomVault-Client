import { useQuery } from '@tanstack/react-query';
import { FaUsers, FaBookOpen, FaFlag } from 'react-icons/fa';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';

const AdminStats = () => {
    const axiosSecure = useAxiosSecure();

    const { data: users = [] } = useQuery({
        queryKey: ['adminUsers'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    });

    const { data: lessons = [] } = useQuery({
        queryKey: ['adminLessons'],
        queryFn: async () => {
            const res = await axiosSecure.get('/lessons');
            return res.data.result;
        }
    });

    const { data: reports = [] } = useQuery({
        queryKey: ['adminReports'],
        queryFn: async () => {
            const res = await axiosSecure.get('/reports');
            return res.data;
        }
    });

    const publicLessons = lessons.filter(l => l.privacy === 'public');

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-100 p-5 rounded-lg flex items-center gap-4 dark:bg-gray-800 dark:border dark:border-gray-700">
                <FaUsers size={30} className="dark:text-blue-400" />
                <div>
                    <p className="text-sm dark:text-gray-300">Total Users</p>
                    <h3 className="text-xl font-bold dark:text-white">{users.length}</h3>
                </div>
            </div>

            <div className="bg-green-100 p-5 rounded-lg flex items-center gap-4 dark:bg-gray-800 dark:border dark:border-gray-700">
                <FaBookOpen size={30} className="dark:text-green-400" />
                <div>
                    <p className="text-sm dark:text-gray-300">Public Lessons</p>
                    <h3 className="text-xl font-bold dark:text-white">{publicLessons.length}</h3>
                </div>
            </div>

            <div className="bg-red-100 p-5 rounded-lg flex items-center gap-4 dark:bg-gray-800 dark:border dark:border-gray-700">
                <FaFlag size={30} className="dark:text-red-400" />
                <div>
                    <p className="text-sm dark:text-gray-300">Reported Lessons</p>
                    <h3 className="text-xl font-bold dark:text-white">{reports.length}</h3>
                </div>
            </div>
        </div>
    );
};

export default AdminStats;
