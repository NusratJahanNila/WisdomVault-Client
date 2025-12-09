import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const LessonComments = () => {
  const { user } = useAuth();

  // Static comments (later fetch from DB)
  const [comments, setComments] = useState([
    {
      _id: "c101",
      userName: "John Doe",
      userPhoto: "https://i.pravatar.cc/50",
      commentText: "This lesson really opened my eyes!",
      createdAt: "2025-02-10",
    },
    {
      _id: "c102",
      userName: "Sarah Smith",
      userPhoto: "https://i.pravatar.cc/51",
      commentText: "Loved this story. Very relatable.",
      createdAt: "2025-02-09",
    },
  ]);

  const [inputComment, setInputComment] = useState("");

  const handleCommentSubmit = () => {
    if (!user) {
      Swal.fire("Login Required", "Login to comment!", "info");
      return;
    }

    if (!inputComment.trim()) return;

    const newComment = {
      _id: Date.now(),
      userName: user?.displayName,
      userPhoto: user?.photoURL,
      commentText: inputComment,
      createdAt: new Date().toLocaleDateString(),
    };

    setComments([newComment, ...comments]);
    setInputComment("");
  };

  return (
    <div className="mt-10 bg-base-200 p-6 rounded-xl shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Comments</h3>

      {/* Comment Input */}
      <div className="flex gap-3 items-center mb-4">
        <textarea
          className="textarea textarea-bordered w-full"
          placeholder="Write your thoughts..."
          value={inputComment}
          onChange={(e) => setInputComment(e.target.value)}
          disabled={!user}
        ></textarea>
        <button
          onClick={handleCommentSubmit}
          className="btn btn-primary"
          disabled={!user}
        >
          Post
        </button>
      </div>

      {/* Comments list */}
      <div className="space-y-4">
        {comments.map((c) => (
          <div key={c._id} className="flex gap-3 items-start bg-base-100 p-3 rounded-lg">
            <img
              src={c.userPhoto}
              alt={c.userName}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-semibold text-sm">{c.userName}</p>
              <p className="text-sm">{c.commentText}</p>
              <p className="text-xs text-gray-500 mt-1">{c.createdAt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LessonComments;
