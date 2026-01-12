import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { Heart, Shield, Users, Book, ChevronRight, Star, Award, Globe } from 'lucide-react';
import SectionHeader from '../../components/Shared/SectionHeader/SectionHeader';

const AboutPage = () => {
    const [counters, setCounters] = useState({
        users: 0,
        lessons: 0,
        communities: 0,
        countries: 0
    });

    const finalCounts = {
        users: 25000,
        lessons: 150000,
        communities: 500,
        countries: 85
    };

    useEffect(() => {
        const animateCounters = () => {
            const duration = 2000;
            const steps = 60;
            const stepDuration = duration / steps;

            let currentStep = 0;
            const timer = setInterval(() => {
                currentStep++;
                const progress = currentStep / steps;

                setCounters({
                    users: Math.floor(finalCounts.users * progress),
                    lessons: Math.floor(finalCounts.lessons * progress),
                    communities: Math.floor(finalCounts.communities * progress),
                    countries: Math.floor(finalCounts.countries * progress)
                });

                if (currentStep >= steps) {
                    clearInterval(timer);
                    setCounters(finalCounts);
                }
            }, stepDuration);
        };

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    animateCounters();
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );

        const statsElement = document.getElementById('stats-section');
        if (statsElement) {
            observer.observe(statsElement);
        }

        return () => observer.disconnect();
    }, []);

    const teamMembers = [
        {
            name: "Nusrat Jahan",
            role: "Founder & CEO",
            bio: "Former therapist turned tech entrepreneur, passionate about making wisdom accessible to everyone.",
            image: "https://i.ibb.co.com/21CcGhj4/profile.jpg"
        },
        {
            name: "Nila Moni",
            role: "Head of Product",
            bio: "UX designer with 10+ years creating meaningful digital experiences that connect people.",
            image: "https://i.ibb.co.com/WN0BbwdV/photo-1494790108377-be9c29b29330-q-80-w-687-auto-format-fit-crop-ixlib-rb-4-1.jpg"
        },
        {
            name: "Sarah Jahan",
            role: "Chief Psychology Officer",
            bio: "Clinical psychologist specializing in emotional intelligence and personal development.",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face"
        },
        {
            name: "Jannatul Naima ",
            role: "Lead Developer",
            bio: "Full-stack engineer focused on building scalable platforms that handle millions of stories.",
            image: "https://i.ibb.co.com/FqjgGXFB/photo-1438761681033-6461ffad8d80-q-80-w-1170-auto-format-fit-crop-ixlib-rb-4-1.jpg"
        }
    ];

    const values = [
        {
            icon: <Heart className="w-8 h-8" />,
            title: "Community First",
            description: "We believe in the power of shared experiences and collective wisdom to transform lives."
        },
        {
            icon: <Book className="w-8 h-8" />,
            title: "Continuous Growth",
            description: "Every lesson is an opportunity to grow. We're committed to lifelong learning and development."
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: "Privacy & Safety",
            description: "Your stories are sacred. We protect your privacy while fostering a safe space for sharing."
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Inclusive Wisdom",
            description: "Wisdom comes from all walks of life. We celebrate diverse perspectives and experiences."
        }
    ];

    const timeline = [
        {
            year: "2021",
            title: "The Idea",
            description: "Founded with a simple belief: everyone has wisdom worth sharing."
        },
        {
            year: "2022",
            title: "First Community",
            description: "Launched with 100 beta users sharing their first life lessons."
        },
        {
            year: "2023",
            title: "Global Reach",
            description: "Expanded to 50 countries with emotional tagging system."
        },
        {
            year: "2024",
            title: "Premium Launch",
            description: "Introduced expert content and advanced community features."
        }
    ];

    return (
        <div className="min-h-screen bg-base-100 dark:bg-gray-900 transition-colors duration-300">

            {/* Mission & Values */}
            <section className="py-16 bg-white dark:bg-gray-800 transition-colors duration-300">
                <div className="max-w-6xl mx-auto px-2 lg:px-4">
                    <SectionHeader
                        subtitle="Our Philosophy"
                        title="Our"
                        highlight="Values"
                        description="These core principles guide everything we do and shape the community we're building together"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="bg-linear-to-br from-[#A0EBEB]/20 to-[#EDBC98]/20 dark:from-gray-700 dark:to-gray-600 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                            >
                                <div className="text-[#F69074] mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 transition-colors duration-300">
                                    {value.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-16">
                <div className="max-w-6xl mx-auto px-2 sm:px-3 lg:px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
                            Meet Our Team
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
                            Passionate individuals dedicated to creating meaningful connections through shared wisdom.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teamMembers.map((member, index) => (
                            <div
                                key={index}
                                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                            >
                                <div className="relative mb-6">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-24 h-24 rounded-full mx-auto object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 rounded-full bg-linear-to-tr from-[#F69074]/20 to-[#02A2A2]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 text-center transition-colors duration-300">
                                    {member.name}
                                </h3>
                                <p className="text-[#02A2A2] font-semibold mb-3 text-center">
                                    {member.role}
                                </p>
                                <p className="text-gray-600 dark:text-gray-300 text-sm text-center transition-colors duration-300">
                                    {member.bio}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-16 bg-white dark:bg-gray-800 transition-colors duration-300">
                <div className="max-w-6xl mx-auto px-2 lg:px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
                            Our Journey
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
                            From a simple idea to a global community of wisdom seekers.
                        </p>
                    </div>

                    <div className="relative">
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-linear-to-b from-[#F69074] to-[#02A2A2]"></div>

                        {timeline.map((item, index) => (
                            <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                                    <div className="bg-linear-to-br from-[#A0EBEB]/20 to-[#EDBC98]/20 dark:from-gray-700 dark:to-gray-600 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                                        <div className="flex items-center mb-3">
                                            <span className="bg-[#F69074] text-white px-3 py-1 rounded-full text-sm font-bold">
                                                {item.year}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>

                                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#02A2A2] rounded-full border-4 border-white dark:border-gray-800 shadow-lg"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Counter */}
            <section id="stats-section" className="py-16">
                <div className="max-w-6xl mx-auto px-2 lg:px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
                            Our Impact
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
                            Together, we're building the world's largest collection of life wisdom.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="text-center">
                            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                                <Users className="w-12 h-12 text-[#F69074] mx-auto mb-4" />
                                <div className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                                    {counters.users.toLocaleString()}+
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">Active Users</p>
                            </div>
                        </div>

                        <div className="text-center">
                            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                                <Book className="w-12 h-12 text-[#02A2A2] mx-auto mb-4" />
                                <div className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                                    {counters.lessons.toLocaleString()}+
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">Life Lessons</p>
                            </div>
                        </div>

                        <div className="text-center">
                            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                                <Heart className="w-12 h-12 text-[#EDBC98] mx-auto mb-4" />
                                <div className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                                    {counters.communities.toLocaleString()}+
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">Communities</p>
                            </div>
                        </div>

                        <div className="text-center">
                            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                                <Globe className="w-12 h-12 text-[#A0EBEB] mx-auto mb-4" />
                                <div className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                                    {counters.countries}+
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">Countries</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-linear-to-r from-[#F69074] to-[#02A2A2]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                        Ready to Share Your Wisdom?
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Join thousands of others who are transforming lives through shared experiences and collective wisdom.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/signup"
                            className="bg-white text-[#02A2A2] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                        >
                            Join Our Community
                        </Link>
                        <Link
                            to="/lessons"
                            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#02A2A2] transition-all duration-300 hover:scale-105"
                        >
                            Explore Lessons
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;