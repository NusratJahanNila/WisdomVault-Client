const AdminBanner = () => {
    return (
        <div className="bg-secondary text-white p-6 rounded-lg dark:bg-teal-900 dark:border dark:border-teal-700">
            <h2 className="text-2xl font-bold dark:text-teal-100">Welcome Admin !!</h2>
            <p className="mt-2 dark:text-gray-300">
                Monitor users, lessons, reports and overall platform activity from here.
            </p>
        </div>
    );
};

export default AdminBanner;
