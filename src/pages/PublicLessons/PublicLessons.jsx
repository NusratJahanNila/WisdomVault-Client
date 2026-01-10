
import Lessons from '../../components/Home/Lessons/Lessons';
import Container from '../../components/Shared/Container';

const PublicLessons = () => {

    return (
        <section className='max-w-7xl mx-auto dark:bg-gray-900 pt-6'>
            <h2 className='text-center text-3xl font-bold text-gray-800 dark:text-white'>Public Lessons</h2>
            <div className="py-10 dark:bg-gray-900">
                <Lessons></Lessons>
            </div>

        </section>
    );
};

export default PublicLessons;