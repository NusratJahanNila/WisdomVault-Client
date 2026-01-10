import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../Shared/LoadingSpinner";

const CommentsSection = ({ lessonId }) => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  // React Hook Form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // get commnents
  const { data: comments = [],refetch } = useQuery({
    queryKey: ['comments', lessonId],
    queryFn: async () => {
      const result = await axiosSecure.get(`/comments/${lessonId}`)
      return result.data;
    }
  })
  console.log(comments)
  // Submit handler
  const onSubmit = async (data) => {
    if (!user) {
      Swal.fire("Login Required", "Please log in to comment", "info");
      return;
    }
    try {
      const commentData = {
        commentText: data?.comment,
        userEmail: user?.email,
        lessonId: lessonId,
        created_at: new Date()
      }

      const res = await axiosSecure.post(`/comments`, commentData);

      if (res.data.insertedId || res.data._id) {
        Swal.fire({
          icon: "success",
          title: "Comment posted!",
          timer: 1200,
          showConfirmButton: false,
        });
        reset();
        refetch();
      }
    } catch (error) {
      console.log(error)
    }



    reset();
  };

  // // loading
  // if (isLoading) return <LoadingSpinner />
  return (
    <section className="pt-6 dark:text-white">
      <h3 className="text-lg font-bold mb-3 dark:text-white">Comments</h3>

      {/* show comment */}
      <div className="space-y-3 mb-4">
        {comments.map((c) => (
          <div key={c._id} className="bg-base-200 p-3 rounded-lg text-sm dark:bg-gray-800 dark:border dark:border-gray-700 dark:text-gray-300">
            <strong className="dark:text-white">{c.userEmail}</strong>
            <p className="dark:text-gray-400">{c.commentText}</p>
          </div>
        ))}
      </div>

      {/*  add comment*/}
      <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Write a comment..."
            className="input input-bordered w-full dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:placeholder-gray-400"
            {...register("comment", {
              required: "Comment cannot be empty",
              minLength: {
                value: 2,
                message: "Comment must be at least 2 characters",
              },
            })}
          />
          {errors.comment && (
            <p className="text-red-500 text-xs mt-1 dark:text-red-400">
              {errors.comment.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="btn btn-primary dark:bg-teal-700 dark:hover:bg-teal-600 dark:border-0"
        >
          Post
        </button>
      </form>
    </section>
  );
};

export default CommentsSection;
