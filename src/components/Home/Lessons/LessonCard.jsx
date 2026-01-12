import useRole from "../../../hooks/useRole";
import { FiLock } from "react-icons/fi";
import LoadingSpinner from "../../Shared/LoadingSpinner";
import { Link } from "react-router";

const LessonCard = ({ lesson }) => {
    const { userData, isRoleLoading } = useRole();

    if (isRoleLoading) return <LoadingSpinner />;

    const isLocked =lesson.accessLevel === "premium" && !userData?.isPremium;

    return (
    <div className="relative group">
        {/* Card with fixed dimensions */}
        <div className={`relative bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 rounded-2xl p-5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${isLocked ? "group-hover:blur-[1px]" : ""}`}>
            {/* Premium Lock Overlay */}
            {isLocked && (
                <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/40 flex flex-col items-center justify-center gap-3 text-white rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 backdrop-blur-sm">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#F69074] to-[#EDBC98] flex items-center justify-center shadow-2xl">
                        <FiLock size={28} className="text-white" />
                    </div>
                    <p className="font-bold text-lg text-center px-4">
                        Premium Lesson
                    </p>
                    <p className="text-sm text-center px-4">
                        Upgrade to view exclusive content
                    </p>
                </div>
            )}

            {/* Card Content with fixed structure */}
            <div className="flex flex-col h-full">
                {/* Author Section - Fixed height */}
                <div className="flex items-center gap-3 mb-4">
                    <img
                        src={lesson.authorPhoto}
                        alt={lesson.authorName}
                        className="w-12 h-12 object-cover rounded-full border-2 border-white dark:border-gray-700 shadow"
                    />
                    <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-gray-800 dark:text-white text-sm truncate">
                            {lesson.authorName}
                        </h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                            {lesson.createdAt}
                        </p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${lesson.accessLevel === "premium"
                            ? "bg-gradient-to-r from-[#F69074] to-[#EDBC98] text-white"
                            : "bg-gradient-to-r from-[#02A2A2]/20 to-[#A0EBEB]/20 text-[#02A2A2] dark:text-[#A0EBEB]"
                        }`}>
                        {lesson.accessLevel}
                    </span>
                </div>

                {/* Title with fixed height */}
                <h2 className="font-bold text-lg text-gray-900 dark:text-white mb-3 line-clamp-2 h-[3rem]">
                    {lesson.title}
                </h2>

                {/* Description with fixed height */}
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 flex-1 min-h-[4.5rem]">
                    {lesson.description}
                </p>

                {/* Tags Section - Fixed height */}
                <div className="mb-4 min-h-[2.5rem]">
                    <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-gradient-to-r from-[#02A2A2]/10 to-[#02A2A2]/5 text-[#02A2A2] dark:text-[#A0EBEB] rounded-full text-xs font-medium border border-[#02A2A2]/20 dark:border-[#02A2A2]/30">
                            {lesson.category}
                        </span>
                        <span className="px-3 py-1 bg-gradient-to-r from-[#F69074]/10 to-[#EDBC98]/5 text-[#F69074] dark:text-[#EDBC98] rounded-full text-xs font-medium border border-[#F69074]/20 dark:border-[#F69074]/30">
                            {lesson.emotionalTone}
                        </span>
                    </div>
                </div>

                {/* Button - Always at bottom */}
                <div className="mt-auto pt-3 border-t border-gray-100 dark:border-gray-700">
                    <Link
                        to={`/lesson-details/${lesson._id}`}
                        className="w-full py-2 bg-gradient-to-r from-[#02A2A2] to-[#028a8a] hover:from-[#028a8a] hover:to-[#02A2A2] text-white text-sm font-semibold rounded-lg transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2 group/btn"
                    >
                        <span>View Details</span>
                        <span className="opacity-0 group-hover/btn:opacity-100 translate-x-[-8px] group-hover/btn:translate-x-0 transition-all duration-300">
                            →
                        </span>
                    </Link>
                </div>
            </div>
            
            {/* Premium Badge Corner */}
            {lesson.accessLevel === "premium" && (
                <div className="absolute top-3 right-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#F69074] to-[#EDBC98] flex items-center justify-center shadow-lg">
                        <span className="text-white text-xs font-bold">⭐</span>
                    </div>
                </div>
            )}
        </div>
    </div>
);
};

export default LessonCard;
