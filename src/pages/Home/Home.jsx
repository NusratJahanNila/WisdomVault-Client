import React from 'react';
import Banner from '../../components/Home/Banner';
import WhyLerningFromLifeLesson from '../../components/Home/WhyLerningFromLifeLesson';
import FeaturedLessons from '../../components/Home/FeaturedLessons';
import TopContributors from '../../components/Home/TopContributors';
import MostSavedLessons from '../../components/Home/MostSavedLessons';
import HowItWorks from '../../components/Home/Lessons/HowItWorks';
import PlatformStats from '../../components/Home/PlatformStats';
import FAQ from '../../components/Home/FAQ';
import CTA from '../../components/Home/CTA';

const Home = () => {
    return (
        <div>
            <Banner />
            <PlatformStats />
            <HowItWorks/>
            <FeaturedLessons />
            <WhyLerningFromLifeLesson/>
            <TopContributors />
            <div className="mb-10">
                <MostSavedLessons />
            </div>
            <FAQ/>
            <CTA/>
        </div>
    );
};

export default Home;