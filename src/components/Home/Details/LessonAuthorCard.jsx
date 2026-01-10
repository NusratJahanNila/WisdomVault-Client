import { Link } from "react-router";

const LessonAuthorCard = ({ lesson }) => {
  return (
    <div className="p-5 bg-base-100 border rounded-lg flex items-center gap-4 shadow dark:bg-gray-800 dark:border-gray-700 dark:shadow-gray-900/50">
      <img
        src={lesson?.authorPhoto}
        className="w-16 h-16 rounded-full object-cover shadow dark:border dark:border-gray-600"
      />

      <div>
        <h4 className="font-bold dark:text-white">{lesson?.authorName}</h4>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          {lesson.authorLessonCount} lessons shared
        </p>
        <Link to={`/author-profile/${lesson?.authorEmail}`} className="btn btn-sm btn-info mt-2 dark:bg-teal-700 dark:hover:bg-teal-600 dark:border-0">
          View Author Profile
        </Link>
      </div>
    </div>
  );
};

export default LessonAuthorCard;
