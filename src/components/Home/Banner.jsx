import React, { useState } from 'react';
import { Link } from 'react-router';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            title: "Organize Lessons by Emotional Tone",
            description: "Tag your life lessons as Motivational, Reflective, Sad, Gratitude, or Realization. Find exactly what you need based on how it makes you feel.",
            buttonText: "Start Organizing",
            link: "/public-lessons",
            image: "https://i.ibb.co.com/FkX8KP4k/photo-1638641022726-dae19e1c0406-q-80-w-2070-auto-format-fit-crop-ixlib-rb-4-1.jpg"
        },
        {
            title: "Premium Exclusive Content",
            description: "Access curated wisdom from thought leaders, exclusive interviews, and deep-dive lessons that transform your perspective on life.",
            buttonText: "Go Premium",
            link: "/payment",
            image: "https://i.ibb.co.com/1fQDdKXK/photo-1519389950473-47ba0277781c-w-600-h-400-fit-crop-crop-center.jpg"
        },
        {
            title: "Community Sharing Features",
            description: "Share your personal stories and learn from others. Build connections through shared experiences and collective wisdom.",
            buttonText: "Join Community",
            link: "/auth/login",
            image: "https://i.ibb.co.com/vypLRfx/photo-1522202176988-66273c2fd55f-w-600-h-400-fit-crop-crop-center.jpg"
        },
        {
            title: "Personal Growth Tracking",
            description: "Monitor your journey with insights analytics. Track which lessons resonate most and see your personal development over time.",
            buttonText: "Track Progress",
            link: "/dashboard",
            image: "https://i.ibb.co.com/7JHYcnZD/photo-1481627834876-b7833e8f5570-w-600-h-400-fit-crop-crop-center.jpg"
        },
        {
            title: "Save Your Favorite Lessons",
            description: "Bookmark meaningful insights and create your personal wisdom library. Revisit lessons that inspire you whenever you need guidance.",
            buttonText: "Save Lessons",
            link: "/dashboard/my-lessons",
            image: "https://i.ibb.co.com/LhJ1hP6Z/photo-1434030216411-0b793f4b4173-w-600-h-400-fit-crop-crop-center.jpg"
        }
    ];

    const handleSlideChange = (index) => {
        setCurrentSlide(index);
    };

    const handleThumbnailClick = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div className="w-full transition-colors duration-300">
            {/* Main Slider */}
            <div className="w-full h-[65vh] min-h-[400px] relative bg-linear-to-br from-[#F2FAEF] to-[#A0EBEB]/20 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
                <Carousel
                    selectedItem={currentSlide}
                    onChange={handleSlideChange}
                    autoPlay={true}
                    interval={5000}
                    infiniteLoop={true}
                    showThumbs={false}
                    showStatus={false}
                    showIndicators={true}
                    stopOnHover={true}
                    swipeable={true}
                    emulateTouch={true}
                    className="h-full"
                    renderArrowPrev={(onClickHandler, hasPrev, label) =>
                        hasPrev && (
                            <button
                                type="button"
                                onClick={onClickHandler}
                                title={label}
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-[#02A2A2] hover:bg-[#028a8a] text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                                aria-label="Previous slide"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                        )
                    }
                    renderArrowNext={(onClickHandler, hasNext, label) =>
                        hasNext && (
                            <button
                                type="button"
                                onClick={onClickHandler}
                                title={label}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-[#02A2A2] hover:bg-[#028a8a] text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                                aria-label="Next slide"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        )
                    }
                >
                    {slides.map((slide, index) => (
                        <div key={index} className="h-[65vh] min-h-[400px] flex items-center justify-center p-4 lg:p-8">
                            <div className="rounded-2xl overflow-hidden shadow-2xl p-6 bg-[#A0EBEB]/10 dark:bg-gray-800/50 grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[350px] max-w-7xl w-full transition-colors duration-300">
                                {/* Text Content - Right side on desktop, top on mobile */}
                                <div className="md:order-1 order-2 p-4">
                                    <h2 className="text-2xl lg:text-3xl font-bold mb-3 leading-tight text-gray-800 dark:text-white transition-colors duration-300">
                                        {slide.title}
                                    </h2>
                                    <p className="text-xl mb-6 text-gray-600 dark:text-gray-300 transition-colors duration-300">
                                        {slide.description}
                                    </p>
                                    <Link
                                        to={slide.link}
                                        className="group inline-flex items-center gap-2 bg-[#02A2A2] hover:bg-[#028a8a] text-white border-0 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                                    >
                                        {slide.buttonText}
                                        <span className="opacity-0 group-hover:opacity-100 -translate-x-2.5 group-hover:translate-x-0 transition-all duration-300">
                                            →
                                        </span>
                                    </Link>
                                </div>

                                {/* Image - Left side on desktop, bottom on mobile */}
                                <div className="md:order-2 order-1 flex justify-center items-center">
                                    <img
                                        src={slide.image}
                                        alt={slide.title}
                                        className="w-full h-80 object-cover rounded-xl shadow-2xl transform transition duration-500 hover:scale-105"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>

            {/* Preview Thumbnails */}
            <div className="w-full bg-white dark:bg-gray-900 py-6 px-4 transition-colors duration-300">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                        {slides.map((slide, index) => (
                            <button
                                key={index}
                                onClick={() => handleThumbnailClick(index)}
                                className={`group relative overflow-hidden rounded-lg transition-all duration-300 hover:scale-105 ${currentSlide === index
                                        ? 'ring-4 ring-[#F69074] shadow-lg'
                                        : 'hover:shadow-md'
                                    }`}
                                aria-label={`Go to slide ${index + 1}: ${slide.title}`}
                            >
                                <div className="aspect-video relative">
                                    <img
                                        src={slide.image}
                                        alt={slide.title}
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                                    <div className="absolute bottom-2 left-2 right-2">
                                        <h3 className="text-white text-sm font-semibold leading-tight line-clamp-2">
                                            {slide.title}
                                        </h3>
                                    </div>
                                </div>
                                {currentSlide === index && (
                                    <div className="absolute top-2 right-2 bg-[#F69074] text-white rounded-full p-1">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;