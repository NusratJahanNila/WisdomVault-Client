import React from 'react';
import { Briefcase, User, Heart, Brain, Compass, Sparkles } from 'lucide-react';

const LessonsOrganized = () => {
    const categories = [
        {
            title: "Career",
            description: "Professional journeys and workplace wisdom",
            icon: <Briefcase className="w-5 h-5" />,
            color: "from-[#02A2A2] to-[#02A2A2]/80"
        },
        {
            title: "Personal Growth",
            description: "Self-discovery and inner transformation",
            icon: <User className="w-5 h-5" />,
            color: "from-[#F69074] to-[#EDBC98]"
        },
        {
            title: "Relationships",
            description: "Lessons learned through human connections",
            icon: <Heart className="w-5 h-5" />,
            color: "from-[#A0EBEB] to-[#02A2A2]"
        },
        {
            title: "Mindset",
            description: "Perspectives that shape our worldview",
            icon: <Brain className="w-5 h-5" />,
            color: "from-[#EDBC98] to-[#F69074]"
        },
        {
            title: "Life",
            description: "Universal truths from lived experiences",
            icon: <Compass className="w-5 h-5" />,
            color: "from-[#02A2A2] to-[#A0EBEB]"
        }
    ];

    const emotions = [
        {
            name: "Motivational",
            color: "bg-gradient-to-r from-[#02A2A2]/20 to-[#A0EBEB]/20 text-[#02A2A2] dark:text-[#A0EBEB] border border-[#02A2A2]/20 dark:border-[#02A2A2]/30"
        },
        {
            name: "Reflective",
            color: "bg-gradient-to-r from-[#F69074]/20 to-[#EDBC98]/20 text-[#F69074] dark:text-[#EDBC98] border border-[#F69074]/20 dark:border-[#F69074]/30"
        },
        {
            name: "Inspiring",
            color: "bg-gradient-to-r from-[#02A2A2]/20 to-[#028a8a]/20 text-[#028a8a] dark:text-[#A0EBEB] border border-[#02A2A2]/20 dark:border-[#02A2A2]/30"
        },
        {
            name: "Sad",
            color: "bg-gradient-to-r from-[#A0EBEB]/20 to-[#02A2A2]/20 text-[#02A2A2] dark:text-[#A0EBEB] border border-[#A0EBEB]/20 dark:border-[#A0EBEB]/30"
        },
        {
            name: "Gratitude",
            color: "bg-gradient-to-r from-[#EDBC98]/20 to-[#F69074]/20 text-[#F69074] dark:text-[#EDBC98] border border-[#EDBC98]/20 dark:border-[#EDBC98]/30"
        },
        {
            name: "Realization",
            color: "bg-gradient-to-r from-[#02A2A2]/20 to-[#F69074]/20 text-[#028a8a] dark:text-[#A0EBEB] border border-[#02A2A2]/20 dark:border-[#02A2A2]/30"
        }
    ];

    return (
        <section className="py-16 px-6 bg-[#F2FAEF] dark:bg-gray-900 transition-colors duration-300">
            <div className="max-w-6xl mx-auto">
                {/* Header - Consistent with other components */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-3 mb-4">
                        <div className="w-10 h-1 bg-[#F69074] dark:bg-[#F69074]/80 rounded-full" />
                        <span className="text-[#02A2A2] dark:text-[#A0EBEB] font-semibold uppercase tracking-wider text-sm">
                            Explore Wisdom
                        </span>
                        <div className="w-10 h-1 bg-[#02A2A2] dark:bg-[#02A2A2]/80 rounded-full" />
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
                        Lessons Organized by <span className="text-[#F69074] dark:text-[#F69074]">Meaning</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
                        Discover insights based on life areas and the emotions behind them
                    </p>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    
                    {/* Left Column - Categories with Cards */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 rounded-xl bg-linear-to-br from-[#02A2A2]/20 to-[#02A2A2]/10 flex items-center justify-center">
                                <Sparkles className="w-5 h-5 text-[#02A2A2] dark:text-[#A0EBEB]" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                                Life Categories
                            </h3>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {categories.map((category, index) => (
                                <div
                                    key={index}
                                    className="group relative bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-lg hover:shadow-xl dark:shadow-gray-900/50 transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700 overflow-hidden cursor-default"
                                >
                                    {/* Background gradient effect */}
                                    <div className={`absolute inset-0 bg-linear-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                                    
                                    <div className="relative z-10 flex items-start gap-4">
                                        <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${category.color} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                                            <div className="text-white">
                                                {category.icon}
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-bold text-gray-800 dark:text-white mb-2">
                                                {category.title}
                                            </h4>
                                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                                {category.description}
                                            </p>
                                        </div>
                                    </div>
                                    
                                    {/* Corner accent */}
                                    <div className="absolute top-0 right-0 w-12 h-12">
                                        <div className="absolute top-0 right-0 w-0 h-0 border-t-48 border-r-48 border-t-transparent border-r-white/5 dark:border-r-gray-700/50 rounded-tr-2xl" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column - Emotional Tones */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 rounded-xl bg-linear-to-br from-[#F69074]/20 to-[#EDBC98]/10 flex items-center justify-center">
                                <Heart className="w-5 h-5 text-[#F69074] dark:text-[#EDBC98]" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                                Emotional Tone
                            </h3>
                        </div>
                        
                        <p className="text-gray-600 dark:text-gray-400">
                            Find wisdom that resonates with your emotional state
                        </p>

                        {/* Emotion Tags Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            {emotions.map((emotion, index) => (
                                <div
                                    key={index}
                                    className={`${emotion.color} rounded-xl px-4 py-3 text-center font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-default group relative overflow-hidden`}
                                >
                                    <div className="relative z-10">{emotion.name}</div>
                                    <div className="absolute inset-0 bg-white/20 dark:bg-gray-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                            ))}
                        </div>

                        {/* Info Card */}
                        <div className="bg-linear-to-br from-[#F2FAEF] to-white dark:from-gray-800 dark:to-gray-800/50 rounded-2xl p-6 border-2 border-dashed border-[#02A2A2]/30 dark:border-[#02A2A2]/20">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-[#02A2A2]/20 to-[#A0EBEB]/20 flex items-center justify-center shrink-0">
                                    <span className="text-xl">💡</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800 dark:text-white mb-2">
                                        Why Emotional Context Matters
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                                        The emotional tone of a lesson shapes how we receive and apply its wisdom to our lives. Emotions add depth and meaning to every experience.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LessonsOrganized;