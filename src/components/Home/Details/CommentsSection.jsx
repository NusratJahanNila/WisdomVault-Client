import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";

const CommentsSection = ({ lessonId }) => {
  const { user } = useAuth();
  const [comment, setComment] = useState("");

  const comments = [
    { id: 1, author: "Alice", text: "This helped me a lot!" },
    { id: 2, author: "Mark", text: "Very relatable!" },
  ];

  const handleComment = () => {
    if (!user) {
      Swal.fire("Login Required", "Please log in to comment", "info");
      return;
    }

    console.log("Comment:", comment, "Lesson:", lessonId);
    setComment("");
  };

  return (
    <section className="pt-6">
      <h3 className="text-lg font-bold mb-3">Comments</h3>

      <div className="space-y-3">
        {comments.map((c) => (
          <div key={c.id} className="bg-base-200 p-3 rounded-lg text-sm">
            <strong>{c.author}</strong>
            <p>{c.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 flex gap-2">
        <input
          type="text"
          placeholder="Write a comment..."
          className="input input-bordered flex-1"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleComment}>
          Post
        </button>
      </div>
    </section>
  );
};

export default CommentsSection;
