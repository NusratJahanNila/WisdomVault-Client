const AuthorSection = ({ author }) => (
  <div className="flex items-center gap-4 bg-base-200 p-4 rounded-xl">
    <img
      src={author.photo}
      className="w-14 h-14 rounded-full border"
      alt={author.name}
    />
    <div>
      <h3 className="font-semibold">{author.name}</h3>
      <p className="text-sm text-gray-600">
        {author.totalLessons} lessons published
      </p>

      <button className="btn btn-outline btn-sm mt-2">
        View all by this author
      </button>
    </div>
  </div>
);

export default AuthorSection;
