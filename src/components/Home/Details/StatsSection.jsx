const StatsSection = ({ lesson }) => (
  <div className="flex gap-6 font-semibold text-gray-700">
    <span>❤️ {lesson.likesCount} Likes</span>
    <span>🔖 {lesson.favoritesCount} Saved</span>
    <span>👀 {lesson.views} Views</span>
  </div>
);

export default StatsSection;
