import Lessons from '../../components/Home/Lessons/Lessons';
import SectionHeader from '../../components/Shared/SectionHeader/SectionHeader';

const PublicLessons = () => {

    return (
        <div className="dark:bg-gray-900">
            <section className='max-w-6xl mx-auto  pt-16'>
                <SectionHeader
                    subtitle="Community Wisdom"
                    title="Public"
                    highlight="Lessons"
                    description="Discover wisdom shared by our community"
                />
                <div className="py-10 dark:bg-gray-900">
                    <Lessons></Lessons>
                </div>
            </section>
        </div>
    );
};

export default PublicLessons;