import { ChevronDown, Lock, Crown, Download, Shield, Share2, Users } from "lucide-react";
import { useState } from "react";

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "Is my personal data and lessons kept private?",
            answer: "Yes! You control the visibility of each lesson. Private lessons are only visible to you, while public lessons can be shared with the community.",
            icon: Lock,
            color: "#02A2A2"
        },
        {
            question: "What's the difference between Free and Premium?",
            answer: "Free users can create and view public free lessons. Premium users can create premium lessons, access all premium content, enjoy ad-free experience, and get priority features.",
            icon: Crown,
            color: "#F69074"
        },
        {
            question: "Can I export my lessons or download them?",
            answer: "Yes! Premium users can export their lessons as PDF documents. Free users can copy their lessons manually.",
            icon: Download,
            color: "#EDBC98"
        },
        {
            question: "How are inappropriate lessons moderated?",
            answer: "We have a community reporting system. Users can report lessons, and our team reviews reports to maintain a safe, respectful environment.",
            icon: Shield,
            color: "#A0EBEB"
        },
        {
            question: "Can I share my lessons on social media?",
            answer: "Absolutely! Every public lesson has social sharing buttons for Facebook, X (Twitter), LinkedIn, and direct links.",
            icon: Share2,
            color: "#02A2A2"
        },
        {
            question: "Can I collaborate with others on lessons?",
            answer: "Currently, lessons are individual. However, you can mention other users in comments and create lessons inspired by others' stories.",
            icon: Users,
            color: "#F69074"
        }
    ];

    const handleFAQClick = (index) => {
        if (openIndex === index) {
            setOpenIndex(null); // Close if clicking the same one
        } else {
            setOpenIndex(index); // Open the clicked one
        }
    };

    return (
        <section className="py-16 px-6 dark:bg-gray-900">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-3 mb-4">
                        <div className="w-12 h-1 bg-[#F69074] dark:bg-[#F69074]/80 rounded-full" />
                        <span className="text-[#02A2A2] dark:text-[#A0EBEB] font-semibold uppercase tracking-wider text-sm">
                            Common Questions
                        </span>
                        <div className="w-12 h-1 bg-[#02A2A2] dark:bg-[#02A2A2]/80 rounded-full" />
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
                        Frequently Asked <span className="text-[#F69074] dark:text-[#F69074]">Questions</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Find quick answers about Digital Life Lessons platform
                    </p>
                </div>

                {/* FAQ Items */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => {
                        const Icon = faq.icon;
                        const isOpen = openIndex === index;

                        return (
                            <div
                                key={index}
                                className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
                            >
                                <button
                                    onClick={() => handleFAQClick(index)}
                                    className="w-full p-6 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-gray-750 "
                                >
                                    <div className="flex items-center gap-4">
                                        <div
                                            className="w-10 h-10 rounded-xl flex items-center justify-center"
                                            style={{
                                                backgroundColor: `${faq.color}15`,
                                                border: `2px solid ${faq.color}30`
                                            }}
                                        >
                                            <Icon
                                                className="w-5 h-5"
                                                style={{ color: faq.color }}
                                            />
                                        </div>
                                        <h3 className="font-semibold text-gray-800 dark:text-gray-400 pr-4">
                                            {faq.question}
                                        </h3>
                                    </div>
                                    <ChevronDown
                                        className={`w-5 h-5 text-gray-400 dark:text-gray-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
                                    />
                                </button>

                                <div
                                    className={`transition-all duration-300 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                                >
                                    <div className="px-6 pb-6 ml-18">
                                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l-2"
                                            style={{ borderLeftColor: faq.color }}>
                                            {faq.answer}
                                        </p>

                                        {index === 1 && (
                                            <div className="mt-4 flex items-center gap-3 pl-2">
                                                <a
                                                    href="/pricing"
                                                    className="px-3 py-1 text-sm rounded-full font-medium transition-all"
                                                    style={{
                                                        backgroundColor: `${faq.color}15`,
                                                        color: faq.color
                                                    }}
                                                >
                                                    View pricing →
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Contact Support */}
                <div className="mt-12 text-center">
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                        Still have questions?{" "}
                        <a
                            href="mailto:support@lifelessons.com"
                            className="text-[#02A2A2] dark:text-[#A0EBEB] font-medium hover:underline"
                        >
                            Contact our support team
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default FAQ;