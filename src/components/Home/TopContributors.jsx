import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const TopContributors = () => {

  const { data: contributors = [] } = useQuery({
    queryKey: ['topContributors'],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/top-contributors`
      );
      return res.data;
    }
  });

  return (
    <div className="bg-primary dark:bg-gray-900 text-white p-8 mb-16">
      <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">

        {/* LEFT */}
        <div>
          <h2 className="text-3xl font-bold mb-2">
            
          </h2>
          <p className="text-sm opacity-90">
            
          </p>
          <div className="inline-flex  gap-3 mb-4">
            <div className="w-12 h-1 bg-[#02A2A2] dark:bg-[#02A2A2]/80 rounded-full" />
            <span className="text-[#02A2A2] dark:text-[#A0EBEB] font-semibold uppercase tracking-wider text-sm">
             Community Stars
            </span>
            <div className="w-12 h-1 bg-[#02A2A2] dark:bg-[#02A2A2]/80 rounded-full" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
            Top <span className="text-[#02A2A2] dark:text-[#02A2A2]/80">Contributors </span>of the Week
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Creators who shared the most valuable lessons.
          </p>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col gap-4">
          {contributors.map(user => (
            <div
              key={user.email}
              className="bg-white text-gray-800 rounded-xl p-3 flex items-center gap-4 shadow"
            >
              <img
                src={user.image}
                alt={user.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-semibold">{user.name}</p>
                <p className="text-xs text-gray-500">{user.email}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default TopContributors;
