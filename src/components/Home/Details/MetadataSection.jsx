const MetadataSection = ({ lesson }) => (
  <div className="bg-base-200 p-4 rounded-xl text-sm grid grid-cols-2 md:grid-cols-4 gap-4">
    <p>📅 Created: {lesson.createdAt}</p>
    <p>🛠 Last Updated: {lesson.updatedAt}</p>
    <p>👁 Visibility: {lesson.visibility}</p>
    <p>📖 Reading: ~ 5 mins</p>
  </div>
);

export default MetadataSection;
