import { useQuery } from "@tanstack/react-query";
import LessonCard from "../Lessons/LessonCard";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const SimilarLessonsSection = ({ lesson }) => {
  const axiosSecure = useAxiosSecure();

  const { data: similarLessons = [] } = useQuery({
    queryKey: ["similar-lessons", lesson?._id],
    enabled: !!lesson,
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/lessons/similar?category=${lesson.category}&emotionalTone=${lesson.emotionalTone}&lessonId=${lesson._id}`
      );
      return res.data;
    }
  });

  if (!similarLessons.length) return null;

  return (
    <section className="mt-12 dark:text-white">
      <h3 className="text-xl font-bold mb-4 dark:text-white">
        Similar Lessons You May Like
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {similarLessons.map((les) => (
          <LessonCard key={les._id} lesson={les} />
        ))}
      </div>
    </section>
  );
};

export default SimilarLessonsSection;
