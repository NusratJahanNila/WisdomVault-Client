import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

const CTA = () => {
    return (
        <section className="py-16 px-6  dark:bg-gray-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto ">
                <div className="bg-[#02A2A2] dark:bg-gray-800 rounded-2xl p-8 md:p-12 text-center shadow-lg dark:shadow-gray-900/50 border border-gray-100 dark:border-gray-700">
                    {/* Header */}
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                        Ready to Share Your <span className="text-[#F69074] dark:text-[#F69074]">Wisdom</span>?
                    </h2>
                    
                    <p className="text-gray-300 dark:text-gray-400 mb-8 text-lg max-w-2xl mx-auto">
                        Join our community of learners and share life lessons that inspire growth.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/signup"
                            className="px-8 py-3 bg-white  text-gray-900 font-semibold rounded-lg hover:bg-[#028a8a] dark:hover:bg-[#028a8a] transition-colors duration-300 flex items-center justify-center gap-2"
                        >
                            Get Started Free
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                        
                        <Link
                            to="/payment"
                            className="px-8 py-3 border-2 border-[#F69074] dark:border-[#F69074] text-[#F69074] hover:text-white dark:text-[#F69074] font-semibold rounded-lg hover:bg-[#F69074] dark:hover:bg-[#F69074]/10 transition-colors duration-300"
                        >
                            View Premium Plans
                        </Link>
                    </div>

                    {/* Footer Note */}
                    <p className="mt-8 text-gray-300 dark:text-gray-400 text-sm">
                        No credit card required • Join 5,000+ members
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CTA;