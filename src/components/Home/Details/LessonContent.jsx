const LessonContent = ({ lesson, isLocked }) => {
  return (
    <section className="space-y-4 dark:text-white">
      <h1 className="text-3xl font-bold dark:text-white">{lesson.title}</h1>

      {!isLocked ? (
        <p className="text-gray-700 leading-relaxed dark:text-gray-300">
          {lesson.description}
        </p>
      ) : (
        <p className="text-gray-500 blur-sm dark:text-gray-400">
          {lesson.description}
        </p>
      )}

      {/* Featured Image */}
      {lesson.image && (
        <img
          src={lesson.image}
          alt={lesson.title}
          className={`rounded-lg mt-3 shadow-lg h-70 w-full ${isLocked && "blur-sm opacity-70"} dark:shadow-gray-900/50`}
        />
      )}

      {/* Badges */}
      <div className="flex flex-wrap gap-2 mt-3">
        <span className="badge badge-primary dark:bg-teal-700 dark:border-0">{lesson.category}</span>
        <span className="badge badge-secondary dark:bg-teal-600 dark:border-0">{lesson.emotionalTone}</span>
        <span
          className={`badge ${
            lesson.accessLevel === "premium" ? "badge-error" : "badge-success"
          } dark:border-0`}
        >
          {lesson.accessLevel}
        </span>
      </div>
    </section>
  );
};

export default LessonContent;
