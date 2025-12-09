const LessonInfoSection = ({ lesson }) => (
  <div className="space-y-3">
    <h1 className="text-3xl font-bold">{lesson.title}</h1>
    <p className="text-gray-600">{lesson.description}</p>

    <img
      src={lesson.image}
      alt={lesson.title}
      className="rounded-xl shadow-md w-full max-h-[400px] object-cover"
    />

    <div className="flex gap-2 text-sm font-medium mt-3">
      <span className="badge badge-primary">{lesson.category}</span>
      <span className="badge badge-secondary">{lesson.emotionalTone}</span>
    </div>
  </div>
);

export default LessonInfoSection;
