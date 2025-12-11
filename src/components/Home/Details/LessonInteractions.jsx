import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { FaBookmark, FaHeart, FaShare } from "react-icons/fa";
import { LuFlagTriangleRight } from "react-icons/lu";
import { useNavigate } from "react-router";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const LessonInteractions = ({ lesson , refetch}) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  const [liked, setLiked] = useState(lesson.likes?.includes(user?.email) || false);
  const [isSaved, setIsSaved] = useState(false);
  const [likesCount, setLikesCount] = useState(lesson.likesCount || 0);
  const [favoritesCount, setFavoritesCount] = useState(lesson.favoritesCount || 0);
  // Like
  const handleLike = async () => {
    if (!user) {
      Swal.fire({
        icon: "info",
        text: "Please log in to like lessons!",
      });
      return navigate('/login');
    }

    setLiked(!liked);
    setLikesCount(liked ? likesCount - 1 : likesCount + 1);

    try {
      await axiosSecure.post(`/lesson/${lesson._id}/like`, {
        userId: user.email
      });
      refetch();
    } catch (error) {
      console.log(error)
      setLiked(liked);
      setLikesCount(likesCount);
    }
  };
  // favourite
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
  // report
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
  // share
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
        className={`btn btn-sm ${liked ? "btn-error" : "btn-outline"}`}
      >
        <FaHeart size={18} className={liked ? "fill-white" : ""} />
        {lesson.likesCount}
      </button>

      {/* Favorites */}
      <button
        onClick={handleFavorite}
        className={`btn btn-sm ${isSaved ? "btn-warning" : "btn-outline"}`}
      >
        <FaBookmark size={18} className={isSaved ? "fill-white" : ""} />
        {favoritesCount}
      </button>

      {/* Report */}
      <button
        onClick={handleReport}
        className="btn btn-sm btn-outline btn-error"
      >
        <LuFlagTriangleRight size={18} />
        Report
      </button>

      {/* Share */}
      <button
        onClick={handleShare}
        className="btn btn-sm btn-outline"
      >
        <FaShare size={18} />
        Share
      </button>

    </div>
  );
};

export default LessonInteractions;
