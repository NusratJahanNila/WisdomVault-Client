import { BookOpen, Heart, Save, Crown } from "lucide-react";
import Container from "../../Shared/Container";

const HowItWorks = () => {
    const steps = [
        {
            title: "Explore Life Lessons",
            description: "Browse lessons shared from real experiences across different categories and emotions.",
            icon: BookOpen,
            color: "#F69074"
        },
        {
            title: "Connect Emotionally",
            description: "Discover lessons by emotional tone — reflective, motivational, healing, or inspiring.",
            icon: Heart,
            color: "#EDBC98"
        },
        {
            title: "Save What Resonates",
            description: "Save meaningful lessons to revisit whenever you need clarity or motivation.",
            icon: Save,
            color: "#A0EBEB"
        },
        {
            title: "Unlock Deeper Wisdom",
            description: "Upgrade to premium and access exclusive, in-depth life lessons.",
            icon: Crown,
            color: "#02A2A2"
        },
    ];

    return (
        <section className=" py-16 dark:bg-gray-900 transition-colors duration-300 ">
            {/* Header */}
            <header className="mb-12 text-center">
                <div className="inline-flex items-center gap-3 mb-4">
                    <div className="w-8 h-1 bg-[#F69074] dark:bg-[#F69074]/80 rounded-full" />
                    <span className="text-[#02A2A2] dark:text-[#A0EBEB] font-semibold uppercase tracking-wider text-sm">
                        Simple Process
                    </span>
                    <div className="w-8 h-1 bg-[#02A2A2] dark:bg-[#02A2A2]/80 rounded-full" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-2 dark:text-white">
                    HOW IT <span className="text-[#F69074] dark:text-[#F69074]">WORKS</span>
                </h2>
                <p className="text-gray-500 dark:text-gray-400">
                    Discover, save, and share life lessons that truly matter.
                </p>
            </header>

            {/* Steps Container */}
            <div className="relative mx-auto max-w-6xl">
                {/* Horizontal Dotted Line (Desktop only) */}
                <div className="md:absolute md:top-16 md:left-0 md:w-full md:h-0 md:border-t-2 md:border-dashed md:border-gray-300 dark:md:border-gray-700 md:z-0 md:block hidden" />

                {/* Steps Grid */}
                <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 z-10 ">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <div key={index} className="flex flex-col items-center text-center group">
                                {/* Step Number */}
                                <div className="text-4xl font-black text-gray-200 dark:text-gray-800 mb-2">
                                    0{index + 1}
                                </div>

                                {/* Icon Circle */}
                                <div
                                    className="relative w-20 h-20 rounded-full shadow-xl flex items-center justify-center mb-6 border-4 border-white dark:border-gray-900 transition-transform duration-300 group-hover:scale-110"
                                    style={{
                                        background: `linear-gradient(135deg, ${step.color}, ${step.color}CC)`
                                    }}
                                >
                                    <Icon className="text-white w-8 h-8" />
                                </div>

                                {/* Content */}
                                <h3 className="text-lg font-bold mb-3 dark:text-white">
                                    {step.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm px-2">
                                    {step.description}
                                </p>

                                {/* Connecting Arrow (Mobile only) */}
                                {index < steps.length - 1 && (
                                    <div className="md:hidden mt-6">
                                        <div className="h-6 w-0.5 bg-gray-300 dark:bg-gray-700 mx-auto"></div>
                                        <div className="text-gray-400 dark:text-gray-600">↓</div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;