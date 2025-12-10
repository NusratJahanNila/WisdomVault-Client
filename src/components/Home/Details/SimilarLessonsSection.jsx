import LessonCard from "../Lessons/LessonCard";

const SimilarLessonsSection = ({ lesson }) => {
  // Static Similar Lessons (replace later using API fetch)
  const similarLessons = [
    {
      _id: "a1",
      title: "Overcoming Doubts",
      description: "Learn how self doubt can actually be your greatest strength...",
      category: lesson.category,
      emotionalTone: "Motivational",
      accessLevel: "free",
      authorName: "Jane Doe",
      authorPhoto: "https://i.pravatar.cc/80?img=12",
      createdAt: "2025-02-10",
      likesCount: 112,
      favoritesCount: 34,
    },
    {
      _id: "a2",
      title: "The Moment I Changed Everything",
      description: "One decision can shift your entire life forever...",
      category: lesson.category,
      emotionalTone: lesson.emotionalTone,
      accessLevel: "premium",
      authorName: "Robert Chen",
      authorPhoto: "https://i.pravatar.cc/80?img=15",
      createdAt: "2025-02-08",
      likesCount: 300,
      favoritesCount: 88,
    },
    // Add up to 6 static cards
  ];

  return (
    <section className="mt-12">
      <h3 className="text-xl font-bold mb-4">Similar Lessons You May Like</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {similarLessons.slice(0, 6).map((les) => (
          <LessonCard key={les._id} lesson={les} />
        ))}
      </div>
    </section>
  );
};

export default SimilarLessonsSection;
