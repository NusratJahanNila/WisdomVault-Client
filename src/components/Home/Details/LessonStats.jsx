import { FaHeart, FaBookmark, FaEye } from "react-icons/fa";
// static view
const viewsCount = Math.floor(Math.random() * 10000);

const LessonStats = ({lesson}) => {

  return (
    <div className="flex items-center gap-6 text-gray-700 mt-6 dark:text-gray-300">
      {/* Likes */}
      <div className="flex items-center gap-2">
        <FaHeart className="text-red-500 dark:text-red-400" />
        <span className="font-medium dark:text-gray-300">{lesson?.likesCount} Likes</span>
      </div>

      {/* Favorites */}
      <div className="flex items-center gap-2">
        <FaBookmark className="text-blue-500 dark:text-blue-400" />
        <span className="font-medium dark:text-gray-300">
          {lesson?.favoritesCount} Favorites
        </span>
      </div>

      {/* Views */}
      <div className="flex items-center gap-2">
        <FaEye className="text-green-600 dark:text-green-500" />
        <span className="font-medium dark:text-gray-300">{viewsCount} Views</span>
      </div>
    </div>
  );
};

export default LessonStats;
