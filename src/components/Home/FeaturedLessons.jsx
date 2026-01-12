import React from 'react';
import { useQuery } from '@tanstack/react-query'
import { FaStar, FaEye } from 'react-icons/fa';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import LessonCard from './Lessons/LessonCard';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/autoplay';

const FeaturedLessons = () => {
    const axiosSecure = useAxiosSecure();

    const { data: featuredLessons = [], isLoading } = useQuery({
        queryKey: ['featuredLessons'],
        queryFn: async () => {
            const res = await axiosSecure.get('/lessons/featured');
            return res.data;
        }
    });

    if (isLoading) {
        return (
            <div className="text-center py-12">
                <span className="loading loading-spinner loading-lg text-primary"></span>
            </div>
        );
    }

    return (
        <section className="py-10 bg-secondary dark:bg-gray-800 transition-colors duration-300">
            <div className="mx-auto p-2 max-w-6xl">
                {/* Section Header */}
                <div className="text-center">
                    <div className="inline-flex items-center justify-center gap-3 mb-4">
                        <div className="w-10 h-1 bg-white/80 dark:bg-[#F69074]/80 rounded-full"></div>
                        <FaStar className="text-white dark:text-[#F69074] text-xl" />
                        <div className="w-10 h-1 bg-white/80 dark:bg-[#F69074]/80 rounded-full"></div>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white dark:text-white mb-3">
                        Featured Life Lessons
                    </h2>
                    <p className="text-gray-100 dark:text-gray-300 max-w-2xl mx-auto">
                        Handpicked wisdom from our community
                    </p>
                </div>

                {/* Featured Lessons Grid */}
                {featuredLessons.length > 0 ? (
                    <div className="relative">
                        {/* Background decorative elements */}
                        <div className="absolute inset-0">
                            <div className="absolute -top-10 left-1/4 w-32 h-32 bg-white/5 dark:bg-[#F69074]/5 rounded-full blur-3xl"></div>
                            <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-white/5 dark:bg-[#02A2A2]/5 rounded-full blur-3xl"></div>
                        </div>
                        
                        <Swiper
                            effect={'coverflow'}
                            grabCursor={true}
                            centeredSlides={true}
                            spaceBetween={30}
                            slidesPerView={1}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1,
                                },
                                768: {
                                    slidesPerView: 2,
                                },
                                1024: {
                                    slidesPerView: 3,
                                },
                            }}
                            coverflowEffect={{
                                rotate: 10,
                                stretch: 0,
                                depth: 100,
                                modifier: 2,
                                scale: 0.85,
                                slideShadows: true,
                            }}
                            loop={true}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true,
                            }}
                            modules={[EffectCoverflow, Autoplay]}
                            className="featuredSwiper pb-2"
                        >
                            {featuredLessons.map((lesson) => (
                                <SwiperSlide key={lesson._id} className="py-3">
                                    <div className="transform transition-transform duration-500 hover:scale-[1.02]">
                                        <LessonCard lesson={lesson} />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        
                        {/* Swiper pagination dots */}
                        <div className="flex justify-center gap-2 mt-3">
                            {[...Array(Math.min(featuredLessons.length, 5))].map((_, index) => (
                                <div 
                                    key={index}
                                    className="w-2 h-2 rounded-full bg-white/50 dark:bg-gray-600 transition-all duration-300"
                                ></div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="text-center py-16 bg-white/20 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border-2 border-dashed border-white/30 dark:border-gray-700/50">
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 dark:bg-gray-700/50 mb-6">
                            <FaStar className="text-3xl text-white/70 dark:text-gray-500" />
                        </div>
                        <h3 className="text-xl font-semibold text-white dark:text-gray-300 mb-3">
                            No Featured Lessons Yet
                        </h3>
                        <p className="text-gray-100 dark:text-gray-400 max-w-md mx-auto">
                            Admin will feature exceptional lessons here. Check back soon!
                        </p>
                        <div className="mt-6 inline-flex items-center gap-2 text-white/60 dark:text-gray-500 text-sm">
                            <FaEye className="animate-pulse" />
                            <span>Lessons will appear here when featured</span>
                        </div>
                    </div>
                )}
            </div>

            {/* Custom CSS for Swiper */}
            <style>{`
                .featuredSwiper {
                    padding: 40px 0;
                }
                
                .featuredSwiper .swiper-slide {
                    opacity: 0.4;
                    transition: opacity 0.3s ease;
                }
                
                .featuredSwiper .swiper-slide-active {
                    opacity: 1;
                }
                
                .featuredSwiper .swiper-slide-prev,
                .featuredSwiper .swiper-slide-next {
                    opacity: 0.7;
                }
                
                /* Shadow effect for cards */
                .featuredSwiper .swiper-slide-active > div {
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1), 0 0 20px rgba(246, 144, 116, 0.3);
                }
                
                .dark .featuredSwiper .swiper-slide-active > div {
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3), 0 0 20px rgba(246, 144, 116, 0.2);
                }
                
                /* Navigation arrows */
                .featuredSwiper .swiper-button-next,
                .featuredSwiper .swiper-button-prev {
                    color: white;
                    background: rgba(246, 144, 116, 0.8);
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    display: none; /* Hide default arrows if not needed */
                }
                
                @media (min-width: 768px) {
                    .featuredSwiper .swiper-button-next,
                    .featuredSwiper .swiper-button-prev {
                        display: flex;
                    }
                }
                
                .dark .featuredSwiper .swiper-button-next,
                .dark .featuredSwiper .swiper-button-prev {
                    background: rgba(2, 162, 162, 0.8);
                }
                
                /* Scrollbar */
                .featuredSwiper .swiper-scrollbar {
                    background: rgba(255, 255, 255, 0.2);
                }
                
                .dark .featuredSwiper .swiper-scrollbar {
                    background: rgba(255, 255, 255, 0.1);
                }
            `}</style>
        </section>
    );
};

export default FeaturedLessons;