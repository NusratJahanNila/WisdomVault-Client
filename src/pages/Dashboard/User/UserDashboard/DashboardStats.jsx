import { FaBook, FaHeart } from 'react-icons/fa';
import useAuth from '../../../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';

const DashboardStats = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    // lessons
    const { data: lessons = [] } = useQuery({
        queryKey: ['my-lessons', user?.email],
        enabled: !!user?.email,
        queryFn: async () => {
            const res = await axiosSecure.get(`/my-lessons/${user.email}`);
            return res.data;
        }
    });

    // favorites
    const { data: favorites = [] } = useQuery({
        queryKey: ['favorites', user?.email],
        enabled: !!user?.email,
        queryFn: async () => {
            const res = await axiosSecure.get(`/favorites/${user.email}`);
            return res.data;
        }
    });

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="bg-blue-50 shadow rounded-xl p-6 flex items-center gap-4 dark:bg-gray-800 dark:border dark:border-gray-700">
                <FaBook className="text-3xl text-secondary dark:text-teal-400" />
                <div>
                    <p className="text-sm text-gray-500 dark:text-gray-300">Total Lessons Created</p>
                    <p className="text-2xl font-bold dark:text-white">{lessons?.length}</p>
                </div>
            </div>

            <div className="bg-red-50 shadow rounded-xl p-6 flex items-center gap-4 dark:bg-gray-800 dark:border dark:border-gray-700">
                <FaHeart className="text-3xl text-red-500 dark:text-red-400" />
                <div>
                    <p className="text-sm text-gray-500 dark:text-gray-300">Saved Lessons</p>
                    <p className="text-2xl font-bold dark:text-white">{favorites?.length}</p>
                </div>
            </div>

        </div>
    );
};

export default DashboardStats;
