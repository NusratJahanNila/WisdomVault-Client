import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
// Optional icons - replace if you want
import { Heart, Bookmark, Flag, Share2 } from "lucide-react";

const LessonInteractions = ({ lesson }) => {
  const { user } = useAuth();

  // Dummy local states (replace later with real lesson data)
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [likesCount, setLikesCount] = useState(lesson.likesCount || 450);
  const [favoritesCount, setFavoritesCount] = useState(lesson.favoritesCount || 100);

  const handleLike = () => {
    if (!user) {
      Swal.fire({
        icon: "info",
        text: "Please log in to like lessons!",
      });
      return;
    }

    setIsLiked(!isLiked);
    setLikesCount(isLiked ? likesCount - 1 : likesCount + 1);
  };

  const handleFavorite = () => {
    if (!user) {
      Swal.fire({
        icon: "info",
        text: "Please log in to save lessons!",
      });
      return;
    }

    setIsSaved(!isSaved);
    setFavoritesCount(isSaved ? favoritesCount - 1 : favoritesCount + 1);
  };

  const handleReport = () => {
    if (!user) {
      Swal.fire("Login Required", "Please log in to report content!", "info");
      return;
    }

    Swal.fire({
      title: "Report Lesson",
      input: "select",
      inputOptions: {
        inappropriate: "Inappropriate Content",
        harassment: "Hate Speech / Harassment",
        misleading: "Misleading / False Info",
        spam: "Spam or Promotional",
        sensitive: "Sensitive Content",
        other: "Other",
      },
      inputPlaceholder: "Select report reason",
      showCancelButton: true,
      confirmButtonText: "Submit Report",
      showLoaderOnConfirm: true,
      preConfirm: (reason) => {
        if (!reason) return Swal.showValidationMessage("Please select a reason!");
        console.log("Report reason:", reason);

        // TODO: POST /api/reports { lessonId, reporterEmail, reason, timestamp }
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Reported!", "Thank you for helping keep the platform safe.", "success");
      }
    });
  };

  const handleShare = () => {
    console.log("Open share options");
    // TODO: Implement using react-share later
    Swal.fire("Share Feature", "Social sharing coming soon!", "info");
  };

  return (
    <div className="mt-6 p-4 rounded-xl bg-base-200 shadow-sm flex flex-wrap gap-4 items-center justify-between">

      {/* Likes */}
      <button
        onClick={handleLike}
        className={`btn btn-sm ${isLiked ? "btn-error text-white" : "btn-outline"}`}
      >
        <Heart size={18} className={isLiked ? "fill-white" : ""} />
        {likesCount}
      </button>

      {/* Favorites */}
      <button
        onClick={handleFavorite}
        className={`btn btn-sm ${isSaved ? "btn-warning" : "btn-outline"}`}
      >
        <Bookmark size={18} className={isSaved ? "fill-white" : ""} />
        {favoritesCount}
      </button>

      {/* Report */}
      <button
        onClick={handleReport}
        className="btn btn-sm btn-outline btn-error"
      >
        <Flag size={18} />
        Report
      </button>

      {/* Share */}
      <button
        onClick={handleShare}
        className="btn btn-sm btn-outline"
      >
        <Share2 size={18} />
        Share
      </button>

    </div>
  );
};

export default LessonInteractions;
