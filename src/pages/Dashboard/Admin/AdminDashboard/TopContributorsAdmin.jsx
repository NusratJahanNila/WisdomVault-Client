import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';

const TopContributorsAdmin = () => {
    const axiosSecure = useAxiosSecure();

    const { data: users = [] } = useQuery({
        queryKey: ['topContributors'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    });

    const topUsers = [...users]
        .sort((a, b) => (b.lessonCount || 0) - (a.lessonCount || 0))
        .slice(0, 3);

    return (
        <div className="bg-white p-5 rounded-lg shadow lg:col-span-1 dark:bg-gray-800 dark:border dark:border-gray-700 dark:shadow-gray-900/50">
            <h3 className="font-bold text-lg mb-4 dark:text-white">Top Contributors</h3>

            {topUsers.map(user => (
                <div key={user.email} className="flex items-center gap-3 mb-3 p-2 hover:bg-gray-50 rounded-lg transition-colors dark:hover:bg-gray-700">
                    <img
                        src={user.image}
                        alt={user.name}
                        className="w-10 h-10 rounded-full border-2 border-gray-200 dark:border-gray-600"
                    />
                    <div>
                        <p className="font-semibold dark:text-gray-200">{user.name}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{user.email}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TopContributorsAdmin;
