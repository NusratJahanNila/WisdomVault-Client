const LessonMetadata = ({ lesson }) => (
  <div className="p-5 bg-base-200 rounded-lg shadow-sm text-sm text-gray-600 dark:bg-gray-800 dark:border dark:border-gray-700 dark:text-gray-400">
    <p><strong className="dark:text-gray-300">Created:</strong> {lesson.createdAt}</p>
    <p><strong className="dark:text-gray-300">Last Updated:</strong> {lesson.last_update_at}</p>
    <p><strong className="dark:text-gray-300">Visibility:</strong> {lesson.privacy}</p>
  </div>
);

export default LessonMetadata;
