import { useState } from "react";
import { FaHeart, FaBookmark, FaEye } from "react-icons/fa";

const viewsCount = Math.floor(Math.random() * 10000); // 0 - 9999

const LessonStats = () => {
  // Static placeholders — replace with props later
  const [likesCount, ] = useState(1280); // Example: 1.2K
  const [favoritesCount, ] = useState(342);

  return (
    <div className="flex items-center gap-6 text-gray-700 mt-6">
      {/* Likes */}
      <div className="flex items-center gap-2">
        <FaHeart className="text-red-500" />
        <span className="font-medium">{likesCount.toLocaleString()} Likes</span>
      </div>

      {/* Favorites */}
      <div className="flex items-center gap-2">
        <FaBookmark className="text-blue-500" />
        <span className="font-medium">
          {favoritesCount.toLocaleString()} Favorites
        </span>
      </div>

      {/* Views */}
      <div className="flex items-center gap-2">
        <FaEye className="text-green-600" />
        <span className="font-medium">{viewsCount.toLocaleString()} Views</span>
      </div>
    </div>
  );
};

export default LessonStats;
